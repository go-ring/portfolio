import React from 'react';
import { Section } from './Section';
import { skills } from '../data';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <Section id="tech" title="기술 스택" className="bg-[#10141b]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-lg"
          >
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skillGroup.items.map((item) => (
                <div 
                  key={item} 
                  className="px-4 py-2 bg-[#10141b] text-gray-300 rounded-full text-sm font-medium border border-white/10 hover:border-primary hover:text-white hover:bg-primary/20 transition-all cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
