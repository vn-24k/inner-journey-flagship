import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DeformationCanvas } from './DeformationCanvas';
import { LetterGlitch } from './LetterGlitch';
import { soundscape } from '../utils/audio';
import {
  UivProvenanceTooltip,
  UivCoordTooltip,
  UivZenOrbitLoader,
} from './uiverse-collection';
import { Compass, Sparkles, Maximize2, RefreshCw } from 'lucide-react';

interface HeroCompositionProps {
  onInquireClick: () => void;
}

export const HeroComposition: React.FC<HeroCompositionProps> = ({ onInquireClick }) => {
  const [interactiveMode, setInteractiveMode] = useState(true);

  return (
    <section id="artwork" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Main 3-Column Editorial Grid matching reference 1:1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Quote, Big Title, Pillars & Coordinates        */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-10 text-left order-2 lg:order-1">
            {/* Upper left quote matching reference 1:1 */}
            <div className="max-w-xs">
              <p className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#ede5d8]/70 leading-relaxed">
                NOT ALL JOURNEYS ARE ABOUT DISTANCE. SOME ARE ABOUT FINDING YOURSELF.
              </p>
            </div>

            {/* Monumental Title matching reference 1:1 */}
            <div className="py-2">
              <h1 className="font-bodoni-title text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] leading-[0.88] text-[#ede5d8] uppercase font-bold tracking-tight">
                <span className="block text-white">THE</span>
                <span className="block text-white/95">INNER</span>
                <span className="block gold-foil">JOURNEY</span>
              </h1>

              {/* Sub-quote below title matching reference 1:1 */}
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#d8c8b0]/75 uppercase mt-6">
                SOME PATHS LEAD YOU BACK TO YOURSELF.
              </p>
            </div>

            {/* Left Pillars List matching reference 1:1 */}
            <div className="space-y-2 pt-4">
              {['SILENCE', 'REFLECTION', 'GROWTH', 'FREEDOM', 'YOU'].map((pillar, idx) => (
                <div
                  key={pillar}
                  onClick={() => soundscape.playTap(400 + idx * 40)}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40 group-hover:bg-[#d4af37] transition-all" />
                  <span className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#ede5d8]/60 group-hover:text-white transition-colors">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            {/* Star Compass & Archival Coordinates matching reference 1:1 */}
            <div className="pt-8 border-t border-[#ede5d8]/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#d4af37] text-lg select-none">✦</span>
                <div className="font-mono text-xs text-[#d8c8b0]/80">
                  <LetterGlitch text="33.6844° N / 73.0479° E" />
                </div>
                <UivCoordTooltip />
              </div>

              <div className="text-[10px] font-mono tracking-widest text-[#ede5d8]/40 uppercase">
                VISUAL ARCHIVE • SERIES 04
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER COLUMN: Central Photomontage with Three.js Shader     */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[2/3] rounded-3xl overflow-hidden border border-[#ede5d8]/15 sumi-ink-shadow bg-[#0f0f14] group">
              {/* Three.js Real WebGL Fluid Deformation Canvas */}
              {interactiveMode ? (
                <DeformationCanvas
                  imageSrc="/inner-journey-artwork.jpg"
                  className="w-full h-full"
                />
              ) : (
                <img
                  src="/inner-journey-artwork.jpg"
                  alt="The Inner Journey - Series 04 Artwork"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Interactive HUD badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#d4af37] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Interactive Fluid Canvas
                </span>
                <UivZenOrbitLoader />
              </div>

              {/* Mode toggle button in corner */}
              <div className="absolute bottom-4 right-4 z-20">
                <button
                  onClick={() => {
                    setInteractiveMode(!interactiveMode);
                    soundscape.playTap(520);
                  }}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-[#ede5d8] transition-all text-xs flex items-center gap-1.5"
                  title="Toggle Shader Displacement Mode"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="font-mono text-[9px] uppercase">Fluid / Clean</span>
                </button>
              </div>
            </div>

            <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mt-4 text-center">
              Drag mouse over figure to invoke chromatic fluid displacement
            </p>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Vertical Quote, Red Hanko Seal, Inset Picture */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-12 text-left order-3">
            {/* Top Right Series Archive Identifier */}
            <div className="hidden lg:block text-right">
              <span className="font-mono text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
                SERIES 04
              </span>
              <span className="font-playfair-quote italic text-sm text-neutral-400 block">
                THE JOURNEY
              </span>
            </div>

            {/* Vertical Editorial Quote matching reference 1:1 */}
            <div className="max-w-xs pl-0 lg:pl-6 border-l-0 lg:border-l border-[#ede5d8]/15 space-y-6">
              <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase text-[#ede5d8]/80 leading-relaxed font-light">
                IT&apos;S NOT THE PLACE THAT CHANGES YOU. IT&apos;S WHAT YOU BECOME ALONG THE WAY.
              </p>

              {/* Traditional Red Hanko Seal (夢 - Dream) matching reference 1:1 */}
              <div className="pt-2 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-lg border-2 border-[#a92525] bg-[#a92525]/15 flex items-center justify-center text-[#ff4d4d] shadow-[0_0_20px_rgba(169,37,37,0.3)] select-none"
                  title="Traditional Hanko Seal: 夢 (Dream / Transcendence)"
                >
                  <span className="font-hanko font-bold text-2xl">夢</span>
                </div>
                <div className="font-mono text-[10px] text-neutral-400">
                  <span className="block text-[#ede5d8]">ORIGINAL PRINT</span>
                  <span className="block text-neutral-500">SEAL OF AUTHENTICITY</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Inset Miniature Landscape matching reference 1:1 */}
            <div className="space-y-3 pt-6 border-t border-[#ede5d8]/10">
              <div className="w-24 sm:w-28 aspect-[3/4] rounded-lg overflow-hidden border border-[#ede5d8]/20 shadow-lg relative group">
                <img
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80"
                  alt="Misty Mountain Dawn Inset"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="text-[10px] font-mono text-neutral-400">
                <span className="block text-[#d8c8b0]">PLATE 04-B</span>
                <span className="block text-neutral-500">Misty Summit Inset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
