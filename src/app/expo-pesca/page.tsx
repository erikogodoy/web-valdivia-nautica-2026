'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Fish, Anchor, Trophy, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ExpoPescaPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'general', level: '' });

  const handleOpenModal = (type = 'general', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-naval-950">
        
        {/* Hero Section */}
        <section className="relative py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/30 text-copper-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Fish className="w-4 h-4 text-copper-500" />
              Expo Pesca — Valdivia Náutica 2026
            </div>
            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-white mb-6">
              El Universo de la Pesca <span className="text-river-gradient">en un Solo Lugar</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              El espacio consagrado a la pesca deportiva y recreativa: marcas de equipamiento, accesorios, embarcaciones menores, tecnología y dos campeonatos de pesca que reúnen a aficionados y expertos de todo Chile.
            </p>

            <button
              onClick={() => handleOpenModal('general')}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all inline-flex items-center gap-2 shadow-xl shadow-cyanic-400/20"
            >
              Consultar por Inscripciones y Marcas
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Championships & Program */}
        <section className="py-16 bg-naval-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-syne font-bold text-white text-center mb-12">
              Pilares de Expo Pesca 2026
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl border-copper-500/20">
                <Trophy className="w-8 h-8 text-copper-500 mb-4" />
                <h3 className="font-syne text-xl font-bold text-white mb-2">Campeonatos de Pesca</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Competencias oficiales en dos modalidades: <strong>Pesca desde Orilla</strong> en los ríos de la cuenca y <strong>Pesca Embarcada</strong>. Categorías para aficionados y clubes experimentados.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border-cyanic-500/20">
                <Anchor className="w-8 h-8 text-cyanic-400 mb-4" />
                <h3 className="font-syne text-xl font-bold text-white mb-2">Feria de Equipamiento & Marcas</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Muestra comercial de cañas, señuelos, vestuario técnico, sonar/ecoadondas, kayakes de pesca y embarcaciones menores con asesoría de especialistas.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border-slate-400/20">
                <Compass className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="font-syne text-xl font-bold text-white mb-2">Charlas & Conservación</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Clínicas de atado de moscas, talleres de pesca sustentable y ponencias que posicionan a la Región de Los Ríos como el destino privilegiado del sur.
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
