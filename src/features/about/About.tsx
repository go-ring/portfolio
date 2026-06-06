import { education, certifications, awards, research } from '@/constants';
import { profile } from '@/constants/profile/profile';
import { Section } from '@/components/Section';
import { Card } from '@/components/common/Card';
import { Mail, Github, BookOpen } from 'lucide-react';
import profileImg from '@/assets/images/profile1.jpg';

export function About() {
  return (
    <Section id="about" title="About Me" className="!py-12">
      <Card className="max-w-6xl mx-auto p-6 md:p-12 rounded-[2rem]">
        {/* Reduce gap to scale down overall size */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center md:items-start">
          
          {/* Left Column: Profile Card */}
          <div className="w-full md:w-[250px] shrink-0 flex flex-col items-center md:items-start">
            <div className="relative w-48 h-48 md:w-full md:aspect-[4/5] md:h-auto rounded-[1.75rem] overflow-hidden mb-5 border border-[#E5E0D8] shadow-sm">
              <img src={profileImg} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full text-center md:text-left md:pl-0.5">
              <h3 className="text-[1.5rem] font-black text-[#1F1D1B] mb-1 tracking-tight">
                {profile.name}
              </h3>
              <p className="text-[0.95rem] font-bold text-[#5A6B3A] mb-5">{profile.title}</p>
              
              <div className="flex flex-col gap-2 w-full">
                <a href={profile.social.email} className="flex items-center justify-center md:justify-start gap-3 text-[#1F1D1B] hover:text-[#5A6B3A] transition-colors text-[0.85rem] font-bold">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#F8F6F0] flex items-center justify-center shrink-0 border border-[#E5E0D8]">
                    <Mail size={14} strokeWidth={2.5} />
                  </div>
                  dlrkdms001@gmail.com
                </a>
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-[#1F1D1B] hover:text-[#5A6B3A] transition-colors text-[0.85rem] font-bold">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#F8F6F0] flex items-center justify-center shrink-0 border border-[#E5E0D8]">
                    <Github size={14} strokeWidth={2.5} />
                  </div>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Quadrants */}
          <div className="w-full flex-1 grid md:grid-cols-2 gap-x-5 gap-y-10 self-center">
            
            {/* Education */}
            <div>
              <h3 className="text-[1.3rem] font-bold text-[#857C75] mb-4 tracking-tight">Education</h3>
              <div className="space-y-3.5">
                {education.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#1F1D1B] mt-[9px] shrink-0" />
                    <div>
                      <p className="text-[#1F1D1B] text-[0.95rem] font-bold leading-snug">
                        {item.school}
                      </p>
                      <p className="text-[#5C554F] text-[0.8rem] mt-0.5 font-medium">
                        ({item.period.replace(/ /g, '')})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-[1.3rem] font-bold text-[#857C75] mb-4 tracking-tight">Awards</h3>
              <div className="space-y-3.5">
                {awards.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#1F1D1B] mt-[9px] shrink-0" />
                    <div>
                      <p className="text-[#1F1D1B] text-[0.95rem] font-bold leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[#5C554F] text-[0.8rem] mt-0.5 font-medium">
                        ({item.date})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Licenses */}
            <div>
              <h3 className="text-[1.3rem] font-bold text-[#857C75] mb-4 tracking-tight">Licenses</h3>
              <div className="space-y-3.5">
                {certifications.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#1F1D1B] mt-[9px] shrink-0" />
                    <div>
                      <p className="text-[#1F1D1B] text-[0.95rem] font-bold leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[#5C554F] text-[0.8rem] mt-0.5 font-medium">
                        ({item.date})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-[1.3rem] font-bold text-[#857C75] mb-4 tracking-tight">Research</h3>
              <div className="space-y-3.5">
                {research.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#1F1D1B] mt-[9px] shrink-0" />
                    <div>
                      <p className="text-[#1F1D1B] text-[0.95rem] font-bold leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[#5C554F] text-[0.8rem] mt-0.5 font-medium">
                        ({item.conference})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Card>
    </Section>
  );
}
