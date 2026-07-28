'use client';

import React from 'react';

export default function NarrativeIntro() {
  return (
    <section className="py-20 bg-[#0025b5] text-white relative z-20 shadow-xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
        
        {/* Modern Sans-Serif Left-Aligned Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold text-white tracking-tight mb-8 leading-tight">
          El agua no es solo paisaje. <br />
          <span className="text-poster-gold">Es desarrollo, territorio e identidad.</span>
        </h2>

        {/* Clean Left-Aligned Paragraph */}
        <p className="text-base sm:text-xl text-slate-100 leading-relaxed font-sans font-normal max-w-4xl">
          <strong className="font-bold text-white">Valdivia Náutica 2026</strong> es el principal encuentro del sur de Chile dedicado al universo del agua. No es una exhibición exclusiva de embarcaciones ni un show para pocos: es el punto de reunión donde la industria naval, la descarbonización con electromovilidad (SEM), la pesca deportiva, el remo centenario, la gastronomía ribereña y la ciencia convergen en el Parque Saval para celebrar y proyectar la vida de una ciudad que nació navegando sus ríos.
        </p>

      </div>
    </section>
  );
}
