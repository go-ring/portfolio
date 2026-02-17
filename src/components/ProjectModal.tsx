import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, BookOpen, Presentation, BadgeCheck, Trophy, List, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const EMPHASIS_TECH = new Set(['Java', 'Spring Boot', 'MySQL', 'NOS3', 'Linux', 'NCloud']);

const TOC_ITEMS = [
  { id: 'overview', label: '프로젝트 개요' },
  { id: 'role', label: '담당 역할 및 기여' },
  { id: 'tech', label: '사용 기술 및 아키텍처' },
  { id: 'implementation', label: '핵심 구현 Logic' },
  { id: 'troubleshooting', label: '트러블슈팅' },
  { id: 'outcomes', label: '성과 및 결과' },
  { id: 'retrospective', label: '회고 및 배운 점' },
];

// Unified Section Header


function SectionHeader({ title, icon: Icon }: { title: string; icon?: React.ElementType }) {
    return (
        <h4 className="text-xl font-bold text-white mb-6 border-l-4 border-primary pl-3 flex items-center gap-2">
            {Icon && <Icon size={20} className="text-primary" />}
            {title}
        </h4>
    );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div>
      <SectionHeader title={title} />
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

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

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

  // Scroll Spy Logic
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const sections = TOC_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = contentRef.current.scrollTop + 100; // Offset

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
           setActiveSection(section.id);
           break;
        }
      }
    };

    const container = contentRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section && contentRef.current) {
        contentRef.current.scrollTo({
            top: section.offsetTop - 40, // Adjust for padding
            behavior: 'smooth'
        });
        setActiveSection(id);
    }
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
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/6 bg-[#10141b] z-20 h-16 shrink-0">
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
                            <a 
                                href={project.links.repo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white transition-colors"
                                title="GitHub Repository"
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {project.links.blog && (
                            <a 
                                href={project.links.blog} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-[#20C997] transition-colors"
                                title="Technical Blog"
                            >
                                <BookOpen size={18} />
                            </a>
                        )}
                        {project.links.presentation && (
                            <a 
                                href={project.links.presentation} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                title="Presentation (PPT)"
                            >
                                <Presentation size={18} />
                            </a>
                        )}
                        {project.links.proof && (
                            <a 
                                href={project.links.proof} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-yellow-400 transition-colors"
                                title="Verification/Proof"
                            >
                                <BadgeCheck size={18} />
                            </a>
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
                                  onClick={() => scrollToSection(item.id)}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
                                      activeSection === item.id 
                                      ? 'bg-primary/10 text-primary font-medium' 
                                      : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                  }`}
                              >
                                  {item.label}
                                  {activeSection === item.id && <ChevronRight size={14} />}
                              </button>
                          ))}
                      </nav>
                  </aside>

                  {/* Main Content - Scrollable */}
                  <main 
                    ref={contentRef} 
                    className="flex-1 overflow-y-auto p-8 md:p-10 scroll-smooth custom-scrollbar bg-[#0f1219]"
                  >
                    <div className="max-w-4xl mx-auto space-y-16 pb-20">
                    
                        {/* 1. Overview */}
                        <section id="overview" className="space-y-6 scroll-mt-24">
                             
                             {/* Preview GIF (Priority 1) */}
                             {project.images?.preview && (
                                <div className="mb-8">
                                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black flex justify-center">
                                        <img 
                                            src={project.images.preview} 
                                            alt="Preview" 
                                            className="w-full h-auto max-h-[500px] object-contain" 
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
                                <SectionHeader title="프로젝트 개요" />
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
                                <DetailBlock
                                    title="담당 역할 및 기여"
                                    items={project.details.roleAndContribution}
                                />
                           )}
                        </section>



                        {/* 3. Tech & Architecture */}
                        <section id="tech" className="space-y-6 scroll-mt-24">
                             <SectionHeader title="사용 기술 및 아키텍처" />
                             
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
                                    title="핵심 구현 Logic"
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
                        <section id="troubleshooting" className="space-y-8 scroll-mt-24">
                             <SectionHeader title="트러블슈팅" />
                             <div className="grid gap-6">
                                {project.details?.troubleshooting?.map((section, index) => (
                                    <div key={index} className="bg-[#1a1f2c] p-6 rounded-xl border border-white/5">
                                        <h5 className="text-lg font-bold text-white mb-3 text-pink-400">{section.title}</h5>
                                         <ul className="space-y-2 text-[15px] text-gray-300 leading-relaxed">
                                            {section.items.map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="mt-[9px] h-[4px] w-[4px] rounded-full bg-gray-500 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                             </div>
                        </section>

                        {/* 6. Outcomes & Awards */}
                        <section id="outcomes" className="space-y-6 scroll-mt-24">
                            <SectionHeader title="성과 및 결과" /> {/* No Icon */}
                            
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
