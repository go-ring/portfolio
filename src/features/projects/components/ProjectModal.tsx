import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, BookOpen, Presentation, BadgeCheck, Trophy, List, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '@/constants/portfolio';
import { renderLinked } from '@/utils/renderUtils';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Tooltip } from '@/components/common/Tooltip';
import { HighlightedText } from './HighlightedText';
import { ImplementationCard } from './ImplementationCard';
import { EMPHASIS_TECH, TOC_ITEMS, TROUBLE_LABELS } from './ProjectModal.constants';
import { JiraIcon, NotionIcon, TroubleIcon } from './ProjectModalIcons';


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
              <div
                ref={headerRef}
                className="flex items-center justify-between px-6 py-3 border-b border-white/6 bg-[#10141b] z-20 shrink-0 sticky top-0"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <h3 className="text-xl font-bold text-white whitespace-nowrap">{project.title}</h3>

                  {/* Type */}
                  <span className="hidden sm:block text-sm text-gray-300 font-medium whitespace-nowrap border-l border-white/10 pl-3">
                    {project.type}
                  </span>

                  {/* Role & Period */}
                  <span className="hidden md:flex items-center gap-3 text-sm text-gray-500 font-medium border-l border-white/10 pl-3">
                    <span className="text-gray-300">{Array.isArray(project.role) ? project.role[0] : project.role}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full" />
                    <span>{project.period}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 md:gap-5">
                  {/* Links - Icon Only */}
                  <div className="flex items-center gap-3 md:gap-4 border-r border-white/10 pr-4 md:pr-6 mr-1">
                    {project.links.repo && (
                      <Tooltip content="GitHub Repository">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      </Tooltip>
                    )}
                    {project.links.blog && (
                      <Tooltip content="Technical Blog">
                        <a
                          href={project.links.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#20C997] transition-colors"
                        >
                          <BookOpen size={18} />
                        </a>
                      </Tooltip>
                    )}
                    {project.links.jira && (
                      <Tooltip content="Jira (Sprint/Issue Tracker)">
                        <a
                          href={project.links.jira}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#0052CC] transition-colors"
                        >
                          <JiraIcon size={18} />
                        </a>
                      </Tooltip>
                    )}
                    {project.links.notion && (
                      <Tooltip content="Notion (Workspace)">
                        <a
                          href={project.links.notion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <NotionIcon size={18} />
                        </a>
                      </Tooltip>
                    )}
                    {project.links.presentation && (
                      <Tooltip content="Presentation (PPT)">
                        <a
                          href={project.links.presentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          <Presentation size={18} />
                        </a>
                      </Tooltip>
                    )}
                    {project.links.proof && (
                      <Tooltip content="Verification/Proof">
                        <a
                          href={project.links.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                          <BadgeCheck size={18} />
                        </a>
                      </Tooltip>
                    )}
                  </div>

                  <button
                    onClick={onClose}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar: TOC - Sticky */}
                <aside className="w-64 hidden md:flex flex-col border-r border-white/10 bg-[#141820] p-6 overflow-y-auto shrink-0">
                  <div className="flex items-center gap-2 mb-6 text-primary font-bold">
                    <List size={20} />
                    <span>목차</span>
                  </div>
                  <nav className="space-y-1">
                    {TOC_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleScrollTo(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${activeId === item.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                          }`}
                      >
                        {item.label}
                        {activeId === item.id && <ChevronRight size={14} />}
                      </button>
                    ))}
                  </nav>
                </aside>

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
                              return (
                                <div key={idx} className="group flex gap-3.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-200">
                                  <div className="mt-2.5 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]" />
                                  <div className="flex-1 min-w-0 py-0.5">
                                    <span className="font-bold text-primary text-[16.5px] block mb-0.5 group-hover:brightness-110 transition-all">{title}</span>
                                    {body && <p className="text-gray-200 leading-snug text-[15.5px] group-hover:text-white transition-colors">{renderLinked(body)}</p>}
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
                    <section id="troubleshooting" className="space-y-6 scroll-mt-24 min-h-[100px]">
                      <SectionHeader title="트러블슈팅" variant="sidebar" />
                      <div className="grid gap-5">
                        {project.details?.troubleshooting?.map((section, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bg-[#1a1f2c] rounded-xl border border-white/5 overflow-hidden hover:bg-[#1d2235] hover:shadow-lg transition-all duration-300"
                          >
                            {/* Card Title */}
                            <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
                              <h5 className="text-[18px] font-bold text-white leading-snug">{section.title}</h5>
                            </div>

                            {/* Items */}
                            <div className="px-6 py-4 space-y-3">
                              {section.items.map((item, idx) => {
                                const colonIdx = item.indexOf(':');
                                const rawLabel = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : null;
                                const labelInfo = rawLabel ? TROUBLE_LABELS[rawLabel] : null;
                                const content = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : item;

                                return (
                                  <div key={idx} className="rounded-lg bg-white/[0.025] border border-white/[0.04] px-4 py-3">
                                    {labelInfo && (
                                      <div className={`flex items-center gap-1.5 text-[12px] font-semibold tracking-widest uppercase mb-2 ${labelInfo.color}`}>
                                        <TroubleIcon type={rawLabel!} />
                                        <span>{rawLabel}</span>
                                      </div>
                                    )}
                                    <p className="text-[15px] text-gray-300 leading-[1.7] whitespace-pre-line">
                                      <HighlightedText text={content} />
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </section>

                    {/* 6. Outcomes & Awards */}
                    <section id="outcomes" className="space-y-6 scroll-mt-24 min-h-[200px]">
                      <SectionHeader title="성과 및 결과" variant="sidebar" /> {/* No Icon */}

                      <div className="grid gap-3">
                        {project.impact && project.impact.split('\n').map((line, idx) => {
                          // Check if this line is the one about the Smart Media Conference
                          const isAwardLine = line.includes("우수상") || line.includes("상장");
                          const isPaperLine = line.includes("학술 논문") || line.includes("학술대회");
                          const isReportLine = line.includes("연구 보고서") || line.includes("검토·정리");

                          const colonIdx = line.indexOf(':');
                          const title = colonIdx !== -1 ? line.slice(0, colonIdx).trim() : null;
                          const content = colonIdx !== -1 ? line.slice(colonIdx + 1).trim() : line;

                          return (
                            <div key={idx} className="group flex flex-col sm:flex-row gap-3.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-yellow-500/30 transition-all duration-200 items-start">
                              <div className="flex gap-3.5 items-start flex-1 min-w-0">
                                <Trophy className="text-yellow-500 mt-0.5 shrink-0" size={18} />
                                <div className="flex-1 min-w-0 py-0.5">
                                  {title && <span className="font-bold text-yellow-500/90 text-[16.5px] block mb-0.5 group-hover:brightness-110 transition-all">{title}</span>}
                                  <span className="text-[15.5px] text-gray-200 leading-snug group-hover:text-white transition-colors block">
                                    {renderLinked(content)}
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-3 shrink-0 items-center justify-end w-full sm:w-auto mt-2 sm:mt-0 sm:ml-4">
                                {isAwardLine && project.links.proof && (
                                  <a
                                    href={project.links.proof}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 hover:underline transition-colors font-medium whitespace-nowrap bg-yellow-500/10 px-2 py-1 rounded"
                                  >
                                    <ExternalLink size={14} />
                                    Award
                                  </a>
                                )}
                                {isPaperLine && project.links.paper && (
                                  <a
                                    href={project.links.paper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium whitespace-nowrap bg-blue-500/10 px-2 py-1 rounded"
                                  >
                                    <ExternalLink size={14} />
                                    Paper
                                  </a>
                                )}
                                {isReportLine && project.links.proof && (
                                  <a
                                    href={project.links.proof}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 hover:underline transition-colors font-medium whitespace-nowrap bg-purple-500/10 px-2 py-1 rounded"
                                  >
                                    <ExternalLink size={14} />
                                    Report
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>

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
                    {Object.keys(project.links).length > 0 && (
                      <section id="links" className="scroll-mt-24 space-y-6">
                        <SectionHeader title="관련 자료" variant="sidebar" />
                        <div className="grid gap-3">
                          {project.links.repo && (
                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/50 transition-all duration-300">
                              <Github size={22} className="text-gray-400 group-hover:text-white transition-colors shrink-0" />
                              <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">GitHub Repository</span>
                              <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          )}
                          {project.links.notion && (
                            <a href={project.links.notion} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/50 transition-all duration-300">
                              <div className="shrink-0 text-gray-400 group-hover:text-white transition-colors">
                                <NotionIcon size={22} />
                              </div>
                              <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">프로젝트 노션 (Notion Workspace)</span>
                              <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          )}
                          {project.links.presentation && (
                            <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-orange-400/50 transition-all duration-300">
                              <Presentation size={22} className="text-gray-400 group-hover:text-orange-400 transition-colors shrink-0" />
                              <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">발표 자료 (Presentation)</span>
                              <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-orange-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          )}
                          {project.links.proof && (
                            <a href={project.links.proof} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-yellow-400/50 transition-all duration-300">
                              <BadgeCheck size={22} className="text-gray-400 group-hover:text-yellow-400 transition-colors shrink-0" />
                              <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">증빙 자료 및 데모 시연 영상</span>
                              <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-yellow-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          )}
                          {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#20C997]/50 transition-all duration-300">
                              <ExternalLink size={22} className="text-gray-400 group-hover:text-[#20C997] transition-colors shrink-0" />
                              <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">라이브 데모 (Live Demo)</span>
                              <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-[#20C997] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          )}
                          {project.links.paper && (
                            <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#20C997]/50 transition-all duration-300">
                              <BookOpen size={22} className="text-gray-400 group-hover:text-[#20C997] transition-colors shrink-0" />
                              <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">관련 논문 (Paper)</span>
                              <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-[#20C997] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          )}
                        </div>
                      </section>
                    )}

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
