import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Building2, Target, FileText, ShieldCheck, SearchCode, Lock, Bot, Settings, GitPullRequest, BarChart } from 'lucide-react';
import { renderLinked } from '@/utils/renderUtils';

export function ImplementationCard({ item, index }: { item: string; index: number }) {
  const colonIdx = item.indexOf(':');
  const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : item;
  const body = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : '';

  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('잠금') || t.includes('강제')) return <Lock size={16} />;
    if (t.includes('llm') || t.includes('ai') || t.includes('지능')) return <Bot size={16} />;
    if (t.includes('자동화') || t.includes('운영')) return <Settings size={16} />;
    if (t.includes('라인') || t.includes('계층형') || t.includes('리뷰')) return <GitPullRequest size={16} />;
    if (t.includes('시각화') || t.includes('성취도') || t.includes('통계')) return <BarChart size={16} />;
    if (t.includes('역량') || t.includes('분석')) return <SearchCode size={16} />;
    if (t.includes('기업') || t.includes('데이터')) return <Building2 size={16} />;
    if (t.includes('매칭') || t.includes('추천')) return <Target size={16} />;
    if (t.includes('자소서') || t.includes('작성')) return <FileText size={16} />;
    if (t.includes('소통') || t.includes('네트워크') || t.includes('채팅')) return <MessageCircle size={16} />;
    if (t.includes('보안') || t.includes('인프라')) return <ShieldCheck size={16} />;
    return <Sparkles size={16} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
      className="group flex gap-3.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-200"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0 transition-colors group-hover:bg-primary/20">
        {getIcon(title)}
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <h5 className="font-bold text-white text-[16.5px] mb-0.5 group-hover:text-primary transition-colors">
          {title}
        </h5>
        {body && <p className="text-gray-200 text-[15.5px] leading-snug group-hover:text-white transition-colors">{renderLinked(body)}</p>}
      </div>
    </motion.div>
  );
}
