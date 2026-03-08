import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollTop}
            className="p-4 bg-background border-2 border-blue-600/20 text-blue-600 rounded-2xl shadow-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-500 group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        {/* Pulse effect */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-500 rounded-full blur-xl"
        />
        
        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="relative p-5 bg-green-500 text-white rounded-2xl shadow-2xl cursor-pointer hover:bg-green-600 transition-all duration-500 group overflow-hidden"
          aria-label="Falar no WhatsApp"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <MessageCircle size={32} className="fill-white/20" />
          </motion.div>
          
          {/* Shine effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            className="absolute top-0 left-0 w-1/2 h-full bg-white/20 skew-x-12"
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
