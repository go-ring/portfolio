import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Github, FileText, MonitorPlay, BookOpen } from 'lucide-react';
import type { Project } from '@/types/project';
import { ProjectModalSlideOverview } from './slides/ProjectModalSlideOverview';
import { ProjectModalSlideTechRole } from './slides/ProjectModalSlideTechRole';
import { ProjectModalSlideTrouble } from './slides/ProjectModalSlideTrouble';
import { ProjectModalSlideOutcomes } from './slides/ProjectModalSlideOutcomes';
import { ProjectModalSlideTechSelection } from './slides/ProjectModalSlideTechSelection';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentSlide(0); // Reset on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!project || typeof document === 'undefined') return null;

  // Build slides array
  const slides = [];
  slides.push(<ProjectModalSlideOverview project={project} />);
  if (project.tech && project.details?.roleAndContribution) {
    slides.push(<ProjectModalSlideTechRole project={project} />);
  }
  if (project.details?.troubleshooting && project.details.troubleshooting.length > 0) {
    project.details.troubleshooting.forEach(trouble => {
       slides.push(<ProjectModalSlideTrouble project={project} trouble={trouble} />);
    });
  }
  if (project.details?.techAndReason && project.details.techAndReason.length > 0) {
    slides.push(<ProjectModalSlideTechSelection project={project} />);
  }
  if (project.impact || project.details?.retrospective) {
    slides.push(<ProjectModalSlideOutcomes project={project} />);
  }

  const handlePrev = () => setCurrentSlide(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#1F1D1B]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <div className="bg-white w-[95vw] max-w-[1400px] h-[85vh] min-h-[600px] max-h-[850px] rounded-[32px] shadow-2xl overflow-hidden pointer-events-auto flex relative text-[#1F1D1B]">
              
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 z-50 p-2 text-[#857C75] hover:text-[#1F1D1B] bg-white/80 backdrop-blur rounded-full hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <X size={28} />
              </button>

              {/* Left Static Panel */}
              <div className="w-[230px] md:w-[250px] h-full bg-[#F8F6F0] flex flex-col px-4 py-8 md:px-5 md:py-10 border-r border-[#D5CEC4] shrink-0">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-[34px] font-black text-[#1F1D1B] tracking-tight mb-8 leading-[1.15] break-keep">{project.title}</h2>
                  
                  <div className="space-y-1 mb-8 text-[14px] text-[#1F1D1B] font-bold">
                    <p className="font-extrabold whitespace-nowrap tracking-tighter">{project.period}</p>
                    <p className="leading-[1.4]">
                      {Array.isArray(project.role) ? project.role.join(', ') : project.role}
                    </p>
                    <p>{project.type}</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-[12px] font-bold text-[#857C75] uppercase tracking-wider mb-2">Links</h3>
                  <div className="flex flex-col gap-1">
                    {project.links?.repo && (
                      <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[14.5px] font-bold text-[#4A433D] hover:text-[#5A6B3A] transition-colors p-2 -ml-2 rounded-xl hover:bg-white/60">
                        <Github size={16} /> GitHub Repository
                      </a>
                    )}
                    {project.links?.notion && (
                      <a href={project.links.notion} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[14.5px] font-bold text-[#4A433D] hover:text-[#5A6B3A] transition-colors p-2 -ml-2 rounded-xl hover:bg-white/60">
                        <FileText size={16} /> Notion Workspace
                      </a>
                    )}
                    {project.links?.presentation && (
                      <a href={project.links.presentation} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[14.5px] font-bold text-[#4A433D] hover:text-[#5A6B3A] transition-colors p-2 -ml-2 rounded-xl hover:bg-white/60">
                        <MonitorPlay size={16} /> Presentation
                      </a>
                    )}
                    {project.links?.proof && (
                      <a href={project.links.proof} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[14.5px] font-bold text-[#4A433D] hover:text-[#5A6B3A] transition-colors p-2 -ml-2 rounded-xl hover:bg-white/60">
                        <ExternalLink size={16} /> Proof / Demo
                      </a>
                    )}
                    {project.links?.paper && (
                      <a href={project.links.paper} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[14.5px] font-bold text-[#4A433D] hover:text-[#5A6B3A] transition-colors p-2 -ml-2 rounded-xl hover:bg-white/60">
                        <BookOpen size={16} /> Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Main Panel (Carousel) */}
              <div className="flex-1 h-full relative bg-white flex flex-col">
                {/* Navigation Arrows (Floating) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-1 md:left-2 z-20">
                  <button 
                    onClick={handlePrev} 
                    disabled={currentSlide === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'bg-[#1F1D1B] text-white shadow-md hover:bg-[#332E2A] hover:scale-110 active:scale-95'}`}
                  >
                    <ChevronLeft size={22} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 z-20">
                  <button 
                    onClick={handleNext} 
                    disabled={currentSlide === slides.length - 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'bg-[#1F1D1B] text-white shadow-md hover:bg-[#332E2A] hover:scale-110 active:scale-95'}`}
                  >
                    <ChevronRight size={22} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Slides Container */}
                <div className="flex-1 overflow-hidden relative">
                   <div 
                      className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                   >
                      {slides.map((slide, idx) => (
                        <div key={idx} className="w-full h-full flex-shrink-0 px-12 md:px-20 pt-10 pb-12 overflow-y-auto custom-scrollbar flex flex-col">
                           <div className="max-w-5xl mx-auto w-full">
                             {slide}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Bottom Navigation (Dots) */}
                <div className="h-6 shrink-0 flex items-center justify-center gap-2.5 bg-white border-t border-gray-100 relative z-10">
                  {slides.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all rounded-full ${idx === currentSlide ? 'w-7 h-2 bg-[#5A6B3A]' : 'w-2 h-2 bg-[#D5CEC4] hover:bg-[#857C75]'}`} 
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
