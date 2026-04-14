import { test } from '@playwright/test';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const mode = process.env.VERIFY_MODE ?? 'baseline';
const baseUrl = process.env.VERIFY_URL ?? 'http://127.0.0.1:4173/';
const maxDiffPixels = Number(process.env.VERIFY_MAX_DIFF_PIXELS ?? 250000);
const outDir = path.resolve('.verification', mode);
const viewports = [
  { name: 'desktop', width: 1440, height: 1600 },
  { name: 'mobile', width: 390, height: 1200 },
];
const sections = ['home', 'projects', 'skills', 'about'];
const screenshotNames = [];

async function saveOrCompareScreenshot(page, name) {
  const screenshotPath = path.join(outDir, name);
  const image = await page.screenshot({ path: screenshotPath, fullPage: true });
  screenshotNames.push(name);

  if (mode !== 'baseline') {
    const baselinePath = path.resolve('.verification', 'baseline', name);
    const diffPath = path.resolve('.verification', mode, name.replace(/\.png$/, '-diff.png'));
    const baseline = PNG.sync.read(await readFile(baselinePath));
    const current = PNG.sync.read(image);
    if (baseline.width !== current.width || baseline.height !== current.height) {
      throw new Error(`${name} dimensions changed: baseline ${baseline.width}x${baseline.height}, current ${current.width}x${current.height}`);
    }

    const diff = new PNG({ width: baseline.width, height: baseline.height });
    const diffPixels = pixelmatch(baseline.data, current.data, diff.data, baseline.width, baseline.height, {
      threshold: 0.1,
    });
    if (diffPixels > maxDiffPixels) {
      await writeFile(diffPath, PNG.sync.write(diff));
      throw new Error(`${name} visual diff has ${diffPixels} changed pixels`);
    }
  }
}

async function clickNav(page, section, viewportName) {
  if (viewportName === 'mobile' && section !== 'home') {
    await page.locator('header button').first().click();
    await page.waitForTimeout(250);
  }

  await page.locator(`a[href="#${section}"]:visible`).first().evaluate((node) => node.click());
}

test.describe.configure({ mode: 'serial' });

test('portfolio visual and behavior capture', async ({ browser }) => {
  test.setTimeout(180000);
  await mkdir(outDir, { recursive: true });

  const results = {
    mode,
    baseUrl,
    generatedAt: new Date().toISOString(),
    viewports: {},
  };

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    const interactions = [];
    const links = [];

    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await saveOrCompareScreenshot(page, `${viewport.name}-full.png`);
    await writeFile(path.join(outDir, `${viewport.name}-dom.html`), await page.locator('body').evaluate((node) => node.outerHTML), 'utf8');

    for (const section of sections) {
      await clickNav(page, section, viewport.name);
      await page.waitForTimeout(900);
      interactions.push({ type: 'nav-click', target: section, scrollY: await page.evaluate(() => window.scrollY) });
      await saveOrCompareScreenshot(page, `${viewport.name}-${section}.png`);
      await writeFile(
        path.join(outDir, `${viewport.name}-${section}-dom.html`),
        await page.locator('body').evaluate((node) => node.outerHTML),
        'utf8',
      );
    }

    if (viewport.name === 'mobile') {
      await page.locator('header button').first().click();
      await page.waitForTimeout(400);
      interactions.push({ type: 'mobile-menu-open', visible: await page.locator('header + div nav').count() });
      await saveOrCompareScreenshot(page, `${viewport.name}-menu.png`);
    }

    await clickNav(page, 'projects', viewport.name);
    await page.waitForTimeout(900);
    await page.locator('[class*="cursor-pointer"]').first().click();
    await page.waitForTimeout(900);
    const modalVisible = await page.locator('[class*="z-[101]"]').count();
    interactions.push({ type: 'project-card-click', modalVisible });
    await saveOrCompareScreenshot(page, `${viewport.name}-project-modal.png`);
    await writeFile(
      path.join(outDir, `${viewport.name}-project-modal-dom.html`),
      await page.locator('body').evaluate((node) => node.outerHTML),
      'utf8',
    );

    for (const link of await page.locator('a[href]').evaluateAll((nodes) => nodes.map((node) => ({
      text: node.textContent?.trim() ?? '',
      href: node.getAttribute('href'),
      target: node.getAttribute('target'),
    })))) {
      links.push(link);
    }

    results.viewports[viewport.name] = { interactions, links };
    await page.close();
  }

  await writeFile(path.join(outDir, 'interactions.json'), JSON.stringify(results, null, 2), 'utf8');
});
