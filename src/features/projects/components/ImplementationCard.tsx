import { motion } from 'framer-motion';
import { 
  MessageCircle, Sparkles, Building2, Target, FileText, ShieldCheck, 
  SearchCode, Lock, Bot, Settings, GitPullRequest, BarChart,
  Smile, Mic, BarChart3, BookOpen, HeartHandshake, Zap
} from 'lucide-react';
import { renderLinked } from '@/utils/renderUtils';

export function ImplementationCard({ item, index }: { item: string; index: number }) {
  const colonIdx = item.indexOf(':');
  const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : item;
  const body = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : '';

  const getIcon = (title: string) => {
    const t = title.toLowerCase();

    // 스마트싱스 / 조명 / 제어 / IoT
    if (t.includes('조명') || t.includes('제어') || t.includes('iot') || t.includes('smartthings')) return <Zap size={16} />;
    // 가이드 / 지침 / 육아 / 부모
    if (t.includes('가이드') || t.includes('지침') || t.includes('육아') || t.includes('부모')) return <BookOpen size={16} />;
    // 리포트 / 분석 / 통계 / 지표
    if (t.includes('리포트') || t.includes('분석') || t.includes('통계') || t.includes('지표') || t.includes('발달')) return <BarChart3 size={16} />;
    // 넛지 / 규칙 / 습관 / 비밀
    if (t.includes('넛지') || t.includes('규칙') || t.includes('습관') || t.includes('비밀')) return <HeartHandshake size={16} />;
    // 음성 / 인식 / 대화 / 발화 / 마이크
    if (t.includes('음성') || t.includes('인식') || t.includes('대화') || t.includes('발화')) return <Mic size={16} />;
    // 캐릭터 / 생성 / 비전 / 사물
    if (t.includes('캐릭터') || t.includes('생성') || t.includes('비전') || t.includes('사물')) return <Smile size={16} />;

    // 기존 매칭 규칙
    if (t.includes('잠금') || t.includes('강제')) return <Lock size={16} />;
    if (t.includes('llm') || t.includes('ai') || t.includes('지능')) return <Bot size={16} />;
    if (t.includes('자동화') || t.includes('운영')) return <Settings size={16} />;
    if (t.includes('라인') || t.includes('계층형') || t.includes('리뷰')) return <GitPullRequest size={16} />;
    if (t.includes('시각화') || t.includes('성취도')) return <BarChart size={16} />;
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
