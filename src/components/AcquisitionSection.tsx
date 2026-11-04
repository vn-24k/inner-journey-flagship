import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundscape } from '../utils/audio';
import {
  UivCollectorNameInput,
  UivCollectorEmailInput,
  UivCollectorPhoneInput,
  UivFramingCheckbox,
  UivCertificateCheckbox,
  UivEtherealLoader,
} from './uiverse-collection';
import { CardData } from './FocusCards';
import { ShieldCheck, Sparkles, Check, X, Award } from 'lucide-react';

interface AcquisitionProps {
  selectedPrint: CardData | null;
  currency: 'USD' | 'EUR' | 'GBP';
}

export const AcquisitionSection: React.FC<AcquisitionProps> = ({ selectedPrint, currency }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [framing, setFraming] = useState(true);
  const [dimensions, setDimensions] = useState<'40x60' | '60x90' | '80x120'>('60x90');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const printTitle = selectedPrint?.title || 'The Inner Journey (Master Proof)';

  const prices = {
    USD: { '40x60': 1850, '60x90': 2800, '80x120': 4200 },
    EUR: { '40x60': 1700, '60x90': 2550, '80x120': 3850 },
    GBP: { '40x60': 1450, '60x90': 2200, '80x120': 3350 },
  };

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  const basePrice = prices[currency][dimensions];
  const framingCost = framing ? (currency === 'USD' ? 450 : currency === 'EUR' ? 400 : 350) : 0;
  const totalPrice = basePrice + framingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundscape.playTap(640);
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setShowCertificate(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#EDE5D8', '#FFFFFF', '#AA8030'],
      });
    }, 900);
  };

  return (
    <section id="acquisition" className="relative py-24 sm:py-32 bg-[#08080a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e12]/90 border border-white/10 shadow-2xl relative backdrop-blur-xl">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-1">
                  Private Acquisitions Desk
                </span>
                <h3 className="font-bodoni-title text-3xl sm:text-4xl text-white">
                  Acquire Archival Edition
                </h3>
                <p className="font-playfair-quote italic text-sm text-neutral-400 mt-2">
                  Inquire for private collector viewing, framing options, and secure courier dispatch.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="font-bodoni-title text-2xl text-white">
                    Acquisition Dossier Opened
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto font-mono">
                    Thank you, <strong>{name || 'Collector'}</strong>. A dedicated gallery associate has reserved the print allocation for {printTitle}.
                  </p>
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-syne font-semibold text-xs tracking-wider uppercase shadow-md"
                  >
                    View Collector Certificate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono flex items-center justify-between">
                    <span className="text-neutral-400">Selected Artwork:</span>
                    <span className="text-[#d4af37] font-semibold">{printTitle}</span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                      Collector Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Lord Julian Sterling"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sterling@curators.art"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                        Telephone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 20 7946 0912"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Print Dimensions (cm)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['40x60', '60x90', '80x120'] as const).map((dim) => (
                        <button
                          key={dim}
                          type="button"
                          onClick={() => {
                            setDimensions(dim);
                            soundscape.playTap(480);
                          }}
                          className={`py-2 px-3 rounded-xl border text-xs font-mono transition-all ${
                            dimensions === dim
                              ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#ede5d8]'
                              : 'border-white/10 bg-white/5 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {dim} cm
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Framing Checkbox */}
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="framing-chk"
                      checked={framing}
                      onChange={(e) => setFraming(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#d4af37]"
                    />
                    <label htmlFor="framing-chk" className="text-xs text-neutral-300 font-mono cursor-pointer">
                      Include Bespoke Carbon Black Float Frame with Museum Tru-Vue Glass (+{currencySymbols[currency]}{framingCost})
                    </label>
                  </div>

                  {/* Total price summary */}
                  <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 uppercase block">
                        Estimated Acquisition Total:
                      </span>
                      <span className="font-bodoni-title font-bold text-2xl text-[#ede5d8]">
                        {currencySymbols[currency]}
                        {totalPrice.toLocaleString()} {currency}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">
                      Free Insured White-Glove Shipping
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-full bg-[#ede5d8] text-black hover:bg-[#d4af37] font-syne font-bold text-xs tracking-widest uppercase transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Allocating Archival Edition...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-neutral-900" />
                        <span>Confirm Acquisition Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Visual Art Specs & Provenance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                Fine-Art Colophon
              </span>
              <h4 className="font-bodoni-title text-2xl text-white">
                The Anatomy of Shadow
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Created using composite photography, analog grain captures, and ink wash textures. The internal portal represents the meditative mind—a tranquil mountain lake untouched by external noise.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Paper:</span>
                  <span>Hahnemühle Photo Rag 308gsm</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Inks:</span>
                  <span>Epson UltraChrome PRO12</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Stamp:</span>
                  <span className="text-[#ff4d4d]">Vermilion Hanko Seal (夢)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collector Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#121218] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,55,0.3)]">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center pb-4 border-b border-dashed border-white/20">
              <Award className="w-10 h-10 text-[#d4af37] mx-auto mb-2" />
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                Visual Archive Certificate of Authenticity
              </span>
              <h3 className="font-bodoni-title text-2xl text-white mt-1">
                {printTitle}
              </h3>
              <p className="text-xs font-playfair-quote italic text-neutral-400">
                Series 04 / Shadow Edition
              </p>
            </div>

            <div className="space-y-2.5 my-6 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-500">Collector:</span>
                <span className="text-[#ede5d8] font-semibold">{name || 'Patron of the Arts'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Format:</span>
                <span className="text-neutral-300">{dimensions} cm (Archival Edition)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Frame:</span>
                <span className="text-neutral-300">{framing ? 'Museum Float Frame Included' : 'Unframed in Tube'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Amount:</span>
                <span className="text-[#d4af37] font-bold">
                  {currencySymbols[currency]}
                  {totalPrice.toLocaleString()} {currency}
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowCertificate(false)}
              className="w-full py-3 rounded-xl bg-[#d4af37] text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#aa8030] transition-all"
            >
              Close Dossier
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
