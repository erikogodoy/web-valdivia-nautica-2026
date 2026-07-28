'use client';

import React from 'react';
import Link from 'next/link';
import { Fish, Zap, Ship, Sailboat, Compass, Hammer, ArrowRight } from 'lucide-react';

const INTERESTS = [
  {
    id: 'pesca',
    href: '/expo-pesca',
    icon: Fish,
    tag: 'EXPO PESCA 2026',
    title: '¿Te apasiona la Pesca?',
    description: 'Campeonatos de orilla y embarcada, equipamiento, marcas, marcas de señuelos y náutica deportiva menor.',
    color: 'border-poster-gold/40 hover:border-poster-gold text-poster-gold',
    btnBg: 'bg-poster-gold text-poster-midnight hover:bg-poster-goldHover',
  },
  {
    id: 'sem',
    href: '/sem',
    icon: Zap,
    tag: 'SEM 2026',
    title: '¿Buscas Innovación & Electromovilidad?',
    description: 'Salón de Electromovilidad Marítima, pruebas del catamarán solar y conferencias de descarbonización UACh/THEMS.',
    color: 'border-poster-cyan/40 hover:border-poster-cyan text-poster-cyan',
    btnBg: 'bg-poster-cyan text-poster-midnight hover:bg-white',
  },
  {
    id: 'industria',
    href: '/industria-naval',
    icon: Ship,
    tag: 'INDUSTRIA NAVAL',
    title: '¿Eres del Sector Industrial o Astilleros?',
    description: 'Exhibición de ASENAV, proveedores marítimos, mantenimiento, motores y ruedas de negocios B2B.',
    color: 'border-white/20 hover:border-white text-white',
    btnBg: 'bg-white/10 text-white hover:bg-white/20',
  },
  {
    id: 'remo',
    href: '/deporte-turismo',
    icon: Sailboat,
    tag: 'DEPORTE & AVENTURA',
    title: '¿Practicas Remo, Kayak o Deporte?',
    description: 'Regatas tradicionales en el río Calle-Calle, clínicas de kayak abiertas y actividades en la ribera.',
    color: 'border-poster-gold/40 hover:border-poster-gold text-poster-gold',
    btnBg: 'bg-poster-gold text-poster-midnight hover:bg-poster-goldHover',
  },
  {
    id: 'turismo',
    href: '/valdivia',
    icon: Compass,
    tag: 'TURISMO & COMUNIDAD',
    title: '¿Buscas un Panorama Familiar?',
    description: 'Paseos fluviales por el Santuario, gastronomía del sur, cerveza artesanal y vida de parque.',
    color: 'border-poster-cyan/40 hover:border-poster-cyan text-poster-cyan',
    btnBg: 'bg-poster-cyan text-poster-midnight hover:bg-white',
  },
  {
    id: 'oficios',
    href: '/oficios',
    icon: Hammer,
    tag: 'PATRIMONIO VIVO',
    title: '¿Te interesan los Oficios Tradicionales?',
    description: 'Demostraciones en vivo de carpintería de ribera, maestros armadores y saberes de la cuenca.',
    color: 'border-white/20 hover:border-white text-white',
    btnBg: 'bg-white/10 text-white hover:bg-white/20',
  },
];

export default function InterestHub() {
  return (
    <section className="py-20 bg-poster-midnight relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-poster-gold block mb-2">
            Explora según tu Pasión
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            ¿Qué te atrae del <span className="text-poster-river">Universo del Agua</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Haz clic en la temática que más te interese para ir directamente a la sección con todos los detalles.
          </p>
        </div>

        {/* Grid of 6 Interest Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`glass-panel p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between ${item.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-poster-dark border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-sans leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${item.btnBg}`}
                >
                  Explorar Sección
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
