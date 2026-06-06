import { renderLinked } from '@/utils/renderUtils';
import type { Project } from '@/types/project';

export function ProjectModalSlideTechSelection({ project }: { project: Project }) {
  if (!project.details?.techAndReason || project.details.techAndReason.length === 0) return null;

  return (
    <div className="flex flex-col md:flex-row gap-12 h-full items-start">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col h-full gap-8">
        <h3 className="text-2xl font-black text-[#857C75]">사용기술</h3>
        <div className="flex flex-col gap-8">
          {project.details.techAndReason.map((item, idx) => {
            const colonIdx = item.indexOf(':');
            const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : null;
            const content = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : item;
            return (
              <div key={idx} className="flex flex-col gap-2">
                {title && <h4 className="text-[18.5px] font-black text-[#1F1D1B]">{title}</h4>}
                <p className="text-[16px] text-[#332E2A] font-medium break-keep leading-[1.4]">
                  {renderLinked(content)}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right: Architecture Image */}
      {project.images?.architecture && (
        <div className="w-full md:w-5/12 shrink-0 flex items-center justify-center pt-2 md:pt-10">
          <img 
            src={Array.isArray(project.images.architecture) ? project.images.architecture[0] : project.images.architecture} 
            alt="Architecture" 
            className="w-full h-auto object-contain drop-shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
