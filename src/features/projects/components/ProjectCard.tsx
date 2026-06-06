import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/constants/portfolio';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
        <Card 
            className="group flex flex-col justify-between p-5 min-h-[256px] rounded-[22px] overflow-hidden"
            onClick={onClick}
            hoverEffect={true}
        >
        <div>
            {/* Thumbnail Preview Area */}
            {project.images?.preview && (
                <div className="w-full h-[240px] mb-4 rounded-xl overflow-hidden relative bg-black/20 shrink-0">
                    <img 
                      src={project.images.preview} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            {/* Header: Title, Type & Period */}
            <div className="flex justify-between items-start mb-1.5 gap-2">
                <h3 className="text-lg font-bold text-[#1F1D1B] group-hover:text-[#5A6B3A] transition-colors truncate tracking-tight">
                    {project.title}
                </h3>
                <div className="flex flex-col items-end shrink-0 mt-0.5">
                    <p className="text-[12px] text-[#857C75] font-semibold tracking-wide">{project.period}</p>
                    <p className="text-[12px] text-[#5C554F] font-bold mt-0.5">{project.type}</p>
                </div>
            </div>

            {/* Role */}
            <div className="mb-2.5 flex items-center">
                <span className="h-3 w-[3px] bg-[#5A6B3A] rounded-full mr-2"></span>
                <p className="text-[13px] text-[#4A433D] font-bold truncate">
                    {Array.isArray(project.role) ? project.role[0] : project.role}
                </p>
            </div>

            {/* Summary (Single line) & Preview */}
            <div className="mb-4">
                <p className="text-[14px] text-[#1F1D1B] truncate mb-1.5 font-extrabold">
                    {project.shortDescription}
                </p>
                <p className="text-[13px] text-[#5C554F] leading-relaxed line-clamp-2 h-[40px] font-medium">
                    {project.description}
                </p>
            </div>
        </div>

        {/* Footer - Modified Layout */}
        <div className="mt-auto flex flex-col gap-2">
            {/* Tech Stack - Flexible, Wrap */}
            <div className="flex flex-wrap gap-1.5 min-h-[24px]">
                {project.tech.slice(0, 4).map(t => <Badge key={t}>{t}</Badge>)}
                {project.tech.length > 4 && (
                    <span className="text-[11px] text-[#857C75] font-bold self-center">+{project.tech.length - 4}</span>
                )}
            </div>

            {/* CTA - Compact & Bottom Fixed */}
            <div className="flex items-center text-[13px] font-bold text-[#857C75] group-hover:text-[#5A6B3A] transition-colors pt-1">
                Case Study <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </div>
        </Card>
    </motion.div>
  );
}
