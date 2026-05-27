import { Github, BookOpen, Presentation, BadgeCheck, ExternalLink, Trophy } from 'lucide-react';
import type { Project } from '@/types/project';
import { SectionHeader } from '@/components/common/SectionHeader';
import { NotionIcon } from './ProjectModalIcons';

interface ProjectModalLinksSectionProps {
  project: Project;
}

export function ProjectModalLinksSection({ project }: ProjectModalLinksSectionProps) {
  if (Object.keys(project.links).length === 0) return null;

  return (
    <section id="links" className="scroll-mt-24 space-y-6">
      <SectionHeader title="관련 자료" variant="sidebar" />
      <div className="grid gap-3">
        {project.links.repo && (
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/50 transition-all duration-300">
            <Github size={22} className="text-gray-400 group-hover:text-white transition-colors shrink-0" />
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">GitHub Repository</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
        {project.links.notion && (
          <a href={project.links.notion} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/50 transition-all duration-300">
            <div className="shrink-0 text-gray-400 group-hover:text-white transition-colors">
              <NotionIcon size={22} />
            </div>
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">프로젝트 노션 (Notion Workspace)</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
        {project.links.presentation && (
          <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-orange-400/50 transition-all duration-300">
            <Presentation size={22} className="text-gray-400 group-hover:text-orange-400 transition-colors shrink-0" />
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">발표 자료 (Presentation)</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-orange-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
        {project.links.award && (
          <a href={project.links.award} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-yellow-500/50 transition-all duration-300">
            <Trophy size={22} className="text-gray-400 group-hover:text-yellow-500 transition-colors shrink-0" />
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">수상내역 (Awards)</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-yellow-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
        {project.links.proof && (
          <a href={project.links.proof} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-yellow-400/50 transition-all duration-300">
            <BadgeCheck size={22} className="text-gray-400 group-hover:text-yellow-400 transition-colors shrink-0" />
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">증빙 자료 및 데모 시연 영상</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-yellow-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#20C997]/50 transition-all duration-300">
            <ExternalLink size={22} className="text-gray-400 group-hover:text-[#20C997] transition-colors shrink-0" />
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">라이브 데모 (Live Demo)</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-[#20C997] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
        {project.links.paper && (
          <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#20C997]/50 transition-all duration-300">
            <BookOpen size={22} className="text-gray-400 group-hover:text-[#20C997] transition-colors shrink-0" />
            <span className="text-[16px] font-semibold text-gray-200 group-hover:text-white transition-colors">관련 논문 (Paper)</span>
            <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-[#20C997] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        )}
      </div>
    </section>
  );
}
