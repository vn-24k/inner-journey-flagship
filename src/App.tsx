import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroComposition } from './components/HeroComposition';
import { ArchiveGallerySection } from './components/ArchiveGallerySection';
import { AcquisitionSection } from './components/AcquisitionSection';
import { Footer } from './components/Footer';
import { NoiseGrain } from './components/NoiseGrain';
import { CardData } from './components/FocusCards';
import { soundscape } from './utils/audio';
import {
  UivGalleryBtn,
  UivPrintBtn,
  UivCatalogBtn,
  UivSeriesToggle,
  UivCurrencyToggle,
  UivSubtleSpinLoader,
} from './components/uiverse-collection';

export function App() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [selectedPrint, setSelectedPrint] = useState<CardData | null>(null);

  const scrollToAcquisition = (card?: CardData) => {
    if (card) setSelectedPrint(card);
    soundscape.playTap(580);
    const element = document.getElementById('acquisition');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#ede5d8] selection:bg-[#d4af37]/30 selection:text-[#fff8eb] font-syne antialiased overflow-x-hidden">
      {/* 35mm Analog Film Grain Overlay */}
      <NoiseGrain />

      {/* Main Exhibition Header */}
      <Header
        onInquireClick={() => scrollToAcquisition()}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      <main>
        {/* Central Masterpiece Composition matching be2c263b-f446-4b44-b956-9e347200b624.jpg 1:1 */}
        <HeroComposition onInquireClick={() => scrollToAcquisition()} />

        {/* Curatorial Toolset Strip with Uiverse interactive elements */}
        <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#111116] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#d4af37] tracking-widest uppercase">
                Series 04 Viewing Mode:
              </span>
              <UivSeriesToggle />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">Currency:</span>
                {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      soundscape.playTap(440);
                    }}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      currency === curr ? 'bg-[#d4af37] text-black font-bold' : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <UivCatalogBtn onClick={() => alert('Downloading Series 04 Curatorial Monograph (PDF)...')} />
                <UivGalleryBtn onClick={() => {
                  const el = document.getElementById('gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} />
              </div>
            </div>
          </div>
        </section>

        {/* Series 01 – 04 Archive Gallery */}
        <ArchiveGallerySection onSelectPrint={(card) => scrollToAcquisition(card)} />

        {/* Print Acquisitions Desk & Collector Verification */}
        <AcquisitionSection selectedPrint={selectedPrint} currency={currency} />
      </main>

      {/* Archive Colophon & Footer */}
      <Footer />
    </div>
  );
}

export default App;
