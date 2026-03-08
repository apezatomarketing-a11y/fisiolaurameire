import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
  title?: string;
  autoPlayInterval?: number;
}

export default function Gallery({ images, title = 'Galeria', autoPlayInterval = 2.2 }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval * 1000);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className="w-full">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h3>
      )}

      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl group bg-muted">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <img
              src={images[activeIndex]}
              alt={`Foto ${activeIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={28} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Próxima foto"
        >
          <ChevronRight size={28} />
        </motion.button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer shadow-lg ${
                idx === activeIndex
                  ? 'bg-white w-8 h-3'
                  : 'bg-white/50 w-3 h-3 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeIndex}
          className="absolute top-8 right-8 z-20 px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full text-white font-black text-sm shadow-lg"
        >
          {activeIndex + 1} / {images.length}
        </motion.div>
      </div>

      {/* Thumbnail Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex gap-4 overflow-x-auto pb-4 px-4 md:px-0 md:justify-center flex-wrap"
      >
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDirection(idx > activeIndex ? 1 : -1);
              setActiveIndex(idx);
            }}
            className={`relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-3 transition-all duration-300 cursor-pointer shadow-md ${
              idx === activeIndex ? 'border-blue-600 shadow-lg shadow-blue-600/50 scale-110' : 'border-border hover:border-blue-600/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
            {idx === activeIndex && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 border-3 border-blue-600 rounded-2xl"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
