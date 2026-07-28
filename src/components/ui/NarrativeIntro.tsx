'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NarrativeIntro() {
  return (
    <section className="py-28 sm:py-36 md:py-44 bg-[#0025b5] text-white relative z-20 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Animated Headline with Google Font Syne */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl font-syne font-bold text-white tracking-tight mb-8 leading-[1.15] max-w-5xl"
        >
          El agua no es solo paisaje. <br />
          <span className="text-poster-gold font-bold">Es desarrollo, territorio e identidad.</span>
        </motion.h2>

        {/* Animated Paragraph with Standard Body Font (Inter) */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-2xl text-slate-100 leading-relaxed font-sans font-normal max-w-5xl opacity-95"
        >
          <strong className="font-bold text-white">Valdivia Náutica 2026</strong> es el principal encuentro del sur de Chile dedicado al universo del agua. No es una exhibición exclusiva de embarcaciones ni un show para pocos: es el punto de reunión donde la industria naval, la descarbonización con electromovilidad (SEM), la pesca deportiva, el remo centenario, la gastronomía ribereña y la ciencia convergen en el Parque Saval para celebrar y proyectar la vida de una ciudad que nació navegando sus ríos.
        </motion.p>

      </div>
    </section>
  );
}
