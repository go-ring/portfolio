import { renderLinked } from '@/utils/renderUtils';
import type { Project } from '@/types/project';

export function ProjectModalSlideTrouble({ project, trouble }: { project: Project, trouble: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-12 h-full items-start">
      <div className="flex-1 flex flex-col h-full">
         <h3 className="text-2xl font-black text-[#857C75] mb-8">문제 해결 과정</h3>
         <h4 className="text-[20px] font-black text-[#1F1D1B] mb-5">{trouble.title}</h4>
         <ul className="space-y-4">
           {trouble.items.map((item: string, idx: number) => {
             const colonIdx = item.indexOf(':');
             const label = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : null;
             const content = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : item;
             return (
               <li key={idx} className="flex gap-3.5 text-[16.5px] text-[#332E2A] font-medium break-keep leading-snug">
                 <span className="w-1.5 h-1.5 bg-[#1F1D1B] rounded-sm mt-2.5 shrink-0" />
                 <span>
                    {label && <strong className="font-extrabold mr-1.5">{label}</strong>}
                    {renderLinked(content)}
                 </span>
               </li>
             )
           })}
         </ul>
      </div>
    </div>
  )
}
