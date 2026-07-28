'use client';

import React, { useState } from 'react';
import { Anchor, Calendar, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenModal: (type?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [showProgramNotice, setShowProgramNotice] = useState(false);

  return (
    <section id="hero" className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-poster-midnight">
      
      {/* Background Video with AutoPlay, Loop, Muted, PlaysInline */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90"
      >
        <source src="/videos/vnback.webm" type="video/webm" />
        <source src="https://valdivianautica.cl/wp-content/uploads/2023/08/VNBACK_converted1.webm" type="video/webm" />
      </video>

      {/* Dark Cobalt Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-poster-midnight/80 via-poster-midnight/60 to-poster-midnight" />

      {/* Hero Content Container - Centered Full Screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center h-full pt-16">
        
        {/* Top Date & Sede Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-poster-cyan/40 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-poster-gold animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-white">
            4 · 5 · 6 DICIEMBRE 2026 | PARQUE SAVAL, VALDIVIA
          </span>
        </div>

        {/* Exact Official Hero SVG Logo (VN26_logo.svg) Scaled Down */}
        <h1 className="mb-6 flex flex-col items-center justify-center">
          <span className="sr-only">Feria Valdivia Náutica 2026 — Capital Náutica del Sur de Chile</span>
          <img
            src="/images/logo-hero-2026.svg"
            alt="Valdivia Náutica 2026"
            className="h-20 sm:h-32 md:h-36 max-w-[85vw] w-auto object-contain drop-shadow-2xl transition-all"
          />
        </h1>

        {/* Slogan */}
        <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-poster-cyan mb-8 max-w-3xl drop-shadow-lg font-serif">
          "El agua es desarrollo, territorio e identidad."
        </p>

        {/* Hero Central CTAs: QUIERO EXPONER + PROGRAMACIÓN (Pronto) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
          <button
            onClick={() => onOpenModal('expositor')}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-xl shadow-2xl shadow-poster-gold/30 hover:bg-poster-goldHover hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
          >
            <Anchor className="w-4 h-4" />
            Quiero Exponer
          </button>

          <button
            onClick={() => setShowProgramNotice(true)}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white glass-panel border-poster-cyan/50 rounded-xl hover:bg-poster-cyan/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-poster-cyan" />
            Programación (Pronto)
          </button>
        </div>

        {/* Program Notice Light Modal */}
        {showProgramNotice && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-md w-full text-center border-poster-cyan/40 shadow-2xl">
              <Calendar className="w-10 h-10 text-poster-gold mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Programación 2026 en Desarrollo
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                El cronograma de charlas del SEM, regatas de remo y campeonatos de pesca se anunciará próximamente. Si deseas recibir las novedades en tu correo, contáctanos.
              </p>
              <button
                onClick={() => setShowProgramNotice(false)}
                className="w-full py-3 px-4 bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-poster-goldHover transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        )}

        {/* Scroll Indicator at Bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Descubrir El Evento</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-poster-cyan" />
        </div>

      </div>
    </section>
  );
}
