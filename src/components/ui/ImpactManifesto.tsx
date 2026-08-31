'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Building2, 
  Flame, 
  Zap, 
  Fish, 
  Sailboat, 
  Ship, 
  Users, 
  Compass, 
  Hammer 
} from 'lucide-react';

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
    label: 'Mundos del Agua',
    detail: 'El ecosistema fluvial y marítimo del sur',
    accent: 'text-white',
    border: 'border-white/30',
  },
];

const MUNDOS_7 = [
  {
    name: 'Electromovilidad Marítima',
    href: '/sem',
    icon: Zap,
    color: 'text-poster-cyan',
  },
  {
    name: 'Pesca y Acuicultura',
    href: '/expo-pesca',
    icon: Fish,
    color: 'text-poster-gold',
  },
  {
    name: 'Deporte y Aventura',
    href: '/deporte-turismo',
    icon: Sailboat,
    color: 'text-poster-cyan',
  },
  {
    name: 'Industria Naval y Servicios',
    href: '/industria-naval',
    icon: Ship,
    color: 'text-white',
  },
  {
    name: 'Comunidad y Educación',
    href: '/valdivia',
    icon: Users,
    color: 'text-poster-cyan',
  },
  {
    name: 'Turismo y Experiencias',
    href: '/valdivia',
    icon: Compass,
    color: 'text-poster-gold',
  },
  {
    name: 'Ciencia, Patrimonio e Innovación',
    href: '/oficios',
    icon: Hammer,
    color: 'text-white',
  },
];

export default function ImpactManifesto() {
  return (
    <section id="manifiesto" className="relative py-20 sm:py-28 bg-gradient-to-b from-poster-midnight via-[#001744] to-poster-midnight text-white overflow-hidden border-y border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-poster-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline & Narrative Statement Stacked */}
        <div className="max-w-5xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-archivo font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            El agua no es paisaje. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">
              Es desarrollo, territorio e identidad viva.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed font-sans max-w-4xl font-normal"
          >
            <strong className="text-white font-semibold">Valdivia Náutica 2026</strong> es el gran encuentro del sur de Chile donde el río se transforma en el motor del futuro. Durante tres días en el Parque Saval, convergen la vanguardia de los astilleros navales, la revolución de la electromovilidad marítima (SEM), la pesca deportiva, el remo histórico y los oficios tradicionales; conectando a la industria, la ciencia, la gastronomía y la comunidad en una sola cuenca viva.
          </motion.p>
        </div>

        {/* 3 Main Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
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

        {/* Full-Width Panoramic Photography Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[440px] rounded-3xl overflow-hidden relative mb-16 shadow-2xl border border-white/15 group"
        >
          <img
            src="/images/valdivia-calle-calle-rio.jpg"
            alt="Río Calle-Calle al amanecer con embarcaciones y remeros en Valdivia"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-poster-midnight/80 via-transparent to-black/20 pointer-events-none" />
          
          <div className="absolute bottom-5 left-6 sm:bottom-6 sm:left-8 flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-archivo font-bold uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              Río Calle-Calle · Valdivia, Chile
            </span>
          </div>
        </motion.div>

        {/* The 7 Official Worlds in a Clean Frameless Line with Icons on Top */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-archivo font-extrabold text-white uppercase tracking-wider">
              Los 7 Mundos del Encuentro
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
              Los ejes que dan vida a Valdivia Náutica 2026 en Parque Saval
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-4 items-start">
            {MUNDOS_7.map((mundo, idx) => {
              const Icon = mundo.icon;
              return (
                <Link
                  key={idx}
                  href={mundo.href}
                  className="group flex flex-col items-center text-center p-2 transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* Clean Icon with Glow on Hover (No Heavy Box Frame) */}
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-2xl bg-white/5 group-hover:bg-poster-cyan/15 transition-all duration-200">
                    <Icon className={`w-6 h-6 ${mundo.color} group-hover:scale-110 transition-transform`} />
                  </div>

                  {/* Clean Title Below */}
                  <span className="text-xs sm:text-[13px] font-archivo font-bold uppercase tracking-wide text-slate-200 group-hover:text-poster-cyan transition-colors leading-snug">
                    {mundo.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
