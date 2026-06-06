import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from resource folder
import profile1 from '@/assets/images/profile1.jpg';
import profile2 from '@/assets/images/profile2.jpg';
import profile3 from '@/assets/images/profile3.jpg';

const images = [profile1, profile2, profile3];

export function ProfileCarouselCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3500); 
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative group w-72 md:w-80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#5A6B3A]/30 to-[#D2694B]/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-700" />
      
      {/* Glass Card - Pure White for Contrast */}
      <div className="relative bg-white border border-[#E5E0D8] p-4 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_70px_-15px_rgba(90,107,58,0.15)]">
        
        {/* Image Carousel Container */}
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#F8F6F0] mb-4 border border-[#E5E0D8] isolate transform-gpu">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Profile ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'translateZ(0)' }} // Sub-pixel rendering fix
            />
          </AnimatePresence>

          {/* Gradient Overlay - Softer for light theme */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.3) 100%)',
              borderRadius: 'inherit' // Sync border-radius
            }}
          />

          {/* Navigation Controls (Visible on Hover/Focus) */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="p-2 rounded-full bg-white/80 text-[#1F1D1B] hover:bg-white hover:text-[#5A6B3A] backdrop-blur-md transition-all shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="p-2 rounded-full bg-white/80 text-[#1F1D1B] hover:bg-white hover:text-[#5A6B3A] backdrop-blur-md transition-all shadow-md"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-2 pb-1 text-center relative z-10">
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-3 mb-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`
                  h-2 rounded-full transition-all duration-300 
                  ${currentIndex === idx ? 'w-8 bg-[#5A6B3A]' : 'w-2 bg-[#E5E0D8] hover:bg-[#D5CEC4]'}
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
