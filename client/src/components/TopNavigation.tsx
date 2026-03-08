import { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Menu, X } from 'lucide-react';
import { useTheme } from '@/_core/hooks/useTheme';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:shadow-blue-600/50 transition-all duration-300">
                <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="hidden sm:block group-hover:text-blue-600 transition-colors duration-300">
                <p className="font-bold text-foreground text-sm">Laura Meira</p>
                <p className="text-xs text-muted-foreground">Fisioterapia</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground font-medium text-sm hover:text-blue-600 transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-green-500/30 cursor-pointer hover:shadow-xl hover:shadow-green-500/50"
              >
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-blue-600/10 hover:text-blue-600 rounded-lg transition-all duration-300 cursor-pointer hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-blue-600/10 hover:text-blue-600 rounded-lg transition-all duration-300 cursor-pointer hover:scale-110"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="container px-6 py-8 space-y-4">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 text-foreground font-medium hover:bg-blue-600/10 hover:text-blue-600 rounded-lg transition-all duration-300 cursor-pointer hover:translate-x-2 animate-in fade-in slide-in-from-left-10 duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-300 mt-4 cursor-pointer hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
