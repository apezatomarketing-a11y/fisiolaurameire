import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollTop}
        className={`
          p-4 bg-card/80 backdrop-blur-md border border-border text-primary rounded-2xl shadow-xl 
          transition-all duration-500 hover:bg-primary hover:text-white hover:-translate-y-2
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        title="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative p-4 bg-green-500 text-white rounded-2xl shadow-xl shadow-green-500/20 transition-all duration-500 hover:scale-110 hover:-rotate-6 active:scale-95"
        title="Enviar mensagem via WhatsApp"
      >
        <div className="absolute inset-0 bg-green-400 rounded-2xl animate-ping opacity-20 group-hover:hidden" />
        <MessageCircle size={24} className="relative z-10" />
      </button>
    </div>
  );
}
