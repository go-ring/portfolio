import { renderLinked } from '@/utils/renderUtils';
import { HIGHLIGHT_PHRASES } from './ProjectModal.constants';

export function HighlightedText({ text }: { text: string }) {
  const pattern = new RegExp(`(${HIGHLIGHT_PHRASES.join('|')})`, 'g');
  const segs: { text: string; highlight: boolean }[] = [];
  let last = 0, m: RegExpExecArray | null;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) segs.push({ text: text.slice(last, m.index), highlight: false });
    segs.push({ text: m[0], highlight: true });
    last = pattern.lastIndex;
  }
  if (last < text.length) segs.push({ text: text.slice(last), highlight: false });
  return (
    <>
      {segs.map((s, i) =>
        s.highlight
          ? <span key={i} className="font-extrabold text-[#5A6B3A]">{renderLinked(s.text)}</span>
          : <span key={i}>{renderLinked(s.text)}</span>
      )}
    </>
  );
}
