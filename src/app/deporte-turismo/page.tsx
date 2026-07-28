'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Sailboat, Compass, Heart, ArrowRight } from 'lucide-react';

export default function DeporteTurismoPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'general', level: '' });

  const handleOpenModal = (type = 'general', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-poster-midnight">
        
        <section className="relative py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-poster-gold/10 border border-poster-gold/30 text-poster-gold text-xs font-bold uppercase tracking-widest mb-6">
              <Sailboat className="w-4 h-4 text-poster-gold" />
              La Cara Ciudadana — Deporte & Turismo
            </div>
            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-white mb-6">
              Vivir y Recorrer Valdivia <span className="text-poster-river">Desde sus Ríos</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              El remo, el kayak, los paseos fluviales y la gastronomía ribereña representan una tradición viva. Valdivia Náutica abre la ribera para disfrutar del agua en familia.
            </p>
          </div>
        </section>

        <section className="py-16 bg-poster-dark/60 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl">
                <Sailboat className="w-8 h-8 text-poster-gold mb-4" />
                <h3 className="font-syne text-xl font-bold text-white mb-2">Remo & Kayak Tradicional</h3>
                <p className="text-sm text-slate-300">
                  Exhibiciones en vivo de los clubes centenarios de remo valdiviano y clínicas de kayak abiertas al público.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <Compass className="w-8 h-8 text-poster-cyan mb-4" />
                <h3 className="font-syne text-xl font-bold text-white mb-2">Paseos Fluviales & Rutas</h3>
                <p className="text-sm text-slate-300">
                  Navegaciones por el río Calle-Calle y el Santuario de la Naturaleza Carlos Anwandter en Parque Saval.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <Heart className="w-8 h-8 text-white mb-4" />
                <h3 className="font-syne text-xl font-bold text-white mb-2">Gastronomía & Cerveza Ribereña</h3>
                <p className="text-sm text-slate-300">
                  Muestra gastronómica del sur de Chile a orillas del río con productores locales.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenModal={handleOpenModal} />
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: 'general', level: '' })}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
