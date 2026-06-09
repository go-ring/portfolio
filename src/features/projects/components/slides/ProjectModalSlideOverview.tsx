import { renderLinked } from '@/utils/renderUtils';
import type { Project } from '@/types/project';

export function ProjectModalSlideOverview({ project }: { project: Project }) {
  const isMobileApp = project.title.includes('빼꼼') || project.title.includes('DDOYA');
  const gallery = project.images?.overviewGallery || [];
  const displayImpact = project.shortImpact ?? project.impact;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Images */}
        {/* Left: Images */}
        <div className={`w-full ${isMobileApp ? 'md:w-5/12' : 'md:w-1/2 lg:w-[58%] -ml-8 md:-ml-12'} shrink-0 flex flex-col items-start gap-4`}>
          {isMobileApp ? (
            <div className="relative w-full h-[460px] flex items-center justify-center mt-4">
               {/* Phone 1: Back Left */}
               {gallery[0] && (
                 <div className="absolute left-2 top-0 w-[190px] h-[400px] rounded-[32px] border-[6px] border-gray-800 bg-white shadow-lg overflow-hidden transform -rotate-12 z-0 opacity-80 hover:opacity-100 transition-all hover:scale-105 hover:z-30 hover:-rotate-6">
                   <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10"><div className="w-14 h-4 bg-gray-800 rounded-b-xl"></div></div>
                   <img src={gallery[0]} alt="Screen 1" className="w-full h-full object-cover" />
                 </div>
               )}
               {/* Phone 2: Back Right */}
               {gallery[1] && (
                 <div className="absolute right-2 top-8 w-[190px] h-[400px] rounded-[32px] border-[6px] border-gray-800 bg-white shadow-xl overflow-hidden transform rotate-6 z-10 opacity-90 hover:opacity-100 transition-all hover:scale-105 hover:z-30 hover:rotate-0">
                   <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10"><div className="w-14 h-4 bg-gray-800 rounded-b-xl"></div></div>
                   <img src={gallery[1]} alt="Screen 2" className="w-full h-full object-cover" />
                 </div>
               )}
               {/* Phone 3: Center Front */}
               {project.images?.main && (
                 <div className="absolute left-1/2 -translate-x-1/2 top-16 z-20 w-[200px] h-[420px] rounded-[32px] border-[8px] border-gray-900 bg-white shadow-2xl overflow-hidden transition-transform hover:scale-105">
                   <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10"><div className="w-16 h-4 bg-gray-900 rounded-b-xl"></div></div>
                   <img src={project.images.main} alt="Main Screen" className="w-full h-full object-cover" />
                 </div>
               )}
            </div>
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
                 {(project.title.includes('빼꼼') ? displayImpact.split('\n').slice(0, 2) : displayImpact.split('\n')).map((line, idx) => (
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
