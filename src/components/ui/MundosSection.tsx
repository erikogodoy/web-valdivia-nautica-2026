'use client';

import React from 'react';
import { Ship, Zap, Fish, Sailboat, Compass, GraduationCap, Hammer } from 'lucide-react';

const MUNDOS = [
  {
    num: '01',
    title: 'Industria Naval',
    subtitle: 'Astilleros & Mantenimiento',
    description: 'Astilleros históricos, proveedores de servicios náuticos y empresas que mantienen a flote la flota marítima del sur de Chile.',
    icon: Ship,
    accent: 'border-l-4 border-cyanic-400',
    featured: true,
  },
  {
    num: '02',
    title: 'SEM — Salón de Electromovilidad',
    subtitle: 'Innovación & Propulsión Limpia',
    description: 'Encuentro pionero junto a la UACh y THEMS. Exhibición de catamaranes eléctricos, motores cero emisiones y combustibles del futuro.',
    icon: Zap,
    accent: 'border-l-4 border-copper-500',
    featured: true,
  },
  {
    num: '03',
    title: 'Pesca Artesanal & Recreativa',
    subtitle: 'Expo Pesca',
    description: 'Campeonatos de pesca deportiva, charlas técnicas y puesta en valor de las comunidades ribereñas que sostienen la cadena gastronómica.',
    icon: Fish,
    accent: 'border-l-4 border-cyanic-400',
    featured: true,
  },
  {
    num: '04',
    title: 'Deporte Náutico',
    subtitle: 'Remo & Kayak',
    description: 'Regatas en el Calle-Calle, clubes centenarios de remo valdiviano y competencias acuáticas abiertas a la comunidad.',
    icon: Sailboat,
    accent: 'border-l-4 border-slate-400',
    featured: false,
  },
  {
    num: '05',
    title: 'Turismo Fluvial',
    subtitle: 'Navegación & Destino',
    description: 'Paseos en barco, rutas ecológicas por los humedales del Cruces y gastronomía a orillas del agua.',
    icon: Compass,
    accent: 'border-l-4 border-slate-400',
    featured: false,
  },
  {
    num: '06',
    title: 'Educación & Investigación',
    subtitle: 'Universidades & Centros',
    description: 'Vinculación de la UACh, CFTs y liceos técnicos con la industria marítima y nuevos talentos.',
    icon: GraduationCap,
    accent: 'border-l-4 border-slate-400',
    featured: false,
  },
  {
    num: '07',
    title: 'Patrimonio y Oficios de Ribera',
    subtitle: 'Carpintería Naval',
    description: 'Rescate de la maquetación en madera, soldadores navales, electricistas marinos y técnicas ancestrales de ribera.',
    icon: Hammer,
    accent: 'border-l-4 border-slate-400',
    featured: false,
  },
];

export default function MundosSection() {
  return (
    <section id="mundos" className="py-24 relative bg-naval-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-cyanic-400 font-bold mb-2 block">
            Ejes del Evento
          </span>
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white mb-4">
            Siete mundos, un solo territorio
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            El agua es nuestro punto de convergencia. Valdivia Náutica conecta a los actores clave que mueven el desarrollo marítimo y fluvial del país.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MUNDOS.map((m) => {
            const Icon = m.icon;
            return (
              <article
                key={m.num}
                className={`glass-panel p-8 rounded-xl transition-all duration-300 hover:scale-[1.01] hover:bg-naval-900/60 ${m.accent} ${
                  m.featured ? 'lg:col-span-1 shadow-lg shadow-cyanic-500/5' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-syne text-3xl font-bold text-cyanic-400/60">{m.num}</span>
                  <div className="w-12 h-12 rounded-lg bg-naval-800/80 flex items-center justify-center text-cyanic-400">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-copper-500 mb-1 block">
                  {m.subtitle}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">
                  {m.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {m.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
