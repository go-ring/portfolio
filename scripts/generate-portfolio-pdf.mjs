import { chromium } from '@playwright/test';
import { createReadStream, existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const rootDir = process.cwd();
const outDir = path.resolve(rootDir, 'dist');
const outFile = path.join(outDir, 'portfolio.pdf');
const port = 4173;
const url = `http://127.0.0.1:${port}/?print=1`;

const mimeTypes = {
  '.bmp': 'image/bmp',
  '.css': 'text/css',
  '.gif': 'image/gif',
  '.html': 'text/html',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function staticFilePath(requestUrl) {
  const parsedUrl = new URL(requestUrl, `http://127.0.0.1:${port}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);
  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const resolvedPath = path.resolve(outDir, `.${requestedPath}`);

  if (!resolvedPath.startsWith(outDir)) {
    return undefined;
  }

  return existsSync(resolvedPath) ? resolvedPath : path.join(outDir, 'index.html');
}

async function createStaticServer() {
  const server = createServer((request, response) => {
    const filePath = staticFilePath(request.url ?? '/');

    if (!filePath) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      'Content-Type': mimeTypes[ext] ?? 'application/octet-stream',
    });
    createReadStream(filePath).pipe(response);
  });

  await new Promise((resolve) => {
    server.listen(port, '127.0.0.1', resolve);
  });

  return server;
}

await mkdir(outDir, { recursive: true });

const server = await createStaticServer();

try {
  const result = await new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve({ ok: false, error: new Error('Timed out generating portfolio PDF.') });
    }, 120000);

    chromium.launch().then(async (browser) => {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1800 } });
      await page.goto(url, { waitUntil: 'load' });
      await page.locator('.pdf-document').waitFor({ state: 'visible', timeout: 30000 });
      await page.emulateMedia({ media: 'print' });
      await page.pdf({
        path: outFile,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
      });
      await browser.close();
      clearTimeout(timeout);
      resolve({ ok: true });
    }).catch((error) => {
      clearTimeout(timeout);
      resolve({ ok: false, error });
    });
  });

  if (!result.ok) {
    throw result.error;
  }

  console.log(`PDF generated: ${outFile}`);
} finally {
  await new Promise((resolve) => server.close(resolve));
}
