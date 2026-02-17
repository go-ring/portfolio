import { Section } from './Section';
import { profile } from '../data';
import { Cpu, Users, Layers } from 'lucide-react';

export function About() {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Cpu className="w-6 h-6 text-toss-blue" />;
      case 1: return <Layers className="w-6 h-6 text-toss-blue" />;
      default: return <Users className="w-6 h-6 text-toss-blue" />;
    }
  };

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {profile.about.map((paragraph, index) => (
            <p key={index} className="opacity-90">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="grid gap-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Key Competencies</h3>
          {profile.keywords.slice(0, 3).map((keyword: string, index: number) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm">
                {getIcon(index)}
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-bold text-lg">{keyword}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
