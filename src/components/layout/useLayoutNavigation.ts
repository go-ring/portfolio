import { useEffect, useState, type MouseEvent } from 'react';
import { navLinks, sectionIds } from './navigation';

export function useLayoutNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Default to home

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      let currentSection = '';

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted threshold for better detection
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection('home'); // Ensure main is active at top
      }
    };

    // Initial check on mount
    handleScroll();
    
    // Check for hash in URL
      if (window.location.hash) {
        const hashSection = window.location.hash.substring(1);
        if (sectionIds.includes(hashSection)) {
          setActiveSection(hashSection);
        }
      }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resize
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);

    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      // Non-home sections always end with the compact header height (h-16 = 64px).
      // Using a fixed value prevents first-click vs second-click offset drift.
      const headerHeight = 64;
      const sectionAnchor = element.querySelector('[data-section-anchor]');
      const targetElement = sectionAnchor instanceof HTMLElement ? sectionAnchor : element;
      const targetTop = Math.max(
        targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 12,
        0
      );

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return {
    activeSection,
    isScrolled,
    mobileMenuOpen,
    navLinks,
    scrollToSection,
    setMobileMenuOpen,
  };
}
