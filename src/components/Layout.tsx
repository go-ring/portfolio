import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import turtleLogo from '/turtle.svg';
import { useLayoutNavigation } from './layout/useLayoutNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const {
    activeSection,
    isScrolled,
    mobileMenuOpen,
    navLinks,
    scrollToSection,
    setMobileMenuOpen,
  } = useLayoutNavigation();

  return (
    <div className="min-h-screen font-sans text-[#1F1D1B] selection:bg-[#5A6B3A]/20 selection:text-[#1F1D1B] relative bg-[#F8F6F0]">
      
      {/* Global Background Decor - Fixed to prevent banding */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5A6B3A]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D2694B]/10 rounded-full blur-[120px]" />
          {/* Subtle Noise Layer */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-multiply" />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'h-16 bg-[#F8F6F0]/90 backdrop-blur-md border-[#E5E0D8] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]' 
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
              <div className="w-10 h-10 rounded-full bg-[#5A6B3A] flex items-center justify-center border border-[#5A6B3A] group-hover:bg-[#45522C] transition-all duration-300 overflow-hidden shadow-sm text-white">
                 <img src={turtleLogo} alt="Turtle Logo" className="w-full h-full object-contain p-[3px] brightness-0 invert" />
              </div>
              <span className="font-sans font-bold text-2xl text-[#1F1D1B] group-hover:text-[#5A6B3A] transition-colors tracking-tight lowercase leading-none pb-1 pt-0">
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
                  className={`text-sm font-bold transition-colors relative px-1 py-2 ${
                    activeSection === link.href.substring(1)
                      ? 'text-[#1F1D1B]'
                      : 'text-[#857C75] hover:text-[#1F1D1B]'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A6B3A] rounded-full"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1F1D1B] hover:bg-black/5 rounded-lg"
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
            className="fixed top-16 left-0 right-0 z-40 bg-[#F8F6F0] border-b border-[#E5E0D8] md:hidden overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[#5C554F] hover:text-[#5A6B3A] font-bold py-2 border-b border-[#E5E0D8] last:border-0"
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
