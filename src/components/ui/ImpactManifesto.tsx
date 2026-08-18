'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Building2, Flame, Users2 } from 'lucide-react';

const STATS = [
  {
    icon: Building2,
    value: '+100',
    label: 'Expositores y Marcas',
    detail: 'Astilleros, pesca y tecnología',
    accent: 'text-poster-gold',
    border: 'border-poster-gold/30',
  },
  {
    icon: Flame,
    value: '3',
    label: 'Días de Evento',
    detail: '4, 5 y 6 de Diciembre 2026',
    accent: 'text-poster-cyan',
    border: 'border-poster-cyan/30',
  },
  {
    icon: Waves,
    value: '7',
    label: 'Mundos Conectados',
    detail: 'Naval, SEM, Pesca, Remo y más',
    accent: 'text-white',
    border: 'border-white/30',
  },
  {
    icon: Users2,
    value: '1',
    label: 'Río que nos Une',
    detail: 'Parque Saval & Calle-Calle',
    accent: 'text-poster-cyan',
    border: 'border-poster-cyan/30',
  },
];

export default function ImpactManifesto() {
  return (
    <section id="manifiesto" className="relative py-24 sm:py-32 bg-gradient-to-b from-poster-midnight via-[#001744] to-poster-midnight text-white overflow-hidden border-y border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-poster-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-poster-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Manifiesto Fluvial</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white tracking-tight leading-[1.12]">
              El agua no es paisaje. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">
                Es desarrollo, territorio e identidad viva.
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans mb-6">
              <strong className="text-white font-semibold">Valdivia Náutica 2026</strong> no es un evento de catálogo ni una exhibición exclusiva: es el punto de encuentro anual donde la ingeniería naval, la descarbonización, el remo olímpico, los oficios patrimoniales y la vida familiar convergen en el Parque Saval.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs sm:text-sm font-mono text-poster-gold leading-normal">
                «Nuestra historia no se construyó dándole la espalda al río, sino navegando sus corrientes.»
              </p>
            </div>
          </motion.div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl bg-poster-dark/70 backdrop-blur-md border ${stat.border} hover:scale-[1.03] transition-all duration-300 shadow-xl group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <Icon className={`w-5 h-5 ${stat.accent}`} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Impacto 2026</span>
                </div>
                
                <div className={`text-4xl sm:text-5xl font-mono font-bold ${stat.accent} mb-1 tracking-tight`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white font-sans mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
