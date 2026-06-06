import { motion } from 'framer-motion';
import type { Project } from '@/types/project';
import { SectionHeader } from '@/components/common/SectionHeader';
import { HighlightedText } from './HighlightedText';
import { TROUBLE_LABELS } from './ProjectModal.constants';
import { TroubleIcon } from './ProjectModalIcons';

interface ProjectModalTroubleshootingSectionProps {
  project: Project;
}

export function ProjectModalTroubleshootingSection({ project }: ProjectModalTroubleshootingSectionProps) {
  return (
    <section id="troubleshooting" className="space-y-6 scroll-mt-24 min-h-[100px]">
      <SectionHeader title="트러블슈팅" variant="sidebar" />
      <div className="grid gap-5">
        {project.details?.troubleshooting?.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-white rounded-xl border border-[#D5CEC4] overflow-hidden shadow-sm hover:border-[#1F1D1B] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            {/* Card Title */}
            <div className="px-6 pt-5 pb-4 border-b border-[#D5CEC4] bg-[#F8F6F0]">
              <h5 className="text-[18px] font-extrabold text-[#1F1D1B] leading-snug">{section.title}</h5>
            </div>

            {/* Items */}
            <div className="px-6 py-4 space-y-3">
              {section.items.map((item, idx) => {
                const colonIdx = item.indexOf(':');
                const rawLabel = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : null;
                const labelInfo = rawLabel ? TROUBLE_LABELS[rawLabel] : null;
                const content = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : item;

                return (
                  <div key={idx} className="rounded-lg bg-white border border-[#EBE5DC] px-5 py-4">
                    {labelInfo && (
                      <div className={`flex items-center gap-1.5 text-[12px] font-extrabold tracking-widest uppercase mb-2 ${labelInfo.color}`}>
                        <TroubleIcon type={rawLabel!} />
                        <span>{rawLabel}</span>
                      </div>
                    )}
                    <p className="text-[16px] text-[#4A433D] font-medium leading-[1.7] whitespace-pre-line group-hover:text-[#1F1D1B] transition-colors">
                      <HighlightedText text={content} />
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
