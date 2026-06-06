import { renderLinked } from '@/utils/renderUtils';
import type { Project } from '@/types/project';

export function ProjectModalSlideOutcomes({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full gap-8">
      <h3 className="text-2xl font-black text-[#857C75]">성과 및 회고</h3>
      <div className="flex flex-col md:flex-row gap-12 h-full">
        <div className="flex-1">
           <h4 className="text-xl font-black text-[#1F1D1B] mb-5">주요 성과</h4>
           <ul className="space-y-4">
             {project.impact?.split('\n').map((item, idx) => (
                <li key={idx} className="flex gap-3.5 text-[16.5px] text-[#332E2A] font-medium break-keep leading-snug">
                 <span className="w-1.5 h-1.5 bg-[#5A6B3A] rounded-sm mt-2.5 shrink-0" />
                 <span>{renderLinked(item.replace(/^▪\s*/, ''))}</span>
               </li>
             ))}
           </ul>
        </div>
        {project.details?.retrospective && (
          <div className="flex-1">
            <h4 className="text-xl font-black text-[#1F1D1B] mb-5">회고 및 배운 점</h4>
            <ul className="space-y-4">
               {project.details.retrospective.map((item, idx) => (
                  <li key={idx} className="flex gap-3.5 text-[16.5px] text-[#332E2A] font-medium break-keep leading-snug">
                   <span className="w-1.5 h-1.5 bg-[#D5CEC4] rounded-sm mt-2.5 shrink-0" />
                   <span>{renderLinked(item)}</span>
                 </li>
               ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
