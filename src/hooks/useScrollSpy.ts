import { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollSpyOptions {
  rootMargin?: string;
  threshold?: number;
  offset?: number;
}

export function useScrollSpy(
  contentRef: RefObject<HTMLElement>,
  itemIds: string[],
  options: ScrollSpyOptions = {}
) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isClickScrolling = useRef(false);
  const { rootMargin = '-100px 0px -70% 0px', threshold = 0, offset = 0 } = options;

  useEffect(() => {
    if (!contentRef.current) return;

    const cleanupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    cleanupObserver();

    observerRef.current = new IntersectionObserver((entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      root: contentRef.current,
      rootMargin,
      threshold
    });

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return cleanupObserver;
  }, [contentRef, itemIds, rootMargin, threshold]);

  const scrollToId = (id: string) => {
    const container = contentRef.current;
    const section = document.getElementById(id);
    
    if (section && container) {
        isClickScrolling.current = true;
        setActiveId(id);

        const containerRect = container.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const targetTop = container.scrollTop + (sectionRect.top - containerRect.top) - offset;

        container.scrollTo({
            top: Math.max(targetTop, 0),
            behavior: 'smooth'
        });

        setTimeout(() => {
            isClickScrolling.current = false;
        }, 800);
    }
  };

  return { activeId, scrollToId };
}
