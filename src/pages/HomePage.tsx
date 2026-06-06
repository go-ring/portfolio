import { About } from '@/features/about/About';
import { Hero } from '@/features/hero/Hero';
import { Projects } from '@/features/projects/Projects';
import { Skills } from '@/features/skills/Skills';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
