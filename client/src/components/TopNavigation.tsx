import { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Menu, X } from 'lucide-react';
import { useTheme } from '@/_core/hooks/useTheme';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize if screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeResizeListener('resize', handleResize);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 md:gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6">
                <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <p className="font-black text-foreground text-base md:text-lg leading-none tracking-tighter group-hover:text-blue-600 transition-colors duration-300">Laura Meira</p>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80">Fisioterapia</p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground font-bold text-sm hover:text-blue-600 transition-colors duration-300 relative group cursor-pointer py-2"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <motion.button
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2, shadow: "0 20px 25px -5px rgb(37 99 235 / 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-xs md:text-sm">Agendar</span>
              </motion.button>

              <motion.button
                onClick={toggleTheme}
                className="p-2 md:p-2.5 hover:bg-blue-600/10 hover:text-blue-600 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} className="md:w-5 md:h-5" /> : <Moon size={18} className="md:w-5 md:h-5" />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 md:p-2.5 hover:bg-blue-600/10 hover:text-blue-600 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-background md:hidden pt-20"
          >
            <div className="container px-6 py-8 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-5 text-foreground font-black text-2xl hover:bg-blue-600/10 hover:text-blue-600 rounded-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-600/20"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 px-6 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl transition-all duration-300 mt-8 cursor-pointer shadow-2xl shadow-blue-600/30"
              >
                <MessageCircle size={24} />
                <span>Agendar Consulta</span>
              </motion.button>
              
              <div className="mt-auto pt-10 text-center">
                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest opacity-50">Laura Meira Fisioterapia</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
