'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const DIMENSIONES = [
  {
    id: 'desarrollo',
    title: 'El Agua como Desarrollo',
    subtitle: 'Industria, Innovación & Producción',
    description:
      'Donde convergen la industria naval con astilleros emblemáticos como ASENAV, la descarbonización en el Seminario de Electromovilidad Marítima (SEM), la tecnología fluvial y las empresas de servicios especializados.',
    borderColor: 'border-poster-cyan/40',
    accentColor: 'text-poster-cyan',
    badge: 'Desarrollo Económico',
    items: [
      'Industria Naval & ASENAV',
      'Seminario Electromovilidad Marítima (SEM)',
      'Tecnología y Proveedores Fluviales',
      'Vinculación Universidad-Empresa',
    ],
  },
  {
    id: 'territorio',
    title: 'El Agua como Territorio',
    subtitle: 'Turismo, Pesca & Vivencias',
    description:
      'El espacio donde la comunidad y los visitantes viven el río: Expo Pesca con campeonatos de orilla y embarcada, turismo fluvial, navegación recreativa, oferta gastronómica y experiencias familiares.',
    borderColor: 'border-poster-gold/40',
    accentColor: 'text-poster-gold',
    badge: 'Territorio & Vivencia',
    items: [
      'Expo Pesca (Campeonatos Orilla & Embarcado)',
      'Turismo Fluvial & Navegación Recreativa',
      'Gastronomía Ribereña & Marcas',
      'Experiencias Abiertas a Familias',
    ],
  },
  {
    id: 'identidad',
    title: 'El Agua como Identidad',
    subtitle: 'Remo, Patrimonio & Oficios',
    description:
      'La memoria y el futuro de las personas que hacen del agua su vida: carpinteros de ribera, el remo valdiviano tradicional, la pesca artesanal, la educación científica y los saberes heredados.',
    borderColor: 'border-white/20',
    accentColor: 'text-white',
    badge: 'Patrimonio Vivo',
    items: [
      'Carpintería de Ribera & Oficios Tradicionales',
      'Deporte Náutico (Remo & Kayak)',
      'Patrimonio e Historias Locales',
      'Investigación y Educación Ambiental',
    ],
  },
];

export default function TresDimensiones() {
  return (
    <section id="dimensiones" className="py-20 bg-poster-midnight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Left Aligned without Pre-title */}
        <div className="text-left max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4 tracking-tight">
            Tres Dimensiones que <span className="text-poster-gold">Dialogan</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Valdivia Náutica 2026 no es un Boat Show elitista. Es una feria abierta que conecta la economía, la vivencia territorial y el patrimonio vivo del sur de Chile.
          </p>
        </div>

        {/* 3 Main Dimensional Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {DIMENSIONES.map((d) => (
            <article
              key={d.id}
              className={`glass-panel p-8 rounded-2xl border ${d.borderColor} bg-poster-dark/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-2xl`}
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6 bg-poster-midnight ${d.accentColor} border border-white/10`}>
                  {d.badge}
                </span>

                <h3 className="text-2xl font-sans font-bold text-white mb-1">
                  {d.title}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${d.accentColor}`}>
                  {d.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {d.description}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2.5 mb-8">
                  {d.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className={`w-1.5 h-1.5 rounded-full ${d.accentColor.replace('text-', 'bg-')}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`#${d.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-poster-cyan transition-colors"
                >
                  Conocer más sobre {d.title.toLowerCase()}
                  <ArrowRight className="w-4 h-4 text-poster-cyan" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
