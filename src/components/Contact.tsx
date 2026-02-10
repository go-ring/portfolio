import { useState } from 'react';
import { Section } from './Section';
import { profile } from '../data';
import { Mail, Github, FileText, Check, Copy } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = profile.social.email.replace('mailto:', '');
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" title="Get in Touch" className="bg-[#10141b]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-surface rounded-3xl p-8 md:p-16 text-center border border-white/5 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            함께 성장할 기회를 찾고 계신가요?
          </h3>
          <p className="text-gray-400 mb-10 text-lg">
            새로운 도전을 통해 가치를 만들어내는 것을 좋아합니다. <br className="hidden md:block"/>
            언제든 편하게 연락주세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10 transition-all active:scale-95"
            >
              <Mail size={20} className={copied ? "text-green-400" : "text-primary"} />
              <span>{profile.social.email.replace('mailto:', '')}</span>
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-gray-500" />}
            </button>

            <a 
              href="/resume.pdf" 
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            >
              <FileText size={20} />
              이력서 보기
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a 
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#10141b] rounded-full text-gray-400 hover:text-primary hover:border-primary border border-white/5 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
