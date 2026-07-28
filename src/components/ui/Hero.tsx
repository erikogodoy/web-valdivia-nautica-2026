'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ArrowRight, Anchor, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (type?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  // Countdown Timer Target: Dec 4, 2026 09:00 AM CLST
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
    <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      {/* Background Water Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyanic-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-naval-700/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Location & Date Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border-cyanic-500/30 mb-8 animate-fade-in">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-cyanic-400 uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-cyanic-400" />
              4 · 5 · 6 DICIEMBRE 2026
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
              <MapPin className="w-4 h-4 text-copper-500" />
              Parque Saval, Valdivia
            </span>
          </div>

          {/* Main Title - Single H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Valdivia <span className="text-river-gradient">Náutica 2026</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-medium text-cyanic-400 mb-6 max-w-3xl">
            Industria, innovación, oficios, deporte y comunidad en torno al agua.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-3xl">
            Tres días donde los ríos Calle-Calle y Cruces se convierten en el centro de Chile. Un encuentro único que reúne astilleros navales, la primera feria de electromovilidad marítima sudamericana (SEM), pesca, remo y el conocimiento de toda una región que nació navegando.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <button
              onClick={() => onOpenModal('expositor')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-naval-950 bg-gradient-to-r from-cyanic-400 to-cyanic-500 rounded-xl shadow-xl shadow-cyanic-500/25 hover:shadow-cyanic-400/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Anchor className="w-5 h-5" />
              Quiero Exponer
            </button>

            <button
              onClick={() => onOpenModal('sponsor')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white glass-panel border-copper-500/40 rounded-xl hover:bg-copper-500/10 hover:border-copper-400 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-copper-500" />
              Quiero Auspiciar
            </button>

            <a
              href="#mundos"
              className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              Explorar el Evento
              <ArrowRight className="w-4 h-4 text-cyanic-400" />
            </a>
          </div>

          {/* Countdown Display */}
          <div className="w-full max-w-2xl glass-panel p-6 rounded-2xl border-white/10 shadow-2xl">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">
              Tiempo para el inicio en Parque Saval
            </p>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-naval-900/60 rounded-xl border border-white/5">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-cyanic-400">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-medium">Días</span>
              </div>
              <div className="p-3 bg-naval-900/60 rounded-xl border border-white/5">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-cyanic-400">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-medium">Horas</span>
              </div>
              <div className="p-3 bg-naval-900/60 rounded-xl border border-white/5">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-cyanic-400">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-medium">Minutos</span>
              </div>
              <div className="p-3 bg-naval-900/60 rounded-xl border border-white/5">
                <span className="block text-2xl sm:text-4xl font-serif font-bold font-mono text-copper-500">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-medium">Segundos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
