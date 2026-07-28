'use client';

import React from 'react';
import { ShieldCheck, Award, Sparkles, Check } from 'lucide-react';

interface SponsorsSectionProps {
  onOpenModal: (type?: string, level?: string) => void;
}

const TIERS = [
  {
    level: '5',
    metal: 'Li — Litio',
    name: 'Litio (Principal)',
    price: '$6.000.000 CLP',
    color: 'border-cyanic-400 bg-cyanic-500/10 text-cyanic-400',
    benefits: [
      '5 Entradas VIP al Seminario SEM + Almuerzo exclusivo de autoridades',
      'Exhibición Premium de Stand principal en Parque Saval (Ubicación Central)',
      'Naming de escenario principal y presencia en todas las piezas de prensa',
      'Minuto de alocución en la ceremonia inaugural del evento',
    ],
    featured: true,
  },
  {
    level: '4',
    metal: 'Co — Cobalto',
    name: 'Cobalto',
    price: '$3.000.000 CLP',
    color: 'border-copper-500 bg-copper-500/10 text-copper-500',
    benefits: [
      '4 Entradas VIP al Seminario SEM + Almuerzo ejecutivo',
      'Espacio de exhibición destacado en pabellón naval',
      'Logo prioritario en pendones, sitio web y acreditaciones',
      'Mención en ruedas de prensa y redes oficiales',
    ],
    featured: false,
  },
  {
    level: '3',
    metal: 'Mn — Manganeso',
    name: 'Manganeso',
    price: '$2.000.000 CLP',
    color: 'border-slate-400 bg-slate-400/10 text-slate-300',
    benefits: [
      '3 Entradas VIP al Seminario SEM + Almuerzo ejecutivo',
      'Espacio para stand de exhibición estándar',
      'Logo en sitio web oficial y pantallas de Parque Saval',
    ],
    featured: false,
  },
  {
    level: '2',
    metal: 'Ni — Níquel',
    name: 'Níquel',
    price: '$1.000.000 CLP',
    color: 'border-slate-500 bg-slate-500/10 text-slate-400',
    benefits: [
      '2 Entradas VIP al Seminario SEM',
      'Visibilidad de marca Nivel 2 en el recinto y sitio web',
    ],
    featured: false,
  },
  {
    level: '1',
    metal: 'Cd — Cadmio',
    name: 'Cadmio',
    price: '$500.000 CLP',
    color: 'border-slate-600 bg-slate-600/10 text-slate-400',
    benefits: [
      '1 Entrada VIP al Seminario SEM',
      'Visibilidad de marca Nivel 1 en sitio web oficial',
    ],
    featured: false,
  },
];

export default function SponsorsSection({ onOpenModal }: SponsorsSectionProps) {
  return (
    <section id="sponsors" className="py-24 bg-naval-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-copper-500 font-bold mb-2 block">
            Auspicios & Patrocinios
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Cinco metales, cinco formas de estar
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cada nivel de auspicio lleva el nombre de un metal esencial para las baterías de la movilidad eléctrica del futuro.
          </p>
        </div>

        {/* Grid Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {TIERS.map((t) => (
            <div
              key={t.metal}
              className={`glass-panel p-6 rounded-2xl flex flex-col justify-between border ${
                t.featured ? 'border-cyanic-400 shadow-xl shadow-cyanic-400/10 scale-[1.03]' : 'border-white/10'
              }`}
            >
              <div>
                <div className={`inline-block px-3 py-1 rounded-md text-xs font-mono font-bold mb-4 ${t.color}`}>
                  {t.metal}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{t.name}</h3>
                <div className="text-lg font-bold text-copper-500 mb-6">{t.price}</div>

                <ul className="space-y-3 mb-8">
                  {t.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyanic-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenModal('sponsor', t.metal)}
                className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                  t.featured
                    ? 'bg-cyanic-400 text-naval-950 hover:bg-cyanic-300'
                    : 'glass-panel text-white hover:bg-white/10'
                }`}
              >
                Postular Auspicio
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
