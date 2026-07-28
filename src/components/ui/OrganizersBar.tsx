'use client';

import React from 'react';

const LOGOS = [
  { name: 'MUNICIPALIDAD DE VALDIVIA', category: 'Patrocinador Oficial' },
  { name: 'GORE LOS RÍOS', category: 'Gobierno Regional' },
  { name: 'UNIVERSIDAD AUSTRAL DE CHILE', category: 'Academia & Ciencia' },
  { name: 'THEMS', category: 'Electromovilidad' },
  { name: 'ASENAV', category: 'Industria Naval' },
  { name: 'SAAM TOWAGE', category: 'Servicios Marítimos' },
  { name: 'SALMOBOATS', category: 'Construcción Fluvial' },
  { name: 'DIRECTEMAR', category: 'Autoridad Marítima' },
  { name: 'MOWI', category: 'Acuicultura' },
  { name: 'EXPO PESCA', category: 'Pesca Deportiva' },
  { name: 'SEM', category: 'Salón Electromovilidad' },
  { name: 'PRODUCE / GATOVISUAL', category: 'Producción' },
];

export default function OrganizersBar() {
  return (
    <section className="py-12 bg-[#051130] border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-[#FFB800] font-bold mb-8">
          Organizan, Patrocinan e Impulsan Valdivia Náutica 2026
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {LOGOS.map((logo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-panel border-white/5 flex flex-col items-center justify-center text-center hover:border-[#00D2FF]/40 transition-colors group"
            >
              <span className="font-bold text-xs text-white group-hover:text-[#00D2FF] transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
