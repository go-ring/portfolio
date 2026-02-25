import { Section } from './Section';
import { profile, education, certifications, research, awards } from '../data';
import { motion } from 'framer-motion';
import { User, Award, GraduationCap, FileText, Trophy } from 'lucide-react';
import { Card } from './common/Card';

export function Education() {
  return (
    <Section id="about" title="About Me">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-4xl mx-auto bg-surface/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl">
            {/* Top Row: Profile & License */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
            {/* Profile */}
            <div className="flex flex-col gap-6">
                <h3 className="text-[0.78rem] leading-[1.1] font-bold tracking-[0.12em] text-primary uppercase flex items-center gap-2 opacity-85 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                <User size={14} /> Profile
                </h3>
                <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[0.92rem] leading-[1.55] font-medium text-gray-400 opacity-80">생년월일</span>
                    <span className="text-[1.05rem] leading-[1.35] font-bold text-white opacity-[0.98]">{profile.birthdate}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[0.92rem] leading-[1.55] font-medium text-gray-400 opacity-80">학력</span>
                    <span className="text-[1.05rem] leading-[1.35] font-bold text-white opacity-[0.98] text-right">{profile.education}</span>
                </div>
                </div>
            </div>

            {/* License */}
            <div className="flex flex-col gap-6">
                <h3 className="text-[0.78rem] leading-[1.1] font-bold tracking-[0.12em] text-primary uppercase flex items-center gap-2 opacity-85 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                <Award size={14} /> License
                </h3>
                <div className="space-y-4">
                {certifications.map((cert, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[1.05rem] leading-[1.35] font-bold text-white opacity-[0.98]">{cert.name}</span>
                    <span className="text-[0.82rem] leading-[1.35] font-medium text-gray-400 opacity-65 tabular-nums">{cert.date}</span>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Middle Row: Education */}
            <div className="mb-12">
            <h3 className="text-[0.78rem] leading-[1.1] font-bold tracking-[0.12em] text-primary uppercase flex items-center gap-2 mb-6 opacity-85 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                <GraduationCap size={14} /> Education
            </h3>
            <div className="space-y-6">
                {education.map((edu, idx) => {
                const isCurrent = edu.period.includes("현재");
                return (
                    <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
                    <div className="w-32 text-[0.82rem] leading-[1.35] font-medium text-gray-400 opacity-65 tabular-nums shrink-0 flex items-center gap-2">
                        {edu.period}
                        {isCurrent && (
                        <span className="md:hidden inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                        <h4 
                            className="text-[1.05rem] leading-[1.35] font-bold text-white opacity-[0.98] group-hover:text-primary transition-colors truncate"
                            title={edu.school}
                        >
                            {edu.school}
                        </h4>
                        {isCurrent && (
                            <span className="hidden md:inline-flex px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[0.70rem] leading-none font-bold tracking-[0.06em] border border-primary/20 shrink-0">
                            CURRENT
                            </span>
                        )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2 text-[0.92rem] leading-[1.55] font-medium opacity-80">
                        <span className="text-gray-300">{edu.degree}</span>
                        <span className="hidden sm:inline text-gray-600">|</span>
                        <span className="text-gray-400 font-normal opacity-75 text-[0.90rem] leading-[1.65]">{edu.description}</span>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>

            {/* Awards section - Moved up below Education */}
            <div className="mb-12">
                <h3 className="text-[0.78rem] leading-[1.1] font-bold tracking-[0.12em] text-primary uppercase flex items-center gap-2 mb-6 opacity-85 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                    <Trophy size={14} /> Awards
                </h3>
                <div className="space-y-6">
                    {awards.map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
                            <div className="w-32 text-[0.82rem] leading-[1.35] font-medium text-gray-400 opacity-65 tabular-nums shrink-0">
                                {item.date}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-[1.05rem] leading-[1.35] font-bold text-white opacity-[0.98] group-hover:text-primary transition-colors mb-1">
                                    {item.competition} {item.name}
                                </h4>
                                <p className="text-[0.92rem] leading-[1.55] font-medium text-gray-400 opacity-80 group-hover:text-gray-300 transition-colors">
                                    {item.organization}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Row: Research */}
            <div>
            <h3 className="text-[0.78rem] leading-[1.1] font-bold tracking-[0.12em] text-primary uppercase flex items-center gap-2 mb-6 opacity-85 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                <FileText size={14} /> Research & Papers
            </h3>
            <div className="space-y-6">
                {research.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
                    <div className="w-32 text-[0.82rem] leading-[1.35] font-medium text-gray-400 opacity-65 tabular-nums shrink-0">
                    {item.date}
                    </div>
                    <div className="flex-1">
                    <h4 className="text-[1.05rem] leading-[1.35] font-bold text-white opacity-[0.98] group-hover:text-primary transition-colors mb-1">
                        {item.title}
                    </h4>
                    <p className="text-[0.92rem] leading-[1.55] font-medium text-gray-400 opacity-80 group-hover:text-gray-300 transition-colors line-clamp-1">
                        {item.conference}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </Card>
      </motion.div>
    </Section>
  );
}
