import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [mode = 'baseline'] = process.argv.slice(2);
const outDir = path.resolve('.verification', mode);
async function sourceFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await sourceFiles(fullPath));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(fullPath.replaceAll('\\', '/'));
    }
  }
  return files;
}

const files = await sourceFiles('src');

const importPattern = /import\s+(\w+)\s+from\s+['"]([^'"]+\.(?:png|jpg|jpeg|gif|bmp|svg))['"]/g;
const rows = [];

await mkdir(outDir, { recursive: true });

for (const file of files) {
  const source = await readFile(file, 'utf8');
  let match;
  while ((match = importPattern.exec(source)) !== null) {
    const [, variableName, importPath] = match;
    const usageLines = source
      .split(/\r?\n/)
      .map((line, index) => ({ line, lineNumber: index + 1 }))
      .filter(({ line, lineNumber }) => line.includes(variableName) && lineNumber !== source.slice(0, match.index).split(/\r?\n/).length);

    rows.push({
      variableName,
      importPath,
      declaredIn: file,
      usedAt: usageLines.map(({ lineNumber, line }) => ({
        file,
        lineNumber,
        line: line.trim(),
      })),
    });
  }
}

await writeFile(
  path.join(outDir, 'image-map.json'),
  JSON.stringify(rows, null, 2),
  'utf8',
);
