'use client';

import React from 'react';

export default function OrganizersBar() {
  return (
    <section className="py-16 sm:py-20 bg-poster-midnight border-t border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <p className="text-center text-xs uppercase tracking-[0.25em] text-poster-gold font-bold mb-10 sm:mb-12">
          Organizan, Patrocinan e Impulsan Valdivia Náutica 2026
        </p>

        {/* 2 Balanced Rows of Official Logos directly against background */}
        <div className="space-y-8 sm:space-y-10 flex flex-col items-center">
          
          {/* Fila 1 */}
          <div className="w-full flex justify-center items-center overflow-x-auto no-scrollbar py-1">
            <img
              src="/images/logos-valdivia-nautica-fila1.png"
              alt="Organizan e Impulsan Valdivia Náutica 2026 - Fila 1"
              className="min-w-[540px] md:min-w-0 w-full max-w-5xl h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Fila 2 */}
          <div className="w-full flex justify-center items-center overflow-x-auto no-scrollbar py-1">
            <img
              src="/images/logos-valdivia-nautica-fila2.png"
              alt="Patrocinadores y Alianzas Valdivia Náutica 2026 - Fila 2"
              className="min-w-[540px] md:min-w-0 w-full max-w-5xl h-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
