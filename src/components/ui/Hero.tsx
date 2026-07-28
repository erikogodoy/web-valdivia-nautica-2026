'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Anchor, Sparkles, ArrowRight, Zap, Fish, Sailboat, Ship, Waves } from 'lucide-react';

interface HeroProps {
  onOpenModal: (type?: string) => void;
}

const MOTIFS = [
  { icon: Zap, label: 'Electromovilidad Marítima', color: 'text-poster-cyan border-poster-cyan/30' },
  { icon: Fish, label: 'Pesca & Acuicultura', color: 'text-poster-gold border-poster-gold/30' },
  { icon: Sailboat, label: 'Deporte & Aventura (Remo)', color: 'text-white border-white/30' },
  { icon: Ship, label: 'Industria Naval & ASENAV', color: 'text-poster-cyan border-poster-cyan/30' },
  { icon: Waves, label: 'Ciencia, Patrimonio e Innovación', color: 'text-poster-gold border-poster-gold/30' },
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-12-04T09:00:00-04:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-poster-midnight">
      
      {/* Sinuous River Background Flow Graphic (Inspired by Poster S-Curve) */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path
            d="M -100 -50 C 400 200, 1000 100, 700 450 C 400 800, 1100 700, 1600 950"
            stroke="url(#riverGradient)"
            strokeWidth="120"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0D3692" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-poster-cyan/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-poster-gold animate-ping" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              FERIA INTERNACIONAL DEL SUR DE CHILE
            </span>
          </div>

          {/* Typography Exactly Matched to Poster Header */}
          <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <div className="text-left">
              <span className="block text-xs uppercase tracking-[0.4em] text-poster-cyan font-bold">
                FERIA
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans leading-none">
                VALDIVIA <br className="hidden sm:block" />
                <span className="text-white">NĀUTICA</span>
              </h1>
            </div>
            
            {/* Massive Poster Gold 2026 */}
            <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-poster-gold font-sans leading-none drop-shadow-2xl">
              2026
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-semibold text-poster-cyan mb-6 max-w-3xl">
            El agua es desarrollo, territorio e identidad.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-3xl">
            Una feria abierta a toda la comunidad que reúne a la industria naval, la electromovilidad marítima (SEM), la pesca deportiva, el remo tradicional, el turismo y los oficios de ribera en el Parque Saval.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <button
              onClick={() => onOpenModal('expositor')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-xl shadow-xl shadow-poster-gold/20 hover:bg-poster-goldHover hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Anchor className="w-4 h-4" />
              Quiero Exponer (Stands)
            </button>

            <button
              onClick={() => onOpenModal('sponsor')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white glass-panel border-poster-cyan/40 rounded-xl hover:bg-poster-cyan/10 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-poster-cyan" />
              Quiero Auspiciar
            </button>

            <a
              href="#dimensiones"
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              Conoce el Programa
              <ArrowRight className="w-4 h-4 text-poster-cyan" />
            </a>
          </div>

          {/* Motifs Grid Bar (Directly from Poster Badges) */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-16">
            {MOTIFS.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel p-3.5 rounded-xl border flex flex-col items-center justify-center text-center ${m.color} hover:bg-poster-dark/80 transition-colors`}
                >
                  <Icon className="w-5 h-5 mb-2" />
                  <span className="text-[11px] font-semibold text-slate-200 leading-tight">
                    {m.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Event Date & Location Banner (Bottom Bar of Poster) */}
          <div className="w-full max-w-4xl glass-panel p-6 sm:p-8 rounded-2xl border-poster-cyan/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="block text-3xl sm:text-5xl font-bold text-white tracking-tight">
                4 · 5 · 6
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-poster-cyan">
                DICIEMBRE 2026
              </span>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10" />

            <div className="text-center md:text-left">
              <span className="block text-sm font-bold text-white uppercase tracking-wider">
                CENTRO FERIAS PARQUE SAVAL
              </span>
              <span className="text-xs text-poster-gold font-medium">
                ISLA TEJA, VALDIVIA, CHILE
              </span>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10" />

            {/* Countdown Compact */}
            <div className="flex gap-3 text-center font-mono text-sm">
              <div className="p-2 bg-poster-midnight/80 rounded-lg border border-white/10 min-w-[50px]">
                <span className="block font-bold text-poster-cyan">{timeLeft.days}</span>
                <span className="text-[9px] text-slate-400 uppercase">Días</span>
              </div>
              <div className="p-2 bg-poster-midnight/80 rounded-lg border border-white/10 min-w-[50px]">
                <span className="block font-bold text-poster-cyan">{timeLeft.hours}</span>
                <span className="text-[9px] text-slate-400 uppercase">Horas</span>
              </div>
              <div className="p-2 bg-poster-midnight/80 rounded-lg border border-white/10 min-w-[50px]">
                <span className="block font-bold text-poster-gold">{timeLeft.minutes}</span>
                <span className="text-[9px] text-slate-400 uppercase">Min</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
