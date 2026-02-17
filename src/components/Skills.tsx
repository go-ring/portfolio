import { Section } from './Section';
import { skills } from '../data';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-lg flex flex-col h-full"
          >
            <div className="mb-5 border-b border-primary/20 pb-3 min-h-[3.5rem] flex items-end">
                <h3 className="text-lg font-semibold text-gray-100">
                {skillGroup.category}
                </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 flex-1">
              {skillGroup.items.map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-2 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 transition-colors" />
                  <span className="text-sm font-medium text-gray-200 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
