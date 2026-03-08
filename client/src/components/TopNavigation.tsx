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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6">
                <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <p className="font-black text-foreground text-lg leading-none tracking-tighter group-hover:text-blue-600 transition-colors duration-300">Laura Meira</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80">Fisioterapia</p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2, shadow: "0 20px 25px -5px rgb(37 99 235 / 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                <span className="text-sm">Agendar</span>
              </motion.button>

              <motion.button
                onClick={toggleTheme}
                className="p-2.5 hover:bg-blue-600/10 hover:text-blue-600 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 hover:bg-blue-600/10 hover:text-blue-600 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container px-6 py-8 space-y-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-4 text-foreground font-bold text-lg hover:bg-blue-600/10 hover:text-blue-600 rounded-2xl transition-all duration-300 cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 mt-6 cursor-pointer shadow-xl shadow-blue-600/20"
              >
                <MessageCircle size={22} />
                <span>Falar no WhatsApp</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
