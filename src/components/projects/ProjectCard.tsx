import { Project } from '../../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

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
            className="group flex flex-col justify-between p-5 h-[256px] rounded-[22px]"
            onClick={onClick}
            hoverEffect={true}
        >
        <div>
            {/* Header: Title & Arrow */}
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-100 group-hover:text-primary transition-colors truncate pr-4">
                    {project.title}
                </h3>
                <ArrowRight size={18} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>

            {/* Type */}
            <div className="mb-3 flex items-center">
                <span className="h-3 w-[2px] bg-primary rounded-full mr-2"></span>
                <p className="text-xs text-gray-300 font-medium truncate">
                    {project.type}
                </p>
            </div>

            {/* Meta: Role · Period */}
            <p className="text-xs text-gray-500 mb-2 font-medium truncate">
                <span className="text-gray-300">{Array.isArray(project.role) ? project.role[0] : project.role}</span> · {project.period}
            </p>

            {/* Summary (Strict 2 lines) */}
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 h-[42px] mb-2 opacity-80">
                {project.description}
            </p>
        </div>

        {/* Footer - Modified Layout */}
        <div className="mt-auto flex flex-col gap-2">
            {/* Tech Stack - Flexible, Wrap */}
            <div className="flex flex-wrap gap-1.5 min-h-[24px]">
                {project.tech.slice(0, 4).map(t => <Badge key={t}>{t}</Badge>)}
                {project.tech.length > 4 && (
                    <span className="text-[10px] text-gray-600 font-medium self-center">+{project.tech.length - 4}</span>
                )}
            </div>

            {/* CTA - Compact & Bottom Fixed */}
            <div className="flex items-center text-[13px] font-semibold text-gray-500 group-hover:text-primary transition-colors pt-1">
                Case Study <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </div>
        </Card>
    </motion.div>
  );
}
