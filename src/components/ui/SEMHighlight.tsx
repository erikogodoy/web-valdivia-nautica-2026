'use client';

import React from 'react';
import { Zap, Shield, Cpu, BookOpen, ArrowUpRight } from 'lucide-react';

interface SEMHighlightProps {
  onOpenModal: (type?: string) => void;
}

export default function SEMHighlight({ onOpenModal }: SEMHighlightProps) {
  return (
    <section id="sem" className="py-24 relative overflow-hidden bg-gradient-to-b from-naval-950 via-naval-900 to-naval-950">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyanic-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Alliances */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyanic-500/10 border border-cyanic-500/30 text-cyanic-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4 text-cyanic-400" />
              Salón de Electromovilidad Marítima
            </div>

            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white mb-6 leading-tight">
              SEM 2026: La revolución limpia del transporte fluvial y acuático
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Organizado en alianza con <strong className="text-cyanic-400">THEMS</strong> (Test-bench for Hybrid Electric Marine System), spin-off de la Universidad Austral de Chile (UACh), y con la participación activa de universidades como PUCV, UTFSM y UFRO, además de los Ministerios de Transportes y Energía.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-panel p-5 rounded-xl border-cyanic-500/20">
                <Cpu className="w-6 h-6 text-cyanic-400 mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">Propulsión Limpia</h4>
                <p className="text-xs text-slate-300">Pruebas en vivo del primer catamarán eléctrico alimentado con baterías de nueva generación en el río Calle-Calle.</p>
              </div>

              <div className="glass-panel p-5 rounded-xl border-copper-500/20">
                <BookOpen className="w-6 h-6 text-copper-500 mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">Academia & Gobierno</h4>
                <p className="text-xs text-slate-300">Seminarios, mesas de regulación normativa sustentable y transferencia tecnológica universidad-empresa.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenModal('sem')}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all flex items-center gap-2 shadow-lg shadow-cyanic-400/20"
              >
                Inscribirme al SEM 2026
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 font-medium">
                * Cupos limitados para seminarios técnicos
              </span>
            </div>
          </div>

          {/* Right Column Specs Box */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-2xl border-white/10 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-copper-500 text-naval-950 font-bold text-[10px] uppercase tracking-wider rounded-md">
                Sudamérica 2026
              </div>

              <h3 className="font-syne text-2xl font-bold text-white mb-6">
                Ejes Temáticos SEM
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 pb-3 border-b border-white/5">
                  <span className="w-6 h-6 rounded-full bg-cyanic-500/20 text-cyanic-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Sistemas Híbridos & Eléctricos</h5>
                    <p className="text-xs text-slate-400">Arquitecturas de propulsión para embarcaciones de transporte público fluvial.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 pb-3 border-b border-white/5">
                  <span className="w-6 h-6 rounded-full bg-cyanic-500/20 text-cyanic-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Baterías & Almacenamiento</h5>
                    <p className="text-xs text-slate-400">Avances en tecnología de Litio, Cobalto y celdas de combustible de hidrógeno.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 pb-3 border-b border-white/5">
                  <span className="w-6 h-6 rounded-full bg-cyanic-500/20 text-cyanic-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Normativa & Certificación Maritime</h5>
                    <p className="text-xs text-slate-400">Requerimientos de la Autoridad Marítima (DIRECTEMAR) para naves limpias.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyanic-500/20 text-cyanic-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Ruedas de Negocios B2B</h5>
                    <p className="text-xs text-slate-400">Encuentro de proveedores tecnológicos con armadores y autoridades regionales.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
