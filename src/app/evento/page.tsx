'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { Waves, MapPin, Calendar, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function EventoPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'general', level: '' });

  const handleOpenModal = (type = 'general', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-naval-950">
        
        {/* Page Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-xs uppercase tracking-widest text-cyanic-400 font-bold mb-3 block">
              El Evento
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
              Valdivia Náutica 2026: <span className="text-river-gradient">Tres Días en Torno al Agua</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              En el corazón de la Región de Los Ríos, donde el agua no es solo paisaje sino identidad, nace el encuentro anual que reúne a la industria, innovación, oficios, deporte y comunidad ribereña.
            </p>
          </div>
        </section>

        {/* Narrative & History */}
        <section className="py-16 bg-naval-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">
                  ¿Por qué Valdivia es el territorio natural?
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-4">
                  Valdivia creció junto a sus ríos. El Calle-Calle, el Cruces y el Pedro de Valdivia moldearon la ciudad, su economía y su cultura. Los astilleros históricos fueron cuna de embarcaciones que navegaron por todo el sur austral.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Los pescadores artesanales siguen alimentando mercados y comunidades. Los remeros compiten en aguas internacionales que hoy también recorren turistas de todo el mundo. Esta historia viva hace de Valdivia la capital náutica natural de Chile.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="block text-3xl font-serif font-bold text-cyanic-400">3 Días</span>
                    <span className="text-xs text-slate-400 uppercase font-semibold">4 · 5 · 6 Diciembre 2026</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif font-bold text-copper-500">Parque Saval</span>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Isla Teja, Valdivia</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border-white/10 space-y-6">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Impacto para la Región de Los Ríos
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyanic-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Desarrollo Económico & B2B</h4>
                      <p className="text-xs text-slate-300">Generación de nuevos contratos y alianzas estratégicas entre astilleros y proveedores de repuestos.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyanic-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Transición Energética Fluvial</h4>
                      <p className="text-xs text-slate-300">Posicionamiento de la región como pionera en electromovilidad marítima sustentable.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyanic-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Puesta en Valor de Oficios</h4>
                      <p className="text-xs text-slate-300">Reconocimiento público al artesano de ribera, soldador naval y pescador tradicional.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyanic-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Promoción Turística & Deporte</h4>
                      <p className="text-xs text-slate-300">Atracción de más de 10.000 visitantes locales y nacionales durante el fin de semana del evento.</p>
                    </div>
                  </li>
                </ul>

                <button
                  onClick={() => handleOpenModal('expositor')}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all flex items-center justify-center gap-2"
                >
                  Quiero Ser Parte del Evento
                  <ArrowRight className="w-4 h-4" />
                </button>
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
