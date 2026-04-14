import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types/project';
import { renderLinked } from '@/utils/renderUtils';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ImplementationCard } from './ImplementationCard';
import { EMPHASIS_TECH, TOC_ITEMS } from './ProjectModal.constants';
import { ProjectModalHeader } from './ProjectModalHeader';
import { ProjectModalLinksSection } from './ProjectModalLinksSection';
import { ProjectModalOutcomesSection } from './ProjectModalOutcomesSection';
import { ProjectModalSidebar } from './ProjectModalSidebar';
import { ProjectModalTroubleshootingSection } from './ProjectModalTroubleshootingSection';


interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { activeId, scrollToId } = useScrollSpy(
    contentRef,
    TOC_ITEMS.map(item => item.id),
    {
      offset: 12,
      rootMargin: '-100px 0px -70% 0px'
    }
  );

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

  const handleScrollTo = (id: string) => {
    scrollToId(id);
  };

  if (!project) return null;

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="bg-surface w-full max-w-7xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-white/10 text-white">

              {/* Header - Compact Single Line */}
              <ProjectModalHeader project={project} headerRef={headerRef} onClose={onClose} />

              <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar: TOC - Sticky */}
                <ProjectModalSidebar activeId={activeId} onScrollTo={handleScrollTo} />

                {/* Main Content - Scrollable */}
                <main
                  ref={contentRef}
                  className="flex-1 overflow-y-auto p-8 md:p-10 scroll-smooth custom-scrollbar bg-[#0f1219]"
                >
                  <div className="max-w-4xl mx-auto space-y-24 pb-32">

                    {/* 1. Overview */}
                    <section id="overview" className="space-y-6 scroll-mt-24">

                      {/* Main Image */}
                      {project.images?.main && (
                        <div className="mb-8 flex justify-center">
                          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black flex justify-center max-w-4xl w-full">
                            <img
                              src={project.images.main}
                              alt="Main"
                              className="w-full h-auto max-h-[420px] object-contain"
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <SectionHeader title="프로젝트 개요" variant="sidebar" />
                        <p className="text-gray-300 leading-relaxed text-[17px] whitespace-pre-wrap">
                          {renderLinked(project.description)}

                        </p>
                      </div>

                      {/* Tech Stack - No Title, Larger Font */}
                      <div className="mt-8">
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                          {project.tech.map(tech => {
                            const isEmphasis = EMPHASIS_TECH[project.title]?.has(tech) || false;
                            return (
                              <span
                                key={tech}
                                className={
                                  "transition-all duration-300 flex items-center gap-2 " +
                                  (isEmphasis
                                    ? "text-primary text-lg font-bold"
                                    : "text-gray-400 hover:text-gray-200 text-[17px] font-medium")
                                }
                              >
                                {isEmphasis && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </section>

                    {/* 2. Core Implementation */}
                    <section id="implementation" className="scroll-mt-24 space-y-8">
                      <SectionHeader title="핵심 기능" variant="sidebar" />

                      <div className="grid grid-cols-1 gap-3">
                        {project.details?.implementation?.map((item, idx) => (
                          <ImplementationCard key={idx} item={item} index={idx} />
                        ))}
                      </div>

                      {project.details?.implementationImage && (
                        <div className="mt-8 flex justify-start">
                          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/20 max-w-lg p-2 bg-gradient-to-br from-primary/10 to-transparent">
                            <img
                              src={project.details.implementationImage}
                              alt="Implemented Logic"
                              className="w-full h-auto object-contain max-h-[300px] rounded-lg"
                            />
                          </div>
                        </div>
                      )}
                    </section>

                    {/* 3. Role */}
                    <section id="role" className="scroll-mt-24">
                      {project.details?.roleAndContribution && (
                        <div>
                          <SectionHeader title="담당 역할" variant="sidebar" />
                          <div className="grid gap-3">
                            {project.details.roleAndContribution.map((item, idx) => {
                              const colonIdx = item.indexOf(':');
                              const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : item;
                              const body = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : '';
                              const roleImage = project.details?.roleAndContributionImages?.[idx];
                              return (
                                <div key={idx} className="group flex gap-3.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-200">
                                  <div className="mt-2.5 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]" />
                                  <div className="flex-1 min-w-0 py-0.5">
                                    <span className="font-bold text-primary text-[16.5px] block mb-0.5 group-hover:brightness-110 transition-all">{title}</span>
                                    {body && <p className="text-gray-200 leading-snug text-[15.5px] group-hover:text-white transition-colors">{renderLinked(body)}</p>}
                                    {roleImage && (
                                      <div className="mt-4 rounded-lg overflow-hidden border border-white/10 bg-black/20 p-2 max-w-xl">
                                        <img
                                          src={roleImage}
                                          alt={`${title} detail`}
                                          className="w-full h-auto max-h-[260px] object-contain rounded-md"
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </section>

                    {/* 4. Tech & Architecture */}
                    <section id="tech" className="space-y-6 scroll-mt-24">
                      <SectionHeader title="사용 기술 및 아키텍처" variant="sidebar" />

                      {/* Architecture Image - Array Support for Side-by-Side */}
                      {project.images?.architecture && (
                        <div className="mb-8">
                          {Array.isArray(project.images.architecture) ? (
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                              {project.images.architecture.map((img, idx) => (
                                <div
                                  key={idx}
                                  className="p-0 flex justify-center items-center w-fit"
                                >
                                  <img
                                    src={img}
                                    alt={`Architecture ${idx + 1}`}
                                    className="w-full h-auto md:w-auto md:h-[350px] object-contain rounded-xl"
                                  />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-0 flex justify-center w-fit mx-auto">
                              <img
                                src={project.images.architecture}
                                alt="Architecture"
                                className="w-full h-auto object-contain max-h-[400px]"
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tech Reasons */}
                      {project.details?.techAndReason && (
                        <div className="grid gap-3">
                          {project.details.techAndReason.map((item, idx) => {
                            const splitIndex = item.indexOf(':');
                            const techName = splitIndex !== -1 ? item.slice(0, splitIndex) : item;
                            const reason = splitIndex !== -1 ? item.slice(splitIndex + 1) : '';

                            return (
                              <div key={idx} className="group flex gap-3.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-200">
                                <div className="mt-2.5 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]" />
                                <div className="flex-1 min-w-0 py-0.5">
                                  <span className="font-bold text-primary text-[16.5px] block mb-0.5 group-hover:brightness-110 transition-all">{techName}</span>
                                  {reason && <p className="text-gray-200 leading-snug text-[15.5px] group-hover:text-white transition-colors">{renderLinked(reason)}</p>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </section>

                    {/* 5. Troubleshooting */}
                    <ProjectModalTroubleshootingSection project={project} />

                    {/* 6. Outcomes & Awards */}
                    <ProjectModalOutcomesSection project={project} />

                    {/* 7. Retrospective */}
                    <section id="retrospective" className="scroll-mt-24">
                      {project.details?.retrospective && (
                        <div>
                          <SectionHeader title="회고 및 배운 점" variant="sidebar" />
                          <div className="space-y-4 px-2">
                            {project.details.retrospective.map((line, idx) => (
                              <p key={idx} className="text-[15.5px] text-gray-300 leading-[1.7] whitespace-pre-wrap break-keep">
                                {renderLinked(line)}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </section>

                    {/* 8. Links */}
                    <ProjectModalLinksSection project={project} />

                  </div>
                </main>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
