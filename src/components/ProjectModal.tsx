import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Trophy } from 'lucide-react';
import { Project } from '../data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const EMPHASIS_TECH = new Set(['Java', 'Spring Boot', 'MySQL']);

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div>
      <h4 className="text-base font-semibold text-white mb-2">
        {title}
      </h4>
      <ul className="space-y-1.5 text-sm text-gray-300 leading-relaxed">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-gray-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="bg-surface w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-white/10 text-white">
              
              {/* Header */}
              <div className="relative p-8 border-b border-white/10 shrink-0 flex justify-between items-start bg-[#10141b]/50">
                <div>
                   <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                   <div className="flex gap-4 text-gray-400 text-sm">
                      <span>{project.period}</span>
                      <span>|</span>
                      <span>{project.role}</span>
                   </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="grid md:grid-cols-[2fr,1fr] gap-10">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-primary pl-3">
                        프로젝트 개요
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-base whitespace-pre-wrap">
                        {project.description}
                      </p>
                    </div>

                    {project.details?.roleAndContribution && project.details.roleAndContribution.length > 0 && (
                      <DetailBlock
                        title="역할 / 기여"
                        items={project.details.roleAndContribution}
                      />
                    )}

                    {project.details?.techAndReason && project.details.techAndReason.length > 0 && (
                      <DetailBlock
                        title="사용 기술과 선택 이유"
                        items={project.details.techAndReason}
                      />
                    )}

                    {project.details?.troubleshooting?.map((section, index) => (
                      <DetailBlock
                        key={section.title + index}
                        title={`트러블슈팅 · 문제 해결 - ${section.title}`}
                        items={section.items}
                      />
                    ))}

                    {project.details?.testing && project.details.testing.length > 0 && (
                      <DetailBlock
                        title="테스트 및 검증"
                        items={project.details.testing}
                      />
                    )}

                    {project.details?.refactoringPlan && project.details.refactoringPlan.length > 0 && (
                      <DetailBlock
                        title="리팩토링 계획 & 다시 한다면"
                        items={project.details.refactoringPlan}
                      />
                    )}

                    {project.details?.retrospective && project.details.retrospective.length > 0 && (
                      <DetailBlock
                        title="회고 · 배운 점"
                        items={project.details.retrospective}
                      />
                    )}

                    {project.impact && (
                      <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                        <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                          <Trophy size={20} />
                          핵심 성과
                        </h4>
                        <p className="text-blue-100 leading-relaxed text-sm">
                          {project.impact}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => {
                          const isEmphasis = EMPHASIS_TECH.has(tech);
                          return (
                            <span
                              key={tech}
                              className={
                                "px-3 py-1.5 rounded-lg text-sm font-medium border " +
                                (isEmphasis
                                  ? "bg-primary/20 text-primary border-primary/60"
                                  : "bg-[#10141b] text-gray-300 border-white/10")
                              }
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Links</h4>
                      <div className="flex flex-col gap-3">
                        {project.links.repo && (
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-primary font-medium transition-colors"
                          >
                            <Github size={18} /> Source Code
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-primary font-medium transition-colors"
                          >
                            <ExternalLink size={18} /> Live Demo
                          </a>
                        )}
                        {project.links.blog && (
                          <a
                            href={project.links.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-primary font-medium transition-colors"
                          >
                            <ExternalLink size={18} /> Dev Blog
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
