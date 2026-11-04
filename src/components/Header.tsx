import React, { useState } from 'react';
import { soundscape } from '../utils/audio';
import { Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import {
  UivContrastToggle,
  UivSeriesToggle,
  UivCurrencyToggle,
} from './uiverse-collection';

interface HeaderProps {
  onInquireClick: () => void;
  currency: 'USD' | 'EUR' | 'GBP';
  onCurrencyChange: (c: 'USD' | 'EUR' | 'GBP') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onInquireClick,
  currency,
  onCurrencyChange,
}) => {
  const [soundActive, setSoundActive] = useState(false);

  const toggleSound = () => {
    const active = soundscape.toggle();
    setSoundActive(active);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-[#ede5d8]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Left matching reference 1:1 */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={() => soundscape.playTap(432)}
            className="flex items-center gap-2 group"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-[#ede5d8] uppercase group-hover:text-[#d4af37] transition-colors font-medium">
              SHADOW / VISUAL ARCHIVE
            </span>
          </a>
        </div>

        {/* Center Curatorial Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          <a
            href="#artwork"
            onClick={() => soundscape.playTap(500)}
            className="hover:text-[#ede5d8] transition-colors"
          >
            Masterpiece
          </a>
          <a
            href="#gallery"
            onClick={() => soundscape.playTap(520)}
            className="hover:text-[#ede5d8] transition-colors"
          >
            Series 01–04
          </a>
          <a
            href="#acquisition"
            onClick={() => soundscape.playTap(540)}
            className="hover:text-[#ede5d8] transition-colors"
          >
            Acquisitions
          </a>
        </nav>

        {/* Right Tools & Series 04 Marker matching reference 1:1 */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Soundscape Ambient Bowl Audio */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
              soundActive
                ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
            }`}
            title="Singing Bowl Soundscape (432Hz)"
          >
            {soundActive ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline font-mono text-[10px]">432Hz</span>
          </button>

          {/* Series 04 / The Journey Label matching reference */}
          <div className="text-right hidden sm:block">
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#d4af37] uppercase block font-semibold">
              SERIES 04
            </span>
            <span className="font-playfair-quote italic text-xs text-neutral-400 block -mt-0.5">
              THE JOURNEY
            </span>
          </div>

          {/* Acquisition Pill Button */}
          <button
            onClick={() => {
              soundscape.playTap(600);
              onInquireClick();
            }}
            className="px-4 sm:px-6 py-2 rounded-full bg-[#ede5d8] text-black hover:bg-[#d4af37] font-syne font-semibold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-sm"
          >
            Acquire Print
          </button>
        </div>
      </div>
    </header>
  );
};
