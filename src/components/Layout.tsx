import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import turtleLogo from '/turtle.svg';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Default to home

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'projects', 'skills', 'about'];
      let currentSection = '';

      for (const section of sections) {
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
        if (['home', 'projects', 'skills', 'about'].includes(hashSection)) {
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  return (
    <div className="min-h-screen font-sans text-gray-100 selection:bg-primary/30 selection:text-white relative bg-[#10141b]">
      
      {/* Global Background Decor - Fixed to prevent banding */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
          {/* Subtle Noise Layer */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'h-16 bg-[#10141b]/80 backdrop-blur-md border-white/5 shadow-md' 
            : 'h-20 bg-transparent border-transparent'
        }`}
      >
        <div className="w-full h-full px-6 flex justify-center">
          <div className="max-w-[1120px] w-full flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2.5 group -ml-4 md:-ml-8"
            >
              {/* Custom Turtle Logo - SVG */}
              <div className="w-10 h-10 rounded-full bg-[#9FAA7C] flex items-center justify-center border border-[#9FAA7C] group-hover:bg-[#DBF06D] group-hover:border-[#DBF06D] transition-all duration-300 overflow-hidden shadow-lg shadow-[#9FAA7C]/20 text-white">
                 <img src={turtleLogo} alt="Turtle Logo" className="w-full h-full object-contain p-[3px]" />
              </div>
              <span className="font-sans font-bold text-2xl text-white group-hover:text-[#9FAA7C] transition-colors tracking-tight lowercase leading-none pb-1 pt-0">
                goring
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors relative px-1 py-2 ${
                    activeSection === link.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9FAA7C] rounded-full"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#1c212c] border-b border-white/5 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-[#9FAA7C] font-medium py-2 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {children}
      </main>


    </div>
  );
}
