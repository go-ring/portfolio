import { useState } from 'react';
import { Section } from './Section';
import { projects, Project } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // 강조할 기술 스택 (카드 미리보기에 표시)
  const emphasisTech = ['Java', 'Spring Boot', 'MySQL'];

  // 카드 미리보기용 기술 스택 추출 함수
  const getPreviewTech = (tech: string[]) => {
    const emphasized = tech.filter(t => emphasisTech.includes(t));
    const rest = tech.filter(t => !emphasisTech.includes(t));
    
    // 강조 기술이 있으면 그것만 표시, 없으면 처음 3개
    if (emphasized.length > 0) {
      return {
        display: emphasized.slice(0, 3),
        restCount: rest.length + (emphasized.length > 3 ? emphasized.length - 3 : 0)
      };
    }
    return {
      display: tech.slice(0, 3),
      restCount: tech.length > 3 ? tech.length - 3 : 0
    };
  };

  return (
    <Section id="projects" title="프로젝트">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const previewTech = getPreviewTech(project.tech);
          
          return (
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
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {Array.isArray(project.role) ? project.role.join(', ') : project.role}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
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
                  {previewTech.display.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                  {previewTech.restCount > 0 && (
                     <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-md font-medium">
                      +{previewTech.restCount}
                    </span>
                  )}
                </div>
              </div>
            
              <div className="px-8 py-4 bg-[#10141b]/50 border-t border-white/5 flex items-center justify-end text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 <ArrowRight size={16} className="ml-2" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Section>
  );
}
