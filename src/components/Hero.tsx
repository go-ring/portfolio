import { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ArrowDown, Github, Copy, Mail } from 'lucide-react';
import { ProfileCarouselCard } from './ProfileCarouselCard';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error('Failed to copy email', error);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-visible">
      
      {/* Background Decor - Moved to Layout.tsx for seamless transition */}

      <div className="max-w-[1120px] w-full mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left: Text Content - Product Landing Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-left max-w-[580px]"
        >
          {/* Main Title H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-[1.15] tracking-tight">
            안녕하세요!
          </h1>

          {/* Sub Title H2 */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8 tracking-wide">
            백엔드 개발자 <span className="text-[#9FAA7C]">이가은</span>입니다.
          </h2>

          {/* Key Message - Styled like Product Copy */}
          <div className="border-l-[3px] border-[#9FAA7C]/80 pl-5 py-1 mb-8">
            <p className="text-lg md:text-xl font-bold text-white/95 leading-relaxed">
              배우고 적용하며, <br className="hidden md:block"/>결과를 만듭니다.
            </p>
          </div>
          
          {/* Chips - Key Identity Tags (Inline Meta Text) */}
          <div className="flex items-center gap-2 mb-2 text-sm font-bold text-white/90">
            <span>책임감</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>성장형</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>계획형</span>
          </div>

          {/* Description - Concise and Readable */}
          <div className="text-gray-300/90 text-[1.05rem] leading-relaxed mb-10 space-y-1 font-medium">
            <p>
              기능 구현을 넘어 서비스 흐름과 사용자 경험까지 함께 설계합니다.
            </p>
            <p>
              확장 가능한 아키텍처와 안정적인 운영을 기반으로 개선을 반복합니다.
            </p>
          </div>

          {/* Contact & Social Buttons - Unified Row */}
          <div className="flex flex-wrap gap-3">
            {/* Email Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="h-10 px-4 bg-white/5 border border-white/10 rounded-full font-medium text-sm text-gray-300 hover:text-[#9FAA7C] hover:bg-white/10 hover:border-[#9FAA7C]/30 transition-all flex items-center gap-2 group"
              aria-label="이메일 주소 복사"
            >
              <div className={`p-1 rounded-full bg-white/10 group-hover:bg-[#9FAA7C]/20 transition-colors ${copied ? 'text-[#9FAA7C]' : 'text-gray-400 group-hover:text-[#9FAA7C]'}`}>
                 {copied ? <Copy size={12} /> : <Mail size={12} />}
              </div>
              <span>{profileData.email}</span>
            </button>

            {/* GitHub */}
            <a 
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 bg-transparent text-gray-400 border border-white/10 rounded-full font-medium text-sm hover:text-white hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>

            {/* Velog */}
            <a 
              href={profileData.social.velog}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 bg-transparent text-gray-400 border border-white/10 rounded-full font-medium text-sm hover:text-[#20c997] hover:bg-white/5 hover:border-[#20c997]/30 transition-all flex items-center gap-2"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-[18px] h-[18px]"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
                <path transform="translate(3, 0)" d="M6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" fill="currentColor" stroke="none" />
              </svg>
              Velog
            </a>
          </div>
        </motion.div>


        {/* Right: Profile Card - Glassmorphism Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center items-center"
        >
          <ProfileCarouselCard />
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <ArrowDown size={24} />
      </motion.div>

      {/* Copy Toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 border border-[#9FAA7C]/40 text-xs text-[#9FAA7C] backdrop-blur">
          이메일 주소가 복사되었습니다.
        </div>
      )}
    </section>
  );
}
