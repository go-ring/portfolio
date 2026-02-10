import { Section } from './Section';
import { education, certifications } from '../data';
import { motion } from 'framer-motion';

export function Education() {
  return (
    <Section id="education" title="교육 및 자격증">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Education Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface p-8 rounded-2xl border border-white/5 shadow-lg flex flex-col h-full"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 border-b border-white/10 pb-4">교육</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-primary/30">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                </div>
                <div className="text-gray-500 text-sm mb-2">{edu.period}</div>
                <div className="text-gray-300 font-medium">{edu.degree}</div>
                {edu.gpa && <div className="text-gray-400 text-sm mt-1">학점: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-surface p-8 rounded-2xl border border-white/5 shadow-lg flex flex-col h-full"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 border-b border-white/10 pb-4">자격증</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{cert.name}</h4>
                  <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{cert.date}</span>
                </div>
                {cert.issuer && <div className="text-gray-400 text-sm">{cert.issuer}</div>}
                <div className="w-full h-px bg-white/5 mt-4 group-last:hidden"></div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
