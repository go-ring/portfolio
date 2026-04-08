import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ArrowDown, Github, Copy, Mail } from 'lucide-react';
import { ProfileCarouselCard } from './ProfileCarouselCard';
import { useClipboard } from '../hooks/useClipboard';

export function Hero() {
  const { copied, copyToClipboard } = useClipboard();

  const handleCopyEmail = () => copyToClipboard(profileData.email);

  return (
    <section id="home" className="min-h-screen flex items-start justify-center pt-24 px-6 relative overflow-visible">

      {/* Background Decor - Moved to Layout.tsx for seamless transition */}

      <div className="max-w-[1120px] w-full mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10 md:scale-[0.9] md:origin-top">

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
              배우고 적용하며, <br className="hidden md:block" />결과를 만듭니다.
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


          {/* ── Contact Strip ── */}
          <div className="flex flex-row flex-wrap gap-2 mb-8">
            {/* Phone */}
            <a
              href={`tel:${profileData.phone}`}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 hover:border-[#9FAA7C]/50 hover:bg-[#9FAA7C]/6 transition-all duration-200"
            >
              <div className="shrink-0 text-[#9FAA7C]/70 group-hover:text-[#9FAA7C] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-gray-200 font-semibold text-[14px] group-hover:text-white transition-colors tracking-wide">
                {profileData.phone}
              </span>
            </a>

            {/* Email */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 hover:border-[#9FAA7C]/50 hover:bg-[#9FAA7C]/6 transition-all duration-200 text-left"
            >
              <div className="shrink-0 text-[#9FAA7C]/70 group-hover:text-[#9FAA7C] transition-colors">
                {copied ? <Copy size={14} /> : <Mail size={14} />}
              </div>
              <span className="text-gray-200 font-semibold text-[14px] group-hover:text-white transition-colors tracking-wide">
                {profileData.email}
              </span>
            </button>

            {/* GitHub */}
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 hover:border-[#9FAA7C]/50 hover:bg-[#9FAA7C]/6 transition-all duration-200 text-left"
            >
              <div className="shrink-0 text-[#9FAA7C]/70 group-hover:text-[#9FAA7C] transition-colors">
                <Github size={14} />
              </div>
              <span className="text-gray-200 font-semibold text-[14px] group-hover:text-white transition-colors tracking-wide">
                GitHub
              </span>
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
