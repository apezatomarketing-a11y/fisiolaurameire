import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, ChevronDown, Home, User, Utensils, Pill, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useTheme } from '@/_core/hooks/useTheme';
import { NUTRITION_SUBMENU, CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

const NAVIGATION_ITEMS = [
  { label: 'Início', href: '/', icon: Home },
  { label: 'Sobre Mim', href: '/about', icon: User },
  { label: 'Nutrição', href: '#', icon: Utensils, hasSubmenu: true },
  { label: 'Mounjaro', href: '/mounjaro', icon: Pill },
  { label: 'Serviços', href: '/services', icon: Briefcase },
  { label: 'Contato', href: '/contact', icon: Mail },
];

export default function SidebarMenu() {
  const [location] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  const navItemClasses = (href: string) => `
    w-full px-4 py-3 flex items-center gap-3 transition-all duration-300 group
    ${isActive(href)
      ? 'bg-primary/20 text-primary'
      : 'text-muted-foreground hover:bg-primary/10 hover:text-primary hover:pl-6'}
  `;

  const iconClasses = (href: string) => `
    flex-shrink-0 transition-transform duration-300 group-hover:scale-110
    ${isActive(href) ? 'scale-110' : ''}
  `;

  const glassClasses = "backdrop-blur-md bg-card/70 border-border shadow-xl";

  return (
    <>
      {/* Mobile Header */}
      <header className={`fixed top-0 left-0 right-0 h-16 ${glassClasses} border-b z-50 flex items-center justify-between px-4 md:hidden`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-base shadow-lg animate-pulse-slow">
            SF
          </div>
          <span className="font-bold text-foreground">Susi Farias</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`
        fixed top-16 left-0 right-0 bottom-0 ${glassClasses} border-t z-50 md:hidden
        transition-transform duration-300 ease-in-out overflow-y-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <nav className="p-4 space-y-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isNutrition = item.hasSubmenu;

            return (
              <div key={item.label} className="space-y-1">
                {isNutrition ? (
                  <>
                    <button
                      onClick={() => setIsNutritionOpen(!isNutritionOpen)}
                      className={navItemClasses('/nutrition')}
                    >
                      <Icon size={20} className={iconClasses('/nutrition')} />
                      <span className="text-base font-medium flex-1 text-left">{item.label}</span>
                      <ChevronDown size={18} className={`transition-transform duration-200 ${isNutritionOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isNutritionOpen && (
                      <div className="ml-6 border-l-2 border-primary/30 space-y-1 py-1">
                        {NUTRITION_SUBMENU.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className={`w-full px-6 py-3 text-sm flex items-center gap-3 transition-all duration-200 ${
                              isActive(subitem.href) ? 'text-secondary font-bold' : 'text-muted-foreground hover:text-secondary'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.href} className={navItemClasses(item.href)}>
                    <Icon size={20} className={iconClasses(item.href)} />
                    <span className="text-base font-medium">{item.label}</span>
                  </a>
                )}
              </div>
            );
          })}
          
          <div className="pt-6 grid grid-cols-2 gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all active:scale-95"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
              <span className="text-sm font-medium">{theme === 'dark' ? 'Claro' : 'Escuro'}</span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-all active:scale-95"
            >
              <MessageCircle size={20} className="text-green-500" />
              <span className="text-sm font-medium">WhatsApp</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen z-[100] hidden md:flex flex-col
          ${glassClasses} border-r transition-all duration-500 ease-in-out
          ${isExpanded ? 'w-64' : 'w-20'}
        `}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => {
          setIsExpanded(false);
          setIsNutritionOpen(false);
        }}
      >
        {/* Logo */}
        <div className="p-4 border-b border-border/50 flex items-center justify-center overflow-hidden h-20">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-300">
            SF
          </div>
          {isExpanded && (
            <div className="ml-4 flex-1 animate-in fade-in slide-in-from-left-4 duration-300">
              <p className="text-base font-bold text-foreground truncate">Susi Farias</p>
              <p className="text-xs text-muted-foreground truncate font-medium">Nutricionista</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isNutrition = item.hasSubmenu;

            return (
              <div key={item.label} className="relative">
                {isNutrition ? (
                  <>
                    <button
                      onClick={() => setIsNutritionOpen(!isNutritionOpen)}
                      className={`
                        w-full p-3 flex items-center gap-4 rounded-xl transition-all duration-300 group
                        ${isActive('/nutrition') ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}
                        ${!isExpanded && 'justify-center'}
                      `}
                    >
                      <Icon size={22} className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      {isExpanded && (
                        <>
                          <span className="text-sm font-semibold flex-1 text-left">{item.label}</span>
                          <ChevronDown size={16} className={`transition-transform duration-300 ${isNutritionOpen ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                    {isNutritionOpen && isExpanded && (
                      <div className="mt-1 ml-4 border-l-2 border-primary/20 space-y-1 py-1 animate-in slide-in-from-top-2 duration-200">
                        {NUTRITION_SUBMENU.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className={`
                              w-full px-6 py-2 text-xs font-medium flex items-center gap-3 transition-all duration-200
                              ${isActive(subitem.href) ? 'text-secondary font-bold' : 'text-muted-foreground hover:text-secondary hover:pl-8'}
                            `}
                          >
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full opacity-50" />
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`
                      w-full p-3 flex items-center gap-4 rounded-xl transition-all duration-300 group
                      ${isActive(item.href) ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}
                      ${!isExpanded && 'justify-center'}
                    `}
                  >
                    <Icon size={22} className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    {isExpanded && <span className="text-sm font-semibold">{item.label}</span>}
                  </a>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 space-y-3 border-t border-border/50">
          <button
            onClick={toggleTheme}
            className={`
              w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300
              bg-primary/5 hover:bg-primary/15 active:scale-95
              ${!isExpanded && 'justify-center'}
            `}
            title={`Modo ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
            {isExpanded && <span className="text-xs font-bold">{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>}
          </button>

          <button
            onClick={handleWhatsAppClick}
            className={`
              w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300
              bg-green-500/10 hover:bg-green-500/20 active:scale-95
              ${!isExpanded && 'justify-center'}
            `}
            title="WhatsApp"
          >
            <MessageCircle size={20} className="text-green-500" />
            {isExpanded && <span className="text-xs font-bold text-green-600 dark:text-green-400">WhatsApp</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
