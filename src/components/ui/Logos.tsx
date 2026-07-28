'use client';

import React from 'react';

/**
 * Header Logo matching official image2.png:
 * Calle-Calle Arch Bridge + Sailboat graphic mark on left + FERIA VALDIVIA NĀUTICA text.
 */
export function HeaderLogo({ className = 'h-10' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Bridge Arch & Water Line */}
        <path
          d="M 5 65 C 25 45, 65 45, 85 65 C 95 70, 5 70, 5 65 Z"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 12 62 C 30 52, 60 52, 78 62"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        
        {/* Sailboat Hull & Main Sail */}
        <path d="M 28 60 L 68 60 C 62 68, 34 68, 28 60 Z" fill="white" />
        <path d="M 46 12 L 46 56 L 76 56 C 68 40, 56 22, 46 12 Z" fill="white" />
        <path d="M 43 20 L 43 56 L 24 56 L 43 20 Z" fill="white" opacity="0.8" />
        <path d="M 46 8 L 52 14 L 46 14 Z" fill="white" />

        {/* Vertical FERIA text */}
        <text
          x="95"
          y="28"
          fill="white"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="4"
          transform="rotate(-90 95 28)"
          opacity="0.8"
        >
          FERIA
        </text>

        {/* VALDIVIA NĀUTICA text */}
        <text
          x="115"
          y="34"
          fill="white"
          fontSize="24"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          letterSpacing="2"
        >
          VALDIVIA
        </text>
        <text
          x="115"
          y="64"
          fill="white"
          fontSize="28"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="3"
        >
          NĀUTICA
        </text>
      </svg>
    </div>
  );
}

/**
 * Hero Logo Lockup 2026 matching official image1.png:
 * Vertical FERIA + VALDIVIA NĀUTICA in crisp white + Massive Warm Gold 2026 on right.
 */
export function HeroLogo2026({ className = 'h-24 sm:h-36' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 520 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-2xl"
      >
        {/* Left Block: Vertical FERIA + VALDIVIA NĀUTICA */}
        <g>
          {/* Vertical FERIA */}
          <text
            x="20"
            y="65"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="6"
            transform="rotate(-90 20 65)"
            opacity="0.7"
          >
            FERIA
          </text>

          {/* VALDIVIA in clean white */}
          <text
            x="45"
            y="60"
            fill="white"
            fontSize="46"
            fontWeight="300"
            fontFamily="system-ui, sans-serif"
            letterSpacing="6"
            opacity="0.95"
          >
            VALDIVIA
          </text>

          {/* NĀUTICA in bold white */}
          <text
            x="45"
            y="118"
            fill="white"
            fontSize="54"
            fontWeight="900"
            fontFamily="system-ui, sans-serif"
            letterSpacing="4"
          >
            NĀUTICA
          </text>
        </g>

        {/* Right Block: Massive Warm Gold 2026 (Matching #FFB800) */}
        <text
          x="280"
          y="118"
          fill="#FFB800"
          fontSize="130"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="-4"
        >
          2026
        </text>
      </svg>
    </div>
  );
}
