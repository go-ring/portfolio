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
  const { rootMargin = '-100px 0px -70% 0px', threshold = 0 } = options;

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
    const section = document.getElementById(id);
    
    if (section) {
        isClickScrolling.current = true;
        setActiveId(id);

        section.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });

        setTimeout(() => {
            isClickScrolling.current = false;
        }, 800);
    }
  };

  return { activeId, scrollToId };
}
