import { Education } from '@/features/about/Education';
import { Hero } from '@/features/hero/Hero';
import { Projects } from '@/features/projects/Projects';
import { Skills } from '@/features/skills/Skills';

export function HomePage() {
  return (
    <>
      <Hero />
      <Education />
      <Skills />
      <Projects />
    </>
  );
}
