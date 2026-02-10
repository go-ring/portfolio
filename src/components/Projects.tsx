import React, { useState } from 'react';
import { Section } from './Section';
import { projects, Project } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" title="프로젝트">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group bg-surface rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
          >
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex gap-2 mb-4">
                 <span className="px-3 py-1 bg-[#10141b] rounded-full text-xs font-medium text-gray-400 border border-white/10">
                   {project.period}
                 </span>
                 <span className="px-3 py-1 bg-[#10141b] rounded-full text-xs font-medium text-gray-400 border border-white/10">
                   {project.type}
                 </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                   <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-md font-medium">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            <div className="px-8 py-4 bg-[#10141b]/50 border-t border-white/5 flex items-center justify-end text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              자세히 보기 <ArrowRight size={16} className="ml-2" />
            </div>
          </motion.div>
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
