import { Section } from './Section';
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-16 py-4">
        {experience.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-16 group">
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white dark:bg-slate-800 border-4 border-toss-blue transition-all group-hover:scale-125 hover:border-blue-400 shadow-sm"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-toss-blue transition-colors">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                <Calendar size={14} />
                {item.duration}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-6 text-lg font-medium text-slate-700 dark:text-slate-300">
              <Briefcase size={18} className="text-toss-blue" />
              {item.company}
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-4xl">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
