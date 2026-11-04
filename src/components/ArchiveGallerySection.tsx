import React, { useState } from 'react';
import { FocusCards, CardData } from './FocusCards';
import { soundscape } from '../utils/audio';
import {
  UivArtworkCard,
  UivSeriesCard,
  UivEditionCard,
  UivPlaqueCard,
  UivProvenanceTooltip,
} from './uiverse-collection';
import { Sparkles, Eye, Shield, Compass } from 'lucide-react';

interface ArchiveGalleryProps {
  onSelectPrint: (card: CardData) => void;
}

export const ArchiveGallerySection: React.FC<ArchiveGalleryProps> = ({ onSelectPrint }) => {
  const archiveCards: CardData[] = [
    {
      title: 'The Solitary Pilgrim',
      subtitle: 'Contemplation at the water’s edge beneath alpine moonlight.',
      src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      series: 'SERIES 01',
      edition: 'Edition of 12 • Hahnemühle Rag',
      coordinates: '35.3606° N / 138.7274° E',
    },
    {
      title: 'Mists Over Arashiyama',
      subtitle: 'Sumi-e ink brush strokes dissolving into bamboo silence.',
      src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      series: 'SERIES 02',
      edition: 'Edition of 8 • Silver Gelatin',
      coordinates: '35.0116° N / 135.6777° E',
    },
    {
      title: 'Echoes of Ancient Stone',
      subtitle: 'Fortified moats and reflections across temporal thresholds.',
      src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      series: 'SERIES 03',
      edition: 'Edition of 15 • Archival Pigment',
      coordinates: '34.6873° N / 135.5262° E',
    },
    {
      title: 'The Inner Journey (Master)',
      subtitle: 'The full surreal composite: human horizon, lake portal & mountain summit.',
      src: '/inner-journey-artwork.jpg',
      series: 'SERIES 04',
      edition: 'Collector Flagship • Unique Proof',
      coordinates: '33.6844° N / 73.0479° E',
    },
  ];

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#060608] border-t border-[#ede5d8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#d4af37] uppercase">
                Curated Exhibition
              </span>
            </div>
            <h2 className="font-bodoni-title text-4xl sm:text-5xl text-white font-medium">
              Series Archive: 01 – 04
            </h2>
            <p className="font-playfair-quote italic text-neutral-400 mt-2 text-base">
              Limited silver gelatin and platinum palladium archival prints, stamped with the red Hanko seal.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400">Hover card to focus piece</span>
            <UivProvenanceTooltip />
          </div>
        </div>

        {/* FocusCards Component (Aceternity UI) */}
        <FocusCards cards={archiveCards} onSelect={onSelectPrint} />

        {/* Uiverse Archival Plaque & Wall Display Cards */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0c0c10] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
              Museum Specification
            </span>
            <h3 className="font-bodoni-title text-2xl sm:text-3xl text-white">
              Archival Standards & Provenance
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Each print is personally supervised by the artist, produced on acid-free 310gsm cotton rag with carbon-pigment inks rated for 200+ years of lightfastness. Accompanied by a tamper-evident holographic certificate.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <UivPlaqueCard />
            <UivEditionCard />
          </div>
        </div>
      </div>
    </section>
  );
};
