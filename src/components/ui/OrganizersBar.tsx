'use client';

import React from 'react';

export default function OrganizersBar() {
  return (
    <section className="py-14 sm:py-16 bg-[#051130] border-t border-white/10 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <p className="text-center text-xs uppercase tracking-[0.25em] text-poster-gold font-bold mb-10">
          Organizan, Patrocinan e Impulsan Valdivia Náutica 2026
        </p>

        {/* 2 Balanced Rows of Official Logos */}
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          
          {/* Fila 1 */}
          <div className="w-full flex justify-center items-center py-4 px-4 sm:px-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all overflow-x-auto no-scrollbar">
            <img
              src="/images/logos-valdivia-nautica-fila1.png"
              alt="Organizan e Impulsan Valdivia Náutica 2026 - Fila 1"
              className="min-w-[560px] md:min-w-0 w-full max-w-5xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>

          {/* Fila 2 */}
          <div className="w-full flex justify-center items-center py-4 px-4 sm:px-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all overflow-x-auto no-scrollbar">
            <img
              src="/images/logos-valdivia-nautica-fila2.png"
              alt="Patrocinadores y Alianzas Valdivia Náutica 2026 - Fila 2"
              className="min-w-[560px] md:min-w-0 w-full max-w-5xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
