import { createServer } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [mode = 'baseline'] = process.argv.slice(2);
const outDir = path.resolve('.verification', mode);

await mkdir(outDir, { recursive: true });

const server = await createServer({
  logLevel: 'error',
  server: { middlewareMode: true },
});

try {
  const portfolio = await server.ssrLoadModule('/src/constants/portfolio.ts');
  const profileData = await server.ssrLoadModule('/src/constants/profile');

  const snapshot = {
    profile: portfolio.profile,
    skills: portfolio.skills,
    projects: portfolio.projects,
    experience: portfolio.experience,
    education: portfolio.education,
    certifications: portfolio.certifications,
    research: portfolio.research,
    awards: portfolio.awards,
    profileData: profileData.profileData,
  };

  await writeFile(
    path.join(outDir, 'portfolio-data.json'),
    JSON.stringify(snapshot, null, 2),
    'utf8',
  );
} finally {
  await server.close();
}
