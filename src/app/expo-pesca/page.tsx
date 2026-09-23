'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Fish, Calendar, MapPin, Download, ArrowRight, Anchor, Shield, Waves } from 'lucide-react';

export default function ExpoPescaPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type?: string;
    level?: string;
  }>({
    isOpen: false,
    type: 'expositor',
    level: '',
  });

  const handleOpenModal = (type = 'expositor', level = '') => {
    setModalState({
      isOpen: true,
      type,
      level,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-16 bg-poster-midnight text-white min-h-screen">
        {/* Expo Pesca Hero Header */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-poster-gold/10 border border-poster-gold/30 text-poster-gold text-xs font-bold uppercase tracking-wider mb-6">
              <Fish className="w-4 h-4 text-poster-gold" />
              <span>Pabellón Temático · Valdivia Náutica 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-archivo font-extrabold tracking-tight mb-6">
              EXPO <span className="text-poster-gold">PESCA</span>
            </h1>

            <p className="text-xl sm:text-2xl font-light text-slate-200 mb-6 font-sans">
              Pesca Artesanal, Acuicultura Sostenible & Faena Marina
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
              El pabellón dedicado al corazón productivo de nuestras costas y ríos: equipamiento de navegación de faena, artes de pesca responsable, acuicultura regenerativa y seguridad marítima.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 mb-10">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-poster-gold" />
                4, 5 y 6 de Diciembre 2026
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-poster-cyan" />
                Centro de Ferias Parque Saval · Valdivia
              </span>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenModal('expositor', 'Expo Pesca')}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover hover:scale-[1.03] transition-all shadow-xl shadow-poster-gold/25"
              >
                <Anchor className="w-4 h-4" />
                <span>Quiero Exponer en Expo Pesca</span>
              </button>

              <a
                href="/documents/Valdivia_Nautica_2026_Dossier_Sponsors.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Valdivia_Nautica_2026_Matriz_Auspicios_Sponsors.pdf"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all"
              >
                <Download className="w-4 h-4 text-poster-cyan" />
                <span>Descargar Dossier</span>
              </a>
            </div>
          </div>
        </section>

        {/* Ejes de Expo Pesca */}
        <section className="py-16 border-t border-white/10 bg-poster-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-archivo font-bold text-center mb-12">
              Sectores de Exhibición en <span className="text-poster-gold">Expo Pesca</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-gold/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-poster-gold/10 flex items-center justify-center mb-5 text-poster-gold">
                  <Anchor className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Motores, Embarcaciones & Equipamiento
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Muestra de motores fuera de borda, botes de faena, repuestos, electrónica náutica, ecosondas y herramientas para la actividad en el mar interior y bahía.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-cyan/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-poster-cyan/10 flex items-center justify-center mb-5 text-poster-cyan">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Acuicultura Sostenible & Algas
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Innovaciones en cultivo de mitílidos, algas, procesos regenerativos y agregación de valor para cooperativas y sindicatos pesqueros de la costa valdiviana.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Seguridad en el Mar & Capacitación
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Equipamiento de salvamento, chalecos de última generación, talleres de radiocomunicaciones y charlas técnicas con autoridades marítimas e instituciones de fomento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-archivo font-bold text-white mb-4">
              ¿Tu empresa provee a la pesca artesanal o acuicultura?
            </h3>
            <p className="text-sm text-slate-300 mb-8 font-sans">
              Asegura tu stand en Parque Saval y conecta de forma directa con armadores artesanales, sindicatos de pescadores y operadores de la zona sur.
            </p>
            <button
              onClick={() => handleOpenModal('expositor', 'Stand Expo Pesca')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover hover:scale-[1.03] transition-all shadow-xl shadow-poster-gold/25"
            >
              <span>Solicitar Stand en Expo Pesca</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenModal={handleOpenModal} />

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
