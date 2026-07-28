'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Ship, Building2, ShieldCheck, ArrowRight, Anchor } from 'lucide-react';

export default function IndustriaNavalPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'expositor', level: '' });

  const handleOpenModal = (type = 'expositor', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-poster-midnight">
        
        <section className="relative py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-poster-cyan/10 border border-poster-cyan/30 text-poster-cyan text-xs font-bold uppercase tracking-widest mb-6">
              <Ship className="w-4 h-4 text-poster-cyan" />
              Construir & Navegar — Industria Naval
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
              El Pilar Productivo de la <span className="text-poster-river">Industria Naval Chilena</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Valdivia alberga una de las capacidades de construcción naval más relevantes del país. Empresas como <strong className="text-white">ASENAV</strong> y una extensa red de proveedores especializados han consolidado soluciones reconocidas internacionalmente.
            </p>

            <button
              onClick={() => handleOpenModal('expositor')}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-xl hover:bg-poster-goldHover transition-all inline-flex items-center gap-2 shadow-xl shadow-poster-gold/20"
            >
              <Anchor className="w-4 h-4" />
              Solicitar Espacio de Stand Naval
            </button>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-16 bg-poster-dark/60 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl">
                <Building2 className="w-8 h-8 text-poster-cyan mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Astilleros & Mantenimiento</h3>
                <p className="text-sm text-slate-300">
                  Exhibición de ingeniería naval, remolcadores, catamaranes, ferrys y soluciones de mantenimiento especializado para el sur austral.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-poster-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Proveedores & Insumos</h3>
                <p className="text-sm text-slate-300">
                  Empresas de electricidad marina, sistemas hidráulicos, pintura anticorrosiva, motores y certificación de seguridad.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <Anchor className="w-8 h-8 text-white mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Visitas Guiadas a Astilleros</h3>
                <p className="text-sm text-slate-300">
                  Programa exclusivo para delegaciones y estudiantes técnicos a las instalaciones navales de Valdivia.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenModal={handleOpenModal} />
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: 'expositor', level: '' })}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
