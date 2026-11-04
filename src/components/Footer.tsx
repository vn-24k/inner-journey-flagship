import React from 'react';
import { soundscape } from '../utils/audio';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050507] border-t border-white/10 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#ede5d8] uppercase block">
              SHADOW / VISUAL ARCHIVE
            </span>
            <span className="font-playfair-quote italic text-xs text-neutral-500 block mt-0.5">
              Series 04 — The Inner Journey
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono tracking-wider text-neutral-400">
            <a href="#artwork" onClick={() => soundscape.playTap(440)} className="hover:text-white transition-colors">
              Artwork
            </a>
            <a href="#gallery" onClick={() => soundscape.playTap(440)} className="hover:text-white transition-colors">
              Archive 01–04
            </a>
            <a href="#acquisition" onClick={() => soundscape.playTap(440)} className="hover:text-white transition-colors">
              Acquisitions
            </a>
          </div>

          <div className="text-right text-xs font-mono text-neutral-500">
            <span>Coordinates: 33.6844° N / 73.0479° E</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} SHADOW / VISUAL ARCHIVE. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Museum Edition Curatorial Guild</span>
            <span>Hanko Seal #04-77</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
