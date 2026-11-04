import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Aceternity UI - FocusCards: Interactive image grid with selective focus & dimming
export interface CardData {
  title: string;
  subtitle: string;
  src: string;
  series: string;
  edition: string;
  coordinates: string;
}

export const FocusCards: React.FC<{ cards: CardData[]; onSelect: (card: CardData) => void }> = ({
  cards,
  onSelect,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelect(card)}
          animate={{
            filter: hovered !== null && hovered !== index ? 'blur(4px) grayscale(60%) opacity(0.4)' : 'blur(0px) grayscale(0%) opacity(1)',
            scale: hovered === index ? 1.02 : 1,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#121216] shadow-xl group"
        >
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Series badge */}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#d4af37]">
              {card.series}
            </span>
          </div>

          {/* Bottom metadata */}
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[10px] font-mono tracking-widest text-[#d8c8b0]/70 uppercase block mb-1">
              {card.edition}
            </span>
            <h4 className="font-bodoni-title text-xl text-white font-medium group-hover:text-[#f3e8d3] transition-colors leading-snug">
              {card.title}
            </h4>
            <p className="text-xs font-playfair-quote italic text-neutral-400 mt-1 line-clamp-1">
              {card.subtitle}
            </p>
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span>{card.coordinates}</span>
              <span className="text-[#d4af37] group-hover:translate-x-1 transition-transform">Inspect →</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
