import React, { useEffect, useState } from 'react';

// React Bits - LetterGlitch for archival codes and coordinates
interface LetterGlitchProps {
  text: string;
  className?: string;
}

export const LetterGlitch: React.FC<LetterGlitchProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '0123456789ABCDEF/°N*E✦';

  const triggerGlitch = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === ' ' || char === '/' || char === '°') return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <span
      onMouseEnter={triggerGlitch}
      className={`inline-block cursor-crosshair font-mono-coord tracking-wider transition-colors hover:text-[#d4af37] ${className}`}
    >
      {displayText}
    </span>
  );
};
