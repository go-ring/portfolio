import { motion } from 'framer-motion';
import { skills } from '@/constants/portfolio';
import { Card } from '@/components/common/Card';
import { Section } from '@/components/Section';

export function Skills() {
  const levelColor = {
    상: 'bg-[#5A6B3A] text-white shadow-sm border border-[#45522C]',
    중: 'border border-[#5A6B3A]/30 bg-[#5A6B3A]/10 text-[#35421A]',
    하: 'border border-[#D5CEC4] bg-[#F8F6F0] text-[#857C75]',
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
            <Card className="p-6 rounded-2xl h-full">
              <div className="mb-5 border-b border-[#D5CEC4] pb-3 flex justify-center">
                <h3 className="text-lg font-bold text-[#1F1D1B] tracking-tight">
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
