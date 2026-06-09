import { motion } from 'framer-motion';
import { skills } from '@/constants/portfolio';
import { Card } from '@/components/common/Card';
import { Section } from '@/components/Section';
import { Bot } from 'lucide-react';

export function Skills() {
  const renderCard = (item: any) => (
    <Card className="p-4 rounded-[1.1rem] flex flex-col gap-3.5 h-full">
      {/* Header: Icon, Name, Levels */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          {item.icon === 'bot' ? (
            <Bot className="w-[1.6rem] h-[1.6rem] text-[#5A6B3A] shrink-0" />
          ) : (
            <img src={item.icon} alt={item.name} className="w-[1.6rem] h-[1.6rem] object-contain shrink-0" />
          )}
          <h4 className="text-[1.08rem] font-bold text-[#1F1D1B] tracking-tight">{item.name}</h4>
        </div>
        
        {/* 5 Level Boxes */}
        <div className="flex gap-[5px]">
          {[1, 2, 3, 4, 5].map(lvl => (
            <div 
              key={lvl} 
              className={`w-[16px] h-[16px] rounded-[3px] ${
                lvl <= (item.level || 0) 
                  ? 'bg-[#A8BA94] border border-[#94A680]' 
                  : 'bg-[#F8F6F0] border border-[#E5E0D8]'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Bullet points */}
      <ul className="flex flex-col gap-1">
        {item.points?.map((pt: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="w-[4px] h-[4px] bg-[#1F1D1B] rounded-full mt-[9px] shrink-0" />
            <span className="text-[0.85rem] text-[#1F1D1B] font-semibold leading-[1.45]">
              {pt}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );

  const renderOthersCard = (item: any) => (
    <Card className="p-4 rounded-[1.1rem] flex flex-col gap-3.5 min-w-[126px]">
      <h4 className="text-[1rem] font-bold text-[#1F1D1B] tracking-tight">{item.name}</h4>
      <div className="flex flex-col gap-2.5">
        {item.subItems?.map((sub: any, j: number) => (
          <div key={j} className="flex items-center gap-2.5">
            <img src={sub.icon} alt={sub.name} className="w-7 h-7 object-contain shrink-0" />
            <span className="text-[0.95rem] font-semibold text-[#1F1D1B] whitespace-nowrap">{sub.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <Section id="skills" title="Skills" className="!py-14">
      <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1fr_1fr_auto] gap-4 max-w-[1440px] mx-auto items-start">
        
        {/* Column 1: Backend */}
        <div className="flex flex-col gap-2 h-full">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-[5px] h-[18px] bg-[#687C4D] rounded-full"></div>
            <h3 className="text-[1.3rem] font-black text-[#2C2A28] tracking-tight">
              {skills[0].category}
            </h3>
          </div>
          <div className="bg-[#F4F6F0] p-4 rounded-[20px] border border-[#E2E6D9] shadow-sm flex flex-col gap-5 h-full">
            {skills[0].items.map((item, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="h-full">
                {renderCard(item)}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2 & 3: Infra + AI */}
        <div className="xl:col-span-2 flex flex-col gap-5 h-full">
          
          {/* Infra */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5 px-1">
              <div className="w-[5px] h-[18px] bg-[#D19A6A] rounded-full"></div>
              <h3 className="text-[1.3rem] font-black text-[#2C2A28] tracking-tight">
                {skills[1].category}
              </h3>
            </div>
            <div className="bg-[#FFF9F2] p-4 rounded-[20px] border border-[#F2E4D5] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {/* Col 1 of Infra: AWS, Docker */}
              <div className="flex flex-col gap-5">
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="h-full">
                  {renderCard(skills[1].items[0])}
                </motion.div>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}} className="h-full">
                  {renderCard(skills[1].items[1])}
                </motion.div>
              </div>
              {/* Col 2 of Infra: Jenkins, GitLab CI/CD */}
              <div className="flex flex-col gap-5">
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.2}} className="h-full">
                  {renderCard(skills[1].items[2])}
                </motion.div>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.3}} className="h-full">
                  {renderCard(skills[1].items[3])}
                </motion.div>
              </div>
            </div>
          </div>

          {/* AI */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5 px-1">
              <div className="w-[5px] h-[18px] bg-[#8B95A6] rounded-full"></div>
              <h3 className="text-[1.3rem] font-black text-[#2C2A28] tracking-tight">
                {skills[2].category}
              </h3>
            </div>
            <div className="bg-[#F4F6F9] p-4 rounded-[20px] border border-[#E2E6EE] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="h-full">
                {renderCard(skills[2].items[0])}
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}} className="h-full">
                {renderCard(skills[2].items[1])}
              </motion.div>
            </div>
          </div>

        </div>

        {/* Column 4: Others */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-[5px] h-[18px] bg-[#A19D98] rounded-full"></div>
            <h3 className="text-[1.3rem] font-black text-[#2C2A28] tracking-tight">
              {skills[3].category}
            </h3>
          </div>
          <div className="bg-[#F8F8F8] p-4 rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col gap-5 h-max">
            {skills[3].items.map((item, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}}>
                {renderOthersCard(item)}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
