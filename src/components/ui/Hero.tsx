'use client';

import React, { useState, useEffect } from 'react';
import { Anchor, Compass, MapPin, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (type?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date('2026-12-04T09:00:00-04:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-poster-midnight pt-28 pb-16">
      {/* Cinematic Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.75] contrast-105"
      >
        <source src="/videos/vnback.webm" type="video/webm" />
        <source src="https://valdivianautica.cl/wp-content/uploads/2023/08/VNBACK_converted1.webm" type="video/webm" />
      </video>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-poster-midnight/90 via-poster-midnight/55 to-poster-midnight" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,20,38,0.7)_100%)]" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Prominent Date & Venue Box in 2 Lines */}
        <div className="flex flex-col items-center justify-center mb-7 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-poster-dark/80 backdrop-blur-md border border-poster-cyan/40 text-white shadow-lg mb-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-poster-gold animate-ping" />
            <span className="text-sm sm:text-base font-archivo font-bold uppercase tracking-[0.2em] text-white">
              4 · 5 · 6 DICIEMBRE 2026
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-slate-200 tracking-wide">
            <MapPin className="w-4 h-4 text-poster-gold" />
            <span>Centro de Ferias Parque Saval · Valdivia, Chile</span>
          </div>
        </div>

        {/* Official Hero SVG Logo */}
        <h1 className="mb-6 flex flex-col items-center justify-center">
          <span className="sr-only">Feria Valdivia Náutica 2026 — Capital Náutica de Chile</span>
          <img
            src="/images/logo-hero-2026.svg"
            alt="Valdivia Náutica 2026"
            className="h-20 sm:h-28 md:h-36 max-w-[90vw] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-all"
          />
        </h1>

        {/* Dynamic Slogan / Hook */}
        <p className="text-slate-200 text-sm sm:text-lg md:text-xl font-sans max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          El punto de encuentro donde la <span className="text-white font-medium">industria naval</span>, la <span className="text-poster-cyan font-medium">electromovilidad</span>, el <span className="text-poster-gold font-medium">deporte fluvial</span> y la <span className="text-white font-medium">comunidad</span> transforman el sur de Chile.
        </p>

        {/* Action CTAs (Clean 2-Button Action Bar) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 w-full max-w-md">
          <button
            onClick={() => onOpenModal('expositor')}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-xl shadow-xl shadow-poster-gold/25 hover:bg-poster-goldHover hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
          >
            <Anchor className="w-4 h-4" />
            Quiero Exponer
          </button>

          <button
            onClick={() => scrollTo('brujula')}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-poster-cyan" />
            Personalizar mi Visita
          </button>
        </div>

        {/* Live Tech Countdown Box */}
        <div className="inline-flex flex-col items-center bg-poster-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-poster-cyan mb-2.5 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cuenta Regresiva para la Gran Apertura</span>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="px-2 sm:px-3">
              <div className="font-archivo text-2xl sm:text-3xl font-bold text-white tracking-tight">{timeLeft.days}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Días</div>
            </div>
            <div className="px-2 sm:px-3 border-l border-white/10">
              <div className="font-archivo text-2xl sm:text-3xl font-bold text-white tracking-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Horas</div>
            </div>
            <div className="px-2 sm:px-3 border-l border-white/10">
              <div className="font-archivo text-2xl sm:text-3xl font-bold text-white tracking-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Min</div>
            </div>
            <div className="px-2 sm:px-3 border-l border-white/10">
              <div className="font-archivo text-2xl sm:text-3xl font-bold text-poster-gold tracking-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Seg</div>
            </div>
          </div>
        </div>

        {/* Bottom Discover Prompt */}
        <button
          onClick={() => scrollTo('manifiesto')}
          className="mt-10 flex items-center gap-2 text-slate-400 hover:text-poster-cyan text-xs uppercase tracking-widest transition-colors group"
        >
          <span>Descubrir la experiencia</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-poster-cyan" />
        </button>

      </div>
    </section>
  );
}
