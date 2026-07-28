'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Zap, Cpu, GraduationCap, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

export default function SEMPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'sem', level: '' });

  const handleOpenModal = (type = 'sem', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-naval-950">
        
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyanic-500/10 border border-cyanic-500/30 text-cyanic-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4 text-cyanic-400" />
              Salón de Electromovilidad Marítima 2026
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
              SEM: Descarbonización y Futuro de la <span className="text-river-gradient">Propulsión Fluvial</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              El hito técnico y académico en Sudamérica que reúne a investigadores de la Universidad Austral de Chile (UACh/THEMS), universidades nacionales, ministerios y armadores internacionales.
            </p>

            <button
              onClick={() => handleOpenModal('sem')}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all inline-flex items-center gap-2 shadow-xl shadow-cyanic-400/20"
            >
              Inscribirme al Seminario SEM
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Program Topics */}
        <section className="py-16 bg-naval-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
              Programa de Conferencias & Pruebas en Vivo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl border-cyanic-500/20">
                <Cpu className="w-8 h-8 text-cyanic-400 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Pruebas en el Río</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Navegación demostrativa del catamarán eléctrico cero emisiones desarrollado en Valdivia, evaluando eficiencia energética en tiempo real.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border-copper-500/20">
                <GraduationCap className="w-8 h-8 text-copper-500 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Alianza UACh & THEMS</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Transferencia tecnológica entre el laboratorio *Test-bench for Hybrid Electric Marine System* (THEMS), la PUCV, UTFSM y UFRO.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border-slate-400/20">
                <ShieldCheck className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Marco Regulatorio DIRECTEMAR</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Mesas de trabajo con el Ministerio de Transportes y Energía para establecer las normativas de certificación de naves eléctricas en Chile.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenModal={handleOpenModal} />
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: 'sem', level: '' })}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
