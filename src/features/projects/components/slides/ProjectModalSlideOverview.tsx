import { renderLinked } from '@/utils/renderUtils';
import type { Project } from '@/types/project';
import { ProjectAppPreview } from '../ProjectAppPreview';

export function ProjectModalSlideOverview({ project }: { project: Project }) {
  const isMobileApp = project.images?.overviewLayout === 'mobile';
  const gallery = project.images?.overviewGallery || [];
  const displayImpact = project.shortImpact ?? project.impact;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Images */}
        {/* Left: Images */}
        <div className={`w-full ${isMobileApp ? 'md:w-5/12' : 'md:w-1/2 lg:w-[58%] -ml-8 md:-ml-12'} shrink-0 flex flex-col items-start gap-4`}>
          {isMobileApp ? (
            <ProjectAppPreview
              title={project.title}
              screens={gallery}
            />
          ) : (
            <div className="w-full flex flex-col gap-4 mt-2">
              {project.images?.main && (
                <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white">
                  {/* Clean Browser Header */}
                  <div className="bg-[#F8F9FA] border-b border-gray-200 px-3 py-1.5 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
                  </div>
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-white flex">
                    <img 
                      src={project.images.main} 
                      alt="Main" 
                      className="w-full h-auto object-cover object-top max-h-[500px]" 
                    />
                  </div>
                </div>
              )}
              {gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {gallery.slice(0, 2).map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 bg-[#EBE5DC]">
                      <img src={img} alt="Gallery" className="w-full h-auto object-contain max-h-[200px]" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Impact Metrics (Under Browser - WEB ONLY) */}
          {!isMobileApp && displayImpact && project.title !== '백구(BAEKGU)' && (
             <div className="w-full mt-5 px-1 flex flex-col gap-1.5">
               {displayImpact.split('\n').map((line, idx) => (
                 <p key={idx} className="text-[15px] font-bold text-[#5A6B3A] whitespace-pre-wrap leading-[1.4]">
                   {line.replace(/\*\*/g, '').replace(/^▪\s*/, '')}
                 </p>
               ))}
             </div>
          )}
        </div>

        {/* Right: Text */}
        {/* Right: Text */}
        <div className="flex-1 flex flex-col">
          <div className="mb-7">
            <h3 className="text-2xl font-black text-[#857C75] mb-4">소개</h3>
            <div className="text-[16px] text-[#332E2A] font-medium break-keep space-y-1.5">
              {project.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={`whitespace-pre-wrap ${idx === 0 ? 'leading-[1.5]' : 'leading-[1.35]'}`}>
                  {renderLinked(paragraph)}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-[#857C75] mb-4">핵심 기능</h3>
            <ul className="space-y-2.5">
              {project.details?.implementation?.map((item, idx) => {
                 const colonIdx = item.indexOf(':');
                 const title = colonIdx !== -1 ? item.slice(0, colonIdx).trim() : item;
                 const body = colonIdx !== -1 ? item.slice(colonIdx + 1).trim() : '';
                 return (
                   <li key={idx} className="flex gap-3 text-[15.5px] text-[#332E2A] font-medium break-keep leading-[1.3]">
                     <span className="w-1.5 h-1.5 bg-[#1F1D1B] rounded-sm mt-1.5 shrink-0" />
                     <span>
                        {title && <strong className="font-extrabold mr-1.5">{title}</strong>}
                        {body}
                     </span>
                   </li>
                 )
              })}
            </ul>
          </div>

          <div className="mt-7">
            {/* Impact Metrics (Under Text - MOBILE ONLY) */}
            {isMobileApp && displayImpact && project.title !== '백구(BAEKGU)' && (
               <div className="flex flex-col gap-1.5">
                 {displayImpact.split('\n').map((line, idx) => (
                   <p key={idx} className="text-[16px] font-extrabold text-[#5A6B3A] whitespace-pre-wrap leading-[1.4]">
                     {line.replace(/\*\*/g, '').replace(/^▪\s*/, '')}
                   </p>
                 ))}
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
