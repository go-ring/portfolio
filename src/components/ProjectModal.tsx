import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, BookOpen, Presentation, BadgeCheck, Trophy, List, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const EMPHASIS_TECH = new Set([
  // ColorFinder / NOS3
  'Java', 'Spring Boot', 'MySQL', 'NOS3', 'Linux', 'NCloud',
  // Baekgu
  'Java 17', 'Spring Boot 3.2', 'FastAPI', 'WebSocket/STOMP', 'GitLab CI/CD', 'Grafana', 'Loki',
]);

const TOC_ITEMS = [
  { id: 'overview', label: '프로젝트 개요' },
  { id: 'role', label: '담당 역할 및 기여' },
  { id: 'tech', label: '사용 기술 및 아키텍처' },
  { id: 'implementation', label: '핵심 구현 로직' },
  { id: 'troubleshooting', label: '트러블슈팅' },
  { id: 'outcomes', label: '성과 및 결과' },
  { id: 'retrospective', label: '회고 및 배운 점' },
];

import { SectionHeader } from './common/SectionHeader';
import { Tooltip } from './common/Tooltip';

// Unified Section Header
// Removed local SectionHeader definition in favor of common component

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div>
      <SectionHeader title={title} variant="sidebar" />
      <ul className="space-y-2 text-[15px] text-gray-300 leading-relaxed">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="mt-[9px] h-[4px] w-[4px] rounded-full bg-gray-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const TROUBLE_LABELS: Record<string, { icon: string; color: string }> = {
  '문제':  { icon: '🔴', color: 'text-red-400' },
  '원인':  { icon: '⚠',  color: 'text-amber-400' },
  '해결':  { icon: '🛠',  color: 'text-blue-400' },
  '결과':  { icon: '📊', color: 'text-blue-400' },
};

const HIGHLIGHT_PHRASES = [
  'AI 분석 성공률 99\.9% 달성',
  'backend·fastapi 간 depends_on 제거',
  '배포 시 AI 워커 컨테이너도 함께 재시작',
  'backend와 fastapi 컨테이너의 수명 주기가 결합',
  '배포 시, 진행 중인 분석이 강제 종료',
  '수 분 소요',
  'AI 분석',
];

function HighlightedText({ text }: { text: string }) {
  const pattern = new RegExp(`(${HIGHLIGHT_PHRASES.join('|')})`, 'g');
  const segs: { text: string; highlight: boolean }[] = [];
  let last = 0, m: RegExpExecArray | null;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) segs.push({ text: text.slice(last, m.index), highlight: false });
    segs.push({ text: m[0], highlight: true });
    last = pattern.lastIndex;
  }
  if (last < text.length) segs.push({ text: text.slice(last), highlight: false });
  return (
    <>
      {segs.map((s, i) =>
        s.highlight
          ? <span key={i} className="font-semibold text-blue-300">{s.text}</span>
          : <span key={i}>{s.text}</span>
      )}
    </>
  );
}


import { useScrollSpy } from '../hooks/useScrollSpy';

// ...

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isAnimatedPreview = !!project?.images?.preview?.toLowerCase().endsWith('.gif');

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
                                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
                                      activeId === item.id 
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
                             
                             {/* Preview GIF (Priority 1) */}
                             {project.images?.preview && (
                                <div className="mb-8">
                                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black flex justify-center">
                                        <img 
                                            src={project.images.preview} 
                                            alt="Preview" 
                                            loading="eager"
                                            decoding={isAnimatedPreview ? 'sync' : 'async'}
                                            className={`w-full h-auto max-h-[500px] object-contain block ${
                                              isAnimatedPreview ? '[transform:translateZ(0)] will-change-transform' : ''
                                            }`}
                                            style={isAnimatedPreview ? { contain: 'paint' } : undefined}
                                        />
                                    </div>
                                    <p className="text-center text-sm text-gray-500 mt-2">최종 결과물 시연 화면</p>
                                </div>
                             )}

                             {/* Main Image (Priority 2 - if lives with preview) */}
                             {project.images?.main && !project.images.preview && (
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
                             
                             {/* ... (Skipping preview+main case for brevity in reasoning, but must handle if I replace block) ... 
                                Actually, I should probably target the specific Main Image blocks or use multi-replace.
                                Let's stick to the specific block logic. 
                             */}

                             {/* Main Image (Priority 2 - if exists AND preview exists) */}
                             {project.images?.main && project.images.preview && (
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
                                <p className="text-gray-300 leading-relaxed text-[16px] whitespace-pre-wrap">
                                    {project.description}
                                </p>
                             </div>

                             {/* Tech Stack - No Title, Larger Font */}
                             <div className="mt-8">
                                <div className="flex flex-wrap gap-x-6 gap-y-3"> 
                                    {project.tech.map(tech => {
                                        const isEmphasis = EMPHASIS_TECH.has(tech);
                                        return (
                                            <span
                                            key={tech}
                                            className={
                                                "transition-all duration-300 flex items-center gap-2 " +
                                                (isEmphasis
                                                ? "text-primary text-lg font-bold" 
                                                : "text-gray-400 hover:text-gray-200 text-[16px] font-medium")
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

                        {/* 2. Role */}
                        <section id="role" className="scroll-mt-24">
                          {project.details?.roleAndContribution && (
                            <div>
                              <SectionHeader title="담당 역할 및 기여" variant="sidebar" />
                              <div className="grid gap-3">
                                {project.details.roleAndContribution.map((item, idx) => {
                                  const colonIdx = item.indexOf(':');
                                  const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : item;
                                  const body  = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : '';
                                  return (
                                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-[#1a1f2c] border border-white/5 hover:border-primary/30 transition-colors">
                                      <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                                      <div>
                                        <span className="font-bold text-primary text-[15px] block mb-1">{title}</span>
                                        {body && <p className="text-gray-300 leading-relaxed text-[14px]">{body}</p>}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </section>

                        {/* 3. Tech & Architecture */}
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
                                <div className="grid gap-4">
                                    {project.details.techAndReason.map((item, idx) => {
                                        const splitIndex = item.indexOf(':');
                                        const techName = splitIndex !== -1 ? item.slice(0, splitIndex) : item;
                                        const reason = splitIndex !== -1 ? item.slice(splitIndex + 1) : '';
                                        
                                        return (
                                            <div key={idx} className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                                                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                                                <div>
                                                    <span className="font-bold text-white text-lg block mb-1">{techName}</span>
                                                    <p className="text-gray-300 leading-relaxed text-[15px]">{reason}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                             )}
                        </section>

                        {/* 4. Core Implementation */}
                        <section id="implementation" className="scroll-mt-24">
                            {project.details?.implementation && (
                                <DetailBlock
                                    title="핵심 구현 로직"
                                    items={project.details.implementation}
                                />
                            )}
                            {project.details?.implementationImage && (
                                <div className="mt-8 flex justify-start">
                                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/20 max-w-lg">
                                        <img
                                            src={project.details.implementationImage}
                                            alt="Implemented Logic"
                                            className="w-full h-auto object-contain max-h-[300px]"
                                        />
                                    </div>
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
                                  <h5 className="text-[17px] font-bold text-white leading-snug">{section.title}</h5>
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
                                          <div className={`flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase mb-2 ${labelInfo.color}`}>
                                            <span>{labelInfo.icon}</span>
                                            <span>{rawLabel}</span>
                                          </div>
                                        )}
                                        <p className="text-[14px] text-gray-300 leading-[1.7]">
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
                            
                            <div className="space-y-4">
                                {project.impact && project.impact.split('\n').map((line, idx) => {
                                    // Check if this line is the one about the Smart Media Conference
                                    const isPaperLine = line.includes("스마트미디어 추계학술대회");

                                    return (
                                        <div key={idx} className="bg-[#1a1f2c] p-5 rounded-xl border border-white/10 flex items-start gap-4">
                                            <Trophy className="text-yellow-500 mt-1 shrink-0" size={20} />
                                            <div className="flex-1 flex items-start justify-between gap-4">
                                                <span className="text-[15px] text-gray-200 font-medium leading-relaxed">
                                                    {line}
                                                </span>
                                                {isPaperLine && project.links.paper && (
                                                    <a 
                                                        href={project.links.paper}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="shrink-0 flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium whitespace-nowrap"
                                                    >
                                                        <ExternalLink size={14} />
                                                        Paper
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
                                <DetailBlock
                                    title="회고 및 배운 점"
                                    items={project.details.retrospective}
                                />
                             )}
                        </section>

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
