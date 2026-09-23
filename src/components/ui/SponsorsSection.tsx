'use client';

import React from 'react';
import { Check, Download, ArrowRight } from 'lucide-react';

interface SponsorsSectionProps {
  onOpenModal: (type?: string, level?: string) => void;
}

const TIERS = [
  {
    name: 'Litio',
    price: '$6.000.000',
    description: 'Nivel de máxima jerarquía institucional y naming sponsor. Incluye firma oficial de convenio, exclusividad en Rotonda Isla Teja y coctelería oficial.',
    border: 'border-poster-cyan shadow-xl shadow-poster-cyan/20 ring-1 ring-poster-cyan/30',
    benefits: [
      '5 Pases SEM + 5 Almuerzos',
      'Pendón en Rotonda Isla Teja',
      'Branding en Coffee & Cocktail',
      'Logo en obsequio oficial',
      'Entrevista en medios de prensa',
    ],
    featured: true,
  },
  {
    name: 'Cobalto',
    price: '$3.000.000',
    description: 'Alta presencia corporativa con visibilidad audiovisual continua, entrevistas con prensa, pendón en rotonda y vinculación con estudiantes de Ing. Naval UACh.',
    border: 'border-poster-gold/60 hover:border-poster-gold shadow-lg shadow-poster-gold/10',
    benefits: [
      '4 Pases SEM + 4 Almuerzos',
      'Pendón en Rotonda Isla Teja',
      'Logo en obsequio oficial',
      'Video continuo en pantallas',
      'Cupos a estudiantes Ing. Naval',
    ],
    featured: false,
  },
  {
    name: 'Manganeso',
    price: '$2.000.000',
    description: 'Posicionamiento destacado en plataformas digitales, transmisión de video corporativo los 3 días de evento y distribución de merchandising.',
    border: 'border-white/15 hover:border-white/30',
    benefits: [
      '3 Pases SEM + 3 Almuerzos',
      'Logo Grande en plataformas',
      'Transmisión de video corporativo',
      'Mención General en apertura',
      'Distribución material en toda la feria',
    ],
    featured: false,
  },
  {
    name: 'Níquel',
    price: '$1.000.000',
    description: 'Presencia comercial focalizada con pases al seminario, almuerzos oficiales, presencia digital y habilitación de punto fijo para distribución de material.',
    border: 'border-white/15 hover:border-white/30',
    benefits: [
      '2 Pases SEM + 2 Almuerzos',
      'Logo Mediano en digital',
      'Espacio publicitario en recinto',
      'Mención Grupal protocolar',
      'Punto fijo para volantes y merch',
    ],
    featured: false,
  },
  {
    name: 'Cadmio',
    price: '$500.000',
    description: 'Nivel de entrada para empresas que buscan respaldo institucional y presencia oficial de marca en el listado y recinto del evento.',
    border: 'border-white/10 hover:border-white/25',
    benefits: [
      '1 Pase Seminario SEM 2026',
      'Presencia en listado oficial',
      'Logo Estándar en web',
      'Espacio publicitario en recinto',
      'Respaldo institucional de marca',
    ],
    featured: false,
  },
];

export default function SponsorsSection({ onOpenModal }: SponsorsSectionProps) {
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-poster-midnight via-[#010c1c] to-poster-midnight relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
            Únete como <span className="text-poster-cyan">Sponsor Oficial</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans leading-relaxed">
            Cinco niveles diseñados para responder a los distintos objetivos corporativos, visibilidad de marca y vinculación institucional.
          </p>
        </div>

        {/* Grid of 5 Official Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`p-6 rounded-2xl bg-poster-dark/80 backdrop-blur-md flex flex-col justify-between border transition-all duration-200 hover:scale-[1.02] ${t.border}`}
            >
              <div>
                <h3 className="font-archivo text-xl font-extrabold uppercase tracking-wide text-white mb-2">
                  {t.name}
                </h3>
                
                <div className="text-2xl font-archivo font-extrabold text-poster-gold mb-3">
                  {t.price}
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4 min-h-[58px]">
                  {t.description}
                </p>

                <ul className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  {t.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-poster-cyan shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenModal('sponsor', t.name)}
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

        {/* Prominent Bottom CTA: Descargar Dossier Comercial */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a
            href="/documents/Valdivia_Nautica_2026_Dossier_Sponsors.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Valdivia_Nautica_2026_Matriz_Auspicios_Sponsors.pdf"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover hover:scale-[1.03] transition-all shadow-xl shadow-poster-gold/25"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Dossier Comercial</span>
          </a>
        </div>

      </div>
    </section>
  );
}
