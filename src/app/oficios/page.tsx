'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Hammer, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function OficiosPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-poster-cyan/10 border border-poster-cyan/30 text-poster-cyan text-xs font-bold uppercase tracking-widest mb-6">
              <Hammer className="w-4 h-4 text-poster-cyan" />
              Patrimonio Vivo — Oficios de Ribera
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
              El Trabajo y los Saberes <span className="text-poster-river">Heredados del Agua</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Una red de saberes que sostiene la economía y cultura local de la cuenca: carpintería de ribera, soldadura naval, electricidad marina, pescadores artesanales y emprendimientos familiares.
            </p>
          </div>
        </section>

        <section className="py-16 bg-poster-dark/60 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl">
                <Hammer className="w-8 h-8 text-poster-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Carpintería de Ribera</h3>
                <p className="text-sm text-slate-300">
                  Demostraciones en directo del arte de maquetación y construcción artesanal de embarcaciones en madera.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-poster-cyan mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Formación & Nuevas Generaciones</h3>
                <p className="text-sm text-slate-300">
                  Transmisión de conocimientos a estudiantes de liceos técnicos y centros de formación profesional.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <HeartHandshake className="w-8 h-8 text-white mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Pesca Artesanal & Comunidad</h3>
                <p className="text-sm text-slate-300">
                  Reconocimiento al oficio tradicional que alimenta a mercados locales y comunidades ribereñas.
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
