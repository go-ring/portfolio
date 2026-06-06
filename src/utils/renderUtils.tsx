import { ExternalLink } from 'lucide-react';
import React from 'react';

/**
 * Renders text with markdown-style links [label](url).
 */
export function renderLinked(text: string): React.ReactNode {
  // First, parse links
  const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(...parseBold(text.slice(last, m.index), last));
    }
    parts.push(
      <a
        key={`link-${m.index}`}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity inline-flex items-center gap-0.5 mx-0.5"
      >
        {m[1]}
        <ExternalLink size={12} className="inline-block" />
      </a>
    );
    last = LINK_RE.lastIndex;
  }
  if (last < text.length) {
    parts.push(...parseBold(text.slice(last), last));
  }
  return <>{parts}</>;
}

// Helper to parse bold text within text segments
function parseBold(text: string, offset: number): React.ReactNode[] {
  const BOLD_RE = /\*\*(.*?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  
  while ((m = BOLD_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <strong key={`bold-${offset}-${m.index}`} className="font-extrabold text-[#1F1D1B]">
        {m[1]}
      </strong>
    );
    last = BOLD_RE.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
