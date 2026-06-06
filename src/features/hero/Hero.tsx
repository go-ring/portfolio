import { motion } from 'framer-motion';
import { ArrowDown, Github, Copy, Mail } from 'lucide-react';
import { profileData } from '@/constants/profile';
import { useClipboard } from '@/hooks/useClipboard';
import { ProfileCarouselCard } from '@/features/hero/components/ProfileCarouselCard';

export function Hero() {
  const { copied, copyToClipboard } = useClipboard();

  const handleCopyEmail = () => copyToClipboard(profileData.email);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-visible">

      {/* Background Decor - Moved to Layout.tsx for seamless transition */}

      <div className="max-w-[1120px] w-full mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10 md:scale-[0.95]">

        {/* Left: Text Content - Product Landing Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-left max-w-[580px]"
        >
          {/* Main Title H1 */}
          <div className="relative mb-8">
            <span 
              className="block text-[6rem] text-[#5A6B3A] mb-4 leading-[0.3]" 
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 900 }}
            >
              “
            </span>
            <h1 className="text-[2.1rem] md:text-4xl lg:text-[2.8rem] font-extrabold text-[#1F1D1B] tracking-tight">
              <div className="mb-2.5 md:mb-3">작은 오류도</div>
              <div className="mb-2.5 md:mb-3">그냥 넘기지 않는</div>
              <div className="text-[#5A6B3A]">
                팀의 안전장치,
              </div>
            </h1>
          </div>

          {/* Sub Title H2 */}
          <p className="text-2xl md:text-[1.75rem] font-bold text-[#5C554F] mb-10 tracking-wide">
            백엔드 개발자 <span className="text-[#5A6B3A] font-black [-webkit-text-stroke:0.8px_#5A6B3A]">이가은</span>입니다.
          </p>

          {/* Chips - Key Identity Tags (Inline Meta Text) */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <span className="text-[#332F2C] text-[1.1rem] font-bold tracking-wide hover:text-[#5A6B3A] transition-colors cursor-default">
              # 한번더확인
            </span>
            <span className="text-[#332F2C] text-[1.1rem] font-bold tracking-wide hover:text-[#5A6B3A] transition-colors cursor-default">
              # 마지막까지
            </span>
            <span className="text-[#332F2C] text-[1.1rem] font-bold tracking-wide hover:text-[#5A6B3A] transition-colors cursor-default">
              # 질문하는개발자
            </span>
          </div>


          {/* ── Contact Strip ── */}
          <div className="flex flex-row flex-nowrap gap-3 md:gap-4 mb-8 -ml-8 md:-ml-12">
            {/* Phone */}
            <a
              href={`tel:${profileData.phone}`}
              className="group flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[#D5CEC4] bg-white hover:border-[#5A6B3A] hover:shadow-[0_4px_12px_rgba(90,107,58,0.15)] transition-all duration-300 whitespace-nowrap"
            >
              <div className="shrink-0 text-[#5A6B3A] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-[#1F1D1B] font-bold text-[15px] md:text-base tracking-wide">
                {profileData.phone}
              </span>
            </a>

            {/* Email */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[#D5CEC4] bg-white hover:border-[#5A6B3A] hover:shadow-[0_4px_12px_rgba(90,107,58,0.15)] transition-all duration-300 text-left whitespace-nowrap"
            >
              <div className="shrink-0 text-[#5A6B3A] group-hover:scale-110 transition-transform">
                {copied ? <Copy size={18} strokeWidth={2.5} /> : <Mail size={18} strokeWidth={2.5} />}
              </div>
              <span className="text-[#1F1D1B] font-bold text-[15px] md:text-base tracking-wide">
                {profileData.email}
              </span>
            </button>

            {/* GitHub */}
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[#D5CEC4] bg-white hover:border-[#5A6B3A] hover:shadow-[0_4px_12px_rgba(90,107,58,0.15)] transition-all duration-300 text-left whitespace-nowrap"
            >
              <div className="shrink-0 text-[#5A6B3A] group-hover:scale-110 transition-transform">
                <Github size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[#1F1D1B] font-bold text-[15px] md:text-base tracking-wide">
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
          className="order-1 md:order-2 flex justify-center items-center md:-mt-16"
        >
          <ProfileCarouselCard />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#857C75]"
      >
        <ArrowDown size={24} />
      </motion.div>

      {/* Copy Toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#1F1D1B] text-white text-sm font-bold shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5A6B3A]"></span>
          이메일 주소가 복사되었습니다
        </div>
      )}
    </section>
  );
}
