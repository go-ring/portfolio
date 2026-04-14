import type { RefObject } from 'react';
import { X, Github, BookOpen, Presentation, BadgeCheck } from 'lucide-react';
import type { Project } from '@/types/project';
import { Tooltip } from '@/components/common/Tooltip';
import { JiraIcon, NotionIcon } from './ProjectModalIcons';

interface ProjectModalHeaderProps {
  project: Project;
  headerRef: RefObject<HTMLDivElement>;
  onClose: () => void;
}

export function ProjectModalHeader({ project, headerRef, onClose }: ProjectModalHeaderProps) {
  return (
    <div
      ref={headerRef}
      className="flex items-center justify-between px-6 py-3 border-b border-white/6 bg-[#10141b] z-20 shrink-0 sticky top-0"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <h3 className="text-xl font-bold text-white whitespace-nowrap">{project.title}</h3>

        {/* Type */}
        <span className="hidden sm:block text-sm text-gray-300 font-medium whitespace-nowrap border-l border-white/10 pl-3">
          {project.type}
        </span>

        {/* Role & Period */}
        <span className="hidden md:flex items-center gap-3 text-sm text-gray-500 font-medium border-l border-white/10 pl-3">
          <span className="text-gray-300">{Array.isArray(project.role) ? project.role[0] : project.role}</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span>{project.period}</span>
        </span>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        {/* Links - Icon Only */}
        <div className="flex items-center gap-3 md:gap-4 border-r border-white/10 pr-4 md:pr-6 mr-1">
          {project.links.repo && (
            <Tooltip content="GitHub Repository">
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            </Tooltip>
          )}
          {project.links.blog && (
            <Tooltip content="Technical Blog">
              <a
                href={project.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#20C997] transition-colors"
              >
                <BookOpen size={18} />
              </a>
            </Tooltip>
          )}
          {project.links.jira && (
            <Tooltip content="Jira (Sprint/Issue Tracker)">
              <a
                href={project.links.jira}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0052CC] transition-colors"
              >
                <JiraIcon size={18} />
              </a>
            </Tooltip>
          )}
          {project.links.notion && (
            <Tooltip content="Notion (Workspace)">
              <a
                href={project.links.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <NotionIcon size={18} />
              </a>
            </Tooltip>
          )}
          {project.links.presentation && (
            <Tooltip content="Presentation (PPT)">
              <a
                href={project.links.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Presentation size={18} />
              </a>
            </Tooltip>
          )}
          {project.links.proof && (
            <Tooltip content="Verification/Proof">
              <a
                href={project.links.proof}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <BadgeCheck size={18} />
              </a>
            </Tooltip>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X size={22} />
        </button>
      </div>
    </div>
  );
}
