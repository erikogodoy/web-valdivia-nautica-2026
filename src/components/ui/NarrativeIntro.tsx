'use client';

import React from 'react';
import { Waves, Sparkles } from 'lucide-react';

export default function NarrativeIntro() {
  return (
    <section className="py-16 bg-gradient-to-b from-poster-midnight via-poster-dark to-poster-midnight border-y border-white/5 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-poster-cyan/10 border border-poster-cyan/30 text-poster-cyan text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4 text-poster-cyan" />
          La Esencia del Evento
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6 leading-tight">
          El agua no es solo paisaje. <br />
          <span className="text-poster-river">Es desarrollo, territorio e identidad.</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-sans font-light">
          <strong className="font-semibold text-white">Valdivia Náutica 2026</strong> es el principal encuentro del sur de Chile dedicado al universo del agua. No es una exhibición exclusiva de embarcaciones ni un show para pocos: es el punto de reunión donde la industria naval, la descarbonización con electromovilidad (SEM), la pesca deportiva, el remo centenario, la gastronomía ribereña y la ciencia convergen en el Parque Saval para celebrar y proyectar la vida de una ciudad que nació navegando sus ríos.
        </p>

      </div>
    </section>
  );
}
