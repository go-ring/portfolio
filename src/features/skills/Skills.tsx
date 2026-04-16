import { motion } from 'framer-motion';
import { skills } from '@/constants/portfolio';
import { Card } from '@/components/common/Card';
import { Section } from '@/components/Section';

export function Skills() {
  const levelColor = {
    상: 'bg-primary text-background shadow-[0_0_14px_rgba(159,170,124,0.32)]',
    중: 'border border-primary/50 bg-primary/10 text-primary',
    하: 'border border-white/10 bg-white/[0.04] text-gray-400',
  };

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            <Card className="p-6 rounded-2xl h-full shadow-lg hover:border-primary/30">
              <div className="mb-5 border-b border-primary/20 pb-3 flex justify-center">
                <h3 className="text-lg font-semibold text-primary">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 flex-1 content-start">
                {skillGroup.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold cursor-default transition-all ${levelColor[item.level]}`}
                  >
                    <span>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
