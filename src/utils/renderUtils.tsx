import { ExternalLink } from 'lucide-react';
import React from 'react';

/**
 * Renders text with markdown-style links [label](url).
 */
export function renderLinked(text: string): React.ReactNode {
  const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <a
        key={m.index}
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
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
