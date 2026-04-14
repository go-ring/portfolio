import { Trophy, ExternalLink } from 'lucide-react';
import type { Project } from '@/types/project';
import { SectionHeader } from '@/components/common/SectionHeader';
import { renderLinked } from '@/utils/renderUtils';

interface ProjectModalOutcomesSectionProps {
  project: Project;
}

export function ProjectModalOutcomesSection({ project }: ProjectModalOutcomesSectionProps) {
  return (
    <section id="outcomes" className="space-y-6 scroll-mt-24 min-h-[200px]">
      <SectionHeader title="성과 및 결과" variant="sidebar" /> {/* No Icon */}

      <div className="grid gap-3">
        {project.impact && project.impact.split('\n').map((line, idx) => {
          // Check if this line is the one about the Smart Media Conference
          const isAwardLine = line.includes("우수상") || line.includes("상장");
          const isPaperLine = line.includes("학술 논문") || line.includes("학술대회");
          const isReportLine = line.includes("연구 보고서") || line.includes("검토·정리");

          const colonIdx = line.indexOf(':');
          const title = colonIdx !== -1 ? line.slice(0, colonIdx).trim() : null;
          const content = colonIdx !== -1 ? line.slice(colonIdx + 1).trim() : line;

          return (
            <div key={idx} className="group flex flex-col sm:flex-row gap-3.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-yellow-500/30 transition-all duration-200 items-start">
              <div className="flex gap-3.5 items-start flex-1 min-w-0">
                <Trophy className="text-yellow-500 mt-0.5 shrink-0" size={18} />
                <div className="flex-1 min-w-0 py-0.5">
                  {title && <span className="font-bold text-yellow-500/90 text-[16.5px] block mb-0.5 group-hover:brightness-110 transition-all">{title}</span>}
                  <span className="text-[15.5px] text-gray-200 leading-snug group-hover:text-white transition-colors block">
                    {renderLinked(content)}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0 items-center justify-end w-full sm:w-auto mt-2 sm:mt-0 sm:ml-4">
                {isAwardLine && project.links.proof && (
                  <a
                    href={project.links.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 hover:underline transition-colors font-medium whitespace-nowrap bg-yellow-500/10 px-2 py-1 rounded"
                  >
                    <ExternalLink size={14} />
                    Award
                  </a>
                )}
                {isPaperLine && project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium whitespace-nowrap bg-blue-500/10 px-2 py-1 rounded"
                  >
                    <ExternalLink size={14} />
                    Paper
                  </a>
                )}
                {isReportLine && project.links.proof && (
                  <a
                    href={project.links.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 hover:underline transition-colors font-medium whitespace-nowrap bg-purple-500/10 px-2 py-1 rounded"
                  >
                    <ExternalLink size={14} />
                    Report
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
