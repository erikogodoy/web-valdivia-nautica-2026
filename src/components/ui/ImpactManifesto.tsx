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
        
        {/* Headline & Narrative Statement (Without Yellow Quote) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
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
            className="lg:col-span-5"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              <strong className="text-white font-semibold">Valdivia Náutica 2026</strong> reúne a la industria naval, la electromovilidad marítima, el remo olímpico, los oficios tradicionales y la vida familiar en el Parque Saval.
            </p>
          </motion.div>
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

        {/* The 7 Official Worlds in a Clean Frameless Line with Icons on Top */}
        <div className="pt-10 border-t border-white/10">
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
