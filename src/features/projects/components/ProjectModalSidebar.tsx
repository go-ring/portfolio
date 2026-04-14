import { List, ChevronRight } from 'lucide-react';
import { TOC_ITEMS } from './ProjectModal.constants';

interface ProjectModalSidebarProps {
  activeId: string;
  onScrollTo: (id: string) => void;
}

export function ProjectModalSidebar({ activeId, onScrollTo }: ProjectModalSidebarProps) {
  return (
    <aside className="w-64 hidden md:flex flex-col border-r border-white/10 bg-[#141820] p-6 overflow-y-auto shrink-0">
      <div className="flex items-center gap-2 mb-6 text-primary font-bold">
        <List size={20} />
        <span>목차</span>
      </div>
      <nav className="space-y-1">
        {TOC_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onScrollTo(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${activeId === item.id
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
              }`}
          >
            {item.label}
            {activeId === item.id && <ChevronRight size={14} />}
          </button>
        ))}
      </nav>
    </aside>
  );
}
