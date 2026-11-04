// Meditative procedural audio engine: 432Hz harmonic singing bowl & bell synthesis
class ContemplativeSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;

  // 432Hz based harmonic overtone series
  private bowlHarmonics = [
    216.0, // Sub-octave
    432.0, // Fundamental frequency
    648.0, // 3rd harmonic
    864.0, // 4th harmonic
    1296.0, // 6th harmonic (shimmer)
  ];

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    if (!this.ctx || this.isPlaying) return;
    this.isPlaying = true;

    const strikeBowl = () => {
      if (!this.isPlaying || !this.ctx) return;
      this.playSingingBowl();
      const delay = 4500 + Math.random() * 3500;
      this.intervalId = window.setTimeout(strikeBowl, delay);
    };

    strikeBowl();
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
  }

  // Resonant multi-harmonic singing bowl strike
  private playSingingBowl() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    this.bowlHarmonics.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      // Subtle organic frequency wobble
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 1.5, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq, now);
      filter.Q.setValueAtTime(8, now);

      const amp = 0.05 / (idx + 1);
      const duration = 5.0 + Math.random() * 2.0;

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(amp, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.5);
    });
  }

  // Micro-tactile ceramic tap for UI interactions
  public playTap(pitch = 540) {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.7, now + 0.06);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }
}

export const soundscape = new ContemplativeSoundscape();
