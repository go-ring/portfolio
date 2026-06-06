import { renderLinked } from '@/utils/renderUtils';
import type { Project } from '@/types/project';

export function ProjectModalSlideTechRole({ project }: { project: Project }) {
  // Group tech stack by prefixes (e.g., [Backend], [AI])
  const groupedTech: Record<string, string[]> = {};
  const ungroupedTech: string[] = [];

  project.tech.forEach(t => {
    const match = t.match(/^\[(.*?)\]\s*(.*)$/);
    if (match) {
      const [, group, techs] = match;
      groupedTech[group] = techs.split(',').map(x => x.trim());
    } else {
      ungroupedTech.push(t);
    }
  });

  return (
    <div className="flex flex-col md:flex-row gap-14 h-full items-start">
       {/* Left: Tech Stack */}
       <div className="w-full md:w-5/12 shrink-0 flex flex-col gap-6">
          {Object.entries(groupedTech).map(([group, techs], idx) => (
            <div key={idx}>
               <h3 className="text-[17px] font-black text-[#857C75] mb-2">{group}</h3>
               <div className="flex flex-wrap gap-1.5">
                 {techs.map((tech, i) => (
                   <span key={i} className="px-2 py-0.5 bg-white border border-[#D5CEC4] rounded-md text-[#1F1D1B] font-bold text-[12.5px] shadow-sm">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          ))}
          {ungroupedTech.length > 0 && (
            <div>
               <h3 className="text-[17px] font-black text-[#857C75] mb-2">기타</h3>
               <div className="flex flex-wrap gap-1.5">
                 {ungroupedTech.map((tech, i) => (
                   <span key={i} className="px-2 py-0.5 bg-white border border-[#D5CEC4] rounded-md text-[#1F1D1B] font-bold text-[12.5px] shadow-sm">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          )}
       </div>

       {/* Right: Role */}
       <div className="flex-1">
         <h3 className="text-2xl font-black text-[#857C75] mb-6">담당 역할</h3>
         <div className="space-y-5">
            {project.details?.roleAndContribution?.map((item, idx) => {
                const colonIdx = item.indexOf(':');
                const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : null;
                const body = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : item;
                const bodyLines = body.split('\n').filter(l => l.trim() !== '');

                return (
                  <div key={idx}>
                    {title && <h4 className="text-[17px] font-black text-[#1F1D1B] mb-2">{title}</h4>}
                    <ul className="space-y-1.5">
                      {bodyLines.map((line, lIdx) => (
                        <li key={lIdx} className="flex gap-2.5 text-[15px] text-[#332E2A] font-medium break-keep leading-[1.35]">
                          <span className="w-1.5 h-1.5 bg-[#1F1D1B] rounded-sm mt-1.5 shrink-0" />
                          <span>{renderLinked(line.replace(/^▪\s*/, ''))}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            })}
         </div>
       </div>
    </div>
  )
}
