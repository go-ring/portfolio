import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from resource folder
import profile1 from '../resourse/profile1.jpg';
import profile2 from '../resourse/profile2.jpg';
import profile3 from '../resourse/profile3.jpg';

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
      <div className="absolute -inset-1 bg-gradient-to-tr from-[#9FAA7C]/40 to-purple-500/40 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-700" />
      
      {/* Glass Card */}
      <div className="relative bg-[#1c212c]/60 backdrop-blur-xl border border-white/10 p-4 rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-white/20">
        
        {/* Image Carousel Container */}
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-800 mb-4 border border-white/5 isolate transform-gpu">
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

          {/* Gradient Overlay - Fixed Edge Bleed */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.6) 100%)',
              borderRadius: 'inherit' // Sync border-radius
            }}
          />

          {/* Navigation Controls (Visible on Hover/Focus) */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="p-1.5 rounded-full bg-black/30 text-white/70 hover:bg-black/50 hover:text-white backdrop-blur-sm transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="p-1.5 rounded-full bg-black/30 text-white/70 hover:bg-black/50 hover:text-white backdrop-blur-sm transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-2 pb-2 text-center relative z-10">
          <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Lee GaEun</h3>
          <p className="text-[#9FAA7C] font-medium mb-2 text-sm uppercase tracking-wider">Backend Engineer</p>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-1.5 mt-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`
                  h-1.5 rounded-full transition-all duration-300 
                  ${currentIndex === idx ? 'w-6 bg-[#9FAA7C]' : 'w-1.5 bg-gray-600 hover:bg-gray-500'}
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
