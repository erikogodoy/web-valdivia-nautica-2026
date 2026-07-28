'use client';

import React from 'react';

export default function NarrativeIntro() {
  return (
    <section className="py-28 sm:py-36 md:py-44 bg-[#0025b5] text-white relative z-20 shadow-xl">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        {/* Headline with Google Font Cabin (Natural 700 Weight, No Synthetic Bolding) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-cabin font-bold text-white tracking-tight mb-10 leading-[1.15]">
          El agua no es solo paisaje. <br />
          <span className="text-poster-gold font-bold">Es desarrollo, territorio e identidad.</span>
        </h2>

        {/* Descriptive Paragraph with Google Font Cabin (Natural 400 Weight, Generous Air) */}
        <p className="text-lg sm:text-2xl text-slate-100 leading-relaxed font-cabin font-normal max-w-4xl opacity-95">
          <strong className="font-semibold text-white">Valdivia Náutica 2026</strong> es el principal encuentro del sur de Chile dedicado al universo del agua. No es una exhibición exclusiva de embarcaciones ni un show para pocos: es el punto de reunión donde la industria naval, la descarbonización con electromovilidad (SEM), la pesca deportiva, el remo centenario, la gastronomía ribereña y la ciencia convergen en el Parque Saval para celebrar y proyectar la vida de una ciudad que nació navegando sus ríos.
        </p>

      </div>
    </section>
  );
}
