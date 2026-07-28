'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Store, CheckCircle2, ArrowRight, Building2, Globe2, ShieldCheck } from 'lucide-react';

export default function ExpositoresPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'expositor', level: '' });

  const handleOpenModal = (type = 'expositor', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-naval-950">
        
        <section className="relative py-16 overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-copper-500 font-bold mb-3 block">
              Feria & Espacio B2B
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
              Sé Expositor en <span className="text-river-gradient">Valdivia Náutica 2026</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Conecta tu empresa con miles de visitantes calificados, armadores, astilleros y comitivas internacionales en la vitrina náutica más importante del sur de Chile.
            </p>

            <button
              onClick={() => handleOpenModal('expositor')}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all inline-flex items-center gap-2 shadow-xl shadow-cyanic-400/20"
            >
              Solicitar Espacio de Stand
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-naval-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
              ¿Por qué expones en Parque Saval?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl">
                <Building2 className="w-8 h-8 text-cyanic-400 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Networking B2B Directo</h3>
                <p className="text-sm text-slate-300">
                  Espacios diseñados para reuniones de negocios entre proveedores de insumos marítimos, astilleros y compradores del sector público y privado.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <Globe2 className="w-8 h-8 text-copper-500 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Comitivas Internacionales</h3>
                <p className="text-sm text-slate-300">
                  Participación confirmed de delegaciones internacionales (como la misión comercial de República Checa) interesadas en el mercado náutico chileno.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Infraestructura de Nivel</h3>
                <p className="text-sm text-slate-300">
                  Stands modulares con conectividad eléctrica, seguridad 24/7 y acceso directo a la ribera para exhibiciones en agua.
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
