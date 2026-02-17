import { useState } from 'react';
import { Section } from './Section';
import { projects, Project } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

// --- Components ---

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md border border-white/5 font-medium whitespace-nowrap">
    {tech}
  </span>
);

const StandardProjectCard = ({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="group flex flex-col justify-between bg-surface p-5 rounded-xl border border-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:border-white/20 hover:shadow-lg h-[256px]"
    >
      <div>
        {/* Header: Title & Arrow */}
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-100 group-hover:text-primary transition-colors truncate pr-4">
                {project.title}
            </h3>
            <ArrowRight size={18} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </div>

        {/* Type (Added Line) */}
        <div className="mb-3 flex items-center">
            <span className="h-3 w-[2px] bg-primary rounded-full mr-2"></span>
            <p className="text-xs text-gray-300 font-medium truncate">
                {project.type}
            </p>
        </div>

        {/* Meta: Role · Period */}
        <p className="text-xs text-gray-500 mb-2 font-medium truncate">
            <span className="text-gray-300">{Array.isArray(project.role) ? project.role[0] : project.role}</span> · {project.period}
        </p>

        {/* Summary (Strict 2 lines) */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 h-[42px] mb-2 opacity-80">
            {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        {/* Tech Stack (Max 4) */}
        <div className="flex flex-wrap gap-2 mb-3 h-[24px] overflow-hidden">
            {project.tech.slice(0, 4).map(t => <TechBadge key={t} tech={t} />)}
            {project.tech.length > 4 && (
                <span className="text-[10px] text-gray-600 font-medium self-center">+{project.tech.length - 4}</span>
            )}
        </div>

        {/* CTA */}
        <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-primary transition-colors">
            Case Study <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects">


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
            <StandardProjectCard 
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
