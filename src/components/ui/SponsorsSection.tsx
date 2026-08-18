'use client';

import React from 'react';
import { Check, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface SponsorsSectionProps {
  onOpenModal: (type?: string, level?: string) => void;
}

const TIERS = [
  {
    level: '5',
    metal: 'Li — Litio',
    name: 'Litio (Patrocinador Titular)',
    tag: 'Mayor Visibilidad',
    price: '$6.000.000 CLP',
    border: 'border-poster-cyan shadow-xl shadow-poster-cyan/20 ring-1 ring-poster-cyan/30',
    badge: 'bg-poster-cyan text-poster-midnight font-bold',
    benefits: [
      'Naming de escenario principal y presencia estelar en todas las piezas de prensa',
      'Exhibición Premium de Stand principal en Parque Saval (Ubicación Central)',
      '5 Entradas VIP al Seminario SEM + Almuerzo exclusivo de autoridades',
      'Minuto de alocución en la ceremonia inaugural de apertura',
      'Logotipo prioritario en transmisiones oficiales y sitio web',
    ],
    featured: true,
  },
  {
    level: '4',
    metal: 'Co — Cobalto',
    name: 'Cobalto (Estratégico)',
    tag: 'Presencia de Marca',
    price: '$3.000.000 CLP',
    border: 'border-poster-gold/60 hover:border-poster-gold shadow-lg',
    badge: 'bg-poster-gold/15 text-poster-gold border border-poster-gold/30',
    benefits: [
      '4 Entradas VIP al Seminario SEM + Almuerzo ejecutivo de networking',
      'Espacio de stand destacado en el Pabellón Central',
      'Logo preferencial en pendones, acreditaciones y sitio web',
      'Mención en ruedas de prensa y comunicaciones oficiales',
    ],
    featured: false,
  },
  {
    level: '3',
    metal: 'Ni — Níquel',
    name: 'Níquel (Colaborador)',
    tag: 'Networking B2B',
    price: '$2.000.000 CLP',
    border: 'border-white/15 hover:border-white/30',
    badge: 'bg-white/10 text-slate-200 border border-white/10',
    benefits: [
      '3 Entradas VIP al Seminario SEM + Almuerzo ejecutivo',
      'Espacio para stand de exhibición estándar en Parque Saval',
      'Logo en pantallas digitales del evento y catálogo oficial',
    ],
    featured: false,
  },
  {
    level: '2',
    metal: 'Cu — Cobre',
    name: 'Cobre (Auspiciador)',
    tag: 'Comercial',
    price: '$1.000.000 CLP',
    border: 'border-white/10 hover:border-white/20',
    badge: 'bg-white/5 text-slate-300 border border-white/10',
    benefits: [
      '2 Entradas al Seminario SEM',
      'Presencia de marca en piezas gráficas digitales',
      'Presencia en directorio digital de proveedores náuticos',
    ],
    featured: false,
  },
];

export default function SponsorsSection({ onOpenModal }: SponsorsSectionProps) {
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-poster-midnight via-[#010c1c] to-poster-midnight relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean without pre-title pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
              Metales de la <span className="text-poster-cyan">Transición Energética</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-sans leading-relaxed">
              Niveles de auspicio inspirados en los elementos que impulsan la movilidad marítima sustentable.
            </p>
          </div>

          <button
            onClick={() => onOpenModal('sponsor', 'General')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover transition-all shadow-lg shadow-poster-gold/20 self-start md:self-end"
          >
            <Download className="w-4 h-4" />
            <span>Solicitar Dossier Comercial</span>
          </button>
        </div>

        {/* Grid of 4 Symmetrical Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TIERS.map((t) => (
            <div
              key={t.metal}
              className={`p-7 rounded-3xl bg-poster-dark/80 backdrop-blur-md flex flex-col justify-between border transition-all duration-200 hover:scale-[1.02] ${t.border}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${t.badge}`}>
                    {t.metal}
                  </span>
                  <span className="text-[11px] text-slate-400 font-sans">
                    {t.tag}
                  </span>
                </div>

                <h3 className="font-archivo text-xl font-bold text-white mb-1">
                  {t.name}
                </h3>
                
                <div className="text-xl font-bold text-poster-gold mb-5">
                  {t.price}
                </div>

                <ul className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                  {t.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-poster-cyan shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenModal('sponsor', t.metal)}
                className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  t.featured
                    ? 'bg-poster-cyan text-poster-midnight hover:bg-white shadow-lg shadow-poster-cyan/20'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                <span>Postular Nivel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Sponsorship Footer Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-poster-dark/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-poster-gold" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-archivo">
                ¿Buscas una propuesta a medida para tu empresa?
              </h4>
              <p className="text-xs text-slate-300 font-sans mt-0.5">
                Diseñamos activaciones especiales, stands combinados de astilleros y auspicios de regatas.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenModal('sponsor', 'Personalizado')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all shrink-0"
          >
            Hablar con Producción
          </button>
        </div>

      </div>
    </section>
  );
}
