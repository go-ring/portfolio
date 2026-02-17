import { useState } from 'react';
import { Section } from './Section';
import { projects, Project } from '../data';
import { ProjectModal } from './ProjectModal';
import { ProjectCard } from './projects/ProjectCard';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
            <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)} 
            />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Section>
  );
}

