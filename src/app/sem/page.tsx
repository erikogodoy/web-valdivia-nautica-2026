'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import SponsorsSection from '@/components/ui/SponsorsSection';
import { Zap, Calendar, MapPin, Download, ArrowRight, ShieldCheck, Cpu, BatteryCharging, Ship } from 'lucide-react';
import Link from 'next/link';

export default function SemPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type?: string;
    level?: string;
  }>({
    isOpen: false,
    type: 'sponsor',
    level: '',
  });

  const handleOpenModal = (type = 'sponsor', level = '') => {
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
        {/* SEM Hero Header */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-poster-cyan/10 border border-poster-cyan/30 text-poster-cyan text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4 text-poster-cyan" />
              <span>Seminario Oficial · Valdivia Náutica 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-archivo font-extrabold tracking-tight mb-6">
              SEM <span className="text-poster-cyan">2026</span>
            </h1>

            <p className="text-xl sm:text-2xl font-light text-slate-200 mb-6 font-sans">
              Seminario de Electromovilidad Marítima
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
              El principal foro del Cono Sur dedicado a la descarbonización del transporte fluvial y marítimo, propulsión eléctrica y solar, tecnología portuaria e innovación naval sostenible.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 mb-10">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-poster-gold" />
                4, 5 y 6 de Diciembre 2026
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-poster-cyan" />
                Centro de Ferias Parque Saval · Isla Teja, Valdivia
              </span>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
              <a
                href="/documents/Valdivia_Nautica_2026_Dossier_Sponsors.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Valdivia_Nautica_2026_Matriz_Auspicios_Sponsors.pdf"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover hover:scale-[1.03] transition-all shadow-xl shadow-poster-gold/25"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Dossier SEM</span>
              </a>

              <button
                onClick={() => handleOpenModal('sponsor', 'SEM')}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all"
              >
                <span>Ser Sponsor SEM</span>
                <ArrowRight className="w-4 h-4 text-poster-cyan" />
              </button>
            </div>
          </div>
        </section>

        {/* Ejes Temáticos del SEM */}
        <section className="py-16 border-t border-white/10 bg-poster-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-archivo font-bold text-center mb-12">
              Ejes Estratégicos del <span className="text-poster-cyan">Seminario</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-cyan/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-poster-cyan/10 flex items-center justify-center mb-5 text-poster-cyan">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Propulsión Eléctrica & Baterías
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Sistemas de tracción limpia para embarcaciones fluviales, transbordadores y naves de pasaje. Bancos de baterías, autonomía y carga rápida en muelles.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-gold/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-poster-gold/10 flex items-center justify-center mb-5 text-poster-gold">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Astilleros e Innovación Naval
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  La experiencia de astilleros líderes del cono sur en diseño y construcción de naves con menor huella de carbono, optimización hidrodinámica y nuevos materiales.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Políticas Públicas & Red Fluvial
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Modelos de concesión, infraestructura de puertos fluviales, normativa de seguridad marítima y articulación público-privada para la descarbonización.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor Packages Section */}
        <SponsorsSection onOpenModal={handleOpenModal} />
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
