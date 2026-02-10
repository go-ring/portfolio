import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Education />
    </Layout>
  );
}

export default App;
