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
            className="bg-[#1a1f2c] rounded-xl border border-white/5 overflow-hidden hover:bg-[#1d2235] hover:shadow-lg transition-all duration-300"
          >
            {/* Card Title */}
            <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
              <h5 className="text-[18px] font-bold text-white leading-snug">{section.title}</h5>
            </div>

            {/* Items */}
            <div className="px-6 py-4 space-y-3">
              {section.items.map((item, idx) => {
                const colonIdx = item.indexOf(':');
                const rawLabel = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : null;
                const labelInfo = rawLabel ? TROUBLE_LABELS[rawLabel] : null;
                const content = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : item;

                return (
                  <div key={idx} className="rounded-lg bg-white/[0.025] border border-white/[0.04] px-4 py-3">
                    {labelInfo && (
                      <div className={`flex items-center gap-1.5 text-[12px] font-semibold tracking-widest uppercase mb-2 ${labelInfo.color}`}>
                        <TroubleIcon type={rawLabel!} />
                        <span>{rawLabel}</span>
                      </div>
                    )}
                    <p className="text-[15px] text-gray-300 leading-[1.7] whitespace-pre-line">
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
