import { Cpu, Users, Layers } from 'lucide-react';
import { profile } from '@/constants/portfolio';
import { Section } from '@/components/Section';

export function About() {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Cpu className="w-6 h-6 text-current" />;
      case 1: return <Layers className="w-6 h-6 text-current" />;
      default: return <Users className="w-6 h-6 text-current" />;
    }
  };

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-[#5C554F] leading-relaxed font-medium">
          {profile.about.map((paragraph, index) => (
            <p key={index} className="opacity-90">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="grid gap-4">
          <h3 className="text-xl font-extrabold text-[#1F1D1B] mb-2 tracking-tight">Key Competencies</h3>
          {profile.keywords.slice(0, 3).map((keyword: string, index: number) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D5CEC4] hover:border-[#5A6B3A] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="p-3 bg-[#F8F6F0] text-[#5A6B3A] rounded-full shadow-sm">
                {getIcon(index)}
              </div>
              <span className="text-[#1F1D1B] font-bold text-lg">{keyword}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
