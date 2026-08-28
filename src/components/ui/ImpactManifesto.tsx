'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, Building2, Flame, Sparkles, ArrowRight } from 'lucide-react';

const STATS = [
  {
    icon: Building2,
    value: '+100',
    label: 'Expositores y Marcas',
    detail: 'Astilleros, pesca, náutica y tecnología',
    accent: 'text-poster-gold',
    border: 'border-poster-gold/30',
  },
  {
    icon: Flame,
    value: '3',
    label: 'Días de Evento',
    detail: '4, 5 y 6 de Diciembre 2026 · Parque Saval',
    accent: 'text-poster-cyan',
    border: 'border-poster-cyan/30',
  },
  {
    icon: Waves,
    value: '7',
    label: 'Mundos Conectados',
    detail: 'El ecosistema completo del agua en el sur de Chile',
    accent: 'text-white',
    border: 'border-white/30',
  },
];

const MUNDOS_AFICHE = [
  { name: 'Electromovilidad Marítima', href: '/sem', tag: 'SEM 2026' },
  { name: 'Pesca y Acuicultura', href: '/expo-pesca', tag: 'Expo Pesca' },
  { name: 'Deporte y Aventura', href: '/deporte-turismo', tag: 'Remo & Kayak' },
  { name: 'Industria Naval y Servicios', href: '/industria-naval', tag: 'Astilleros & ASENAV' },
  { name: 'Comunidad y Educación', href: '/valdivia', tag: 'UACh & Ciudad' },
  { name: 'Turismo y Experiencias', href: '/valdivia', tag: 'Paseos Fluviales' },
  { name: 'Ciencia, Patrimonio e Innovación', href: '/oficios', tag: 'Carpintería de Ribera' },
];

export default function ImpactManifesto() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="manifiesto" className="relative py-20 sm:py-28 bg-gradient-to-b from-poster-midnight via-[#001744] to-poster-midnight text-white overflow-hidden border-y border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-poster-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-archivo font-extrabold text-white tracking-tight leading-[1.1]">
              El agua no es paisaje. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">
                Es desarrollo, territorio e identidad viva.
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center pt-2"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans mb-5">
              <strong className="text-white font-semibold">Valdivia Náutica 2026</strong> reúne a la industria naval, la electromovilidad marítima, el remo olímpico, los oficios tradicionales y la vida familiar en el Parque Saval.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs sm:text-sm font-sans text-poster-gold leading-relaxed italic">
                «Nuestra historia no se construyó dándole la espalda al río, sino navegando sus corrientes.»
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Main Metrics Cards (Clean 3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`p-7 rounded-2xl bg-poster-dark/70 backdrop-blur-md border ${stat.border} hover:scale-[1.02] transition-all duration-300 shadow-xl group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <Icon className={`w-5 h-5 ${stat.accent}`} />
                  </div>
                </div>
                
                <div className={`text-4xl sm:text-5xl font-archivo font-extrabold ${stat.accent} mb-1 tracking-tight`}>
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

        {/* Conceptual Display: Los 7 Mundos del Afiche Oficial */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#002277] via-[#051c55] to-[#002277] border border-poster-cyan/35 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle river line ornament */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-7 pb-6 border-b border-white/15">
            <div>
              <div className="text-xs font-archivo font-bold uppercase tracking-[0.2em] text-poster-gold mb-1">
                Ecosistema Oficial · 7 Mundos en Parque Saval
              </div>
              <h3 className="text-2xl sm:text-3xl font-archivo font-extrabold text-white tracking-tight">
                El universo que da vida a Valdivia Náutica
              </h3>
            </div>
            <button
              onClick={() => scrollTo('mundos')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-poster-cyan hover:text-white transition-colors shrink-0"
            >
              <span>Explorar cada mundo en detalle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 7 Worlds Badge Flow based directly on the official poster */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {MUNDOS_AFICHE.map((mundo, idx) => (
              <Link
                key={idx}
                href={mundo.href}
                className="group px-4 py-2.5 rounded-xl bg-white/10 hover:bg-poster-cyan hover:text-poster-midnight border border-white/15 hover:border-poster-cyan transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-poster-gold group-hover:bg-poster-midnight transition-colors" />
                <span className="text-xs sm:text-sm font-archivo font-bold tracking-wide uppercase">
                  {mundo.name}
                </span>
              </Link>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
