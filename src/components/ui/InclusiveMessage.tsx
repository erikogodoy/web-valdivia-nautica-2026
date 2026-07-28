'use client';

import React from 'react';
import { Users, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function InclusiveMessage() {
  return (
    <section className="py-20 bg-gradient-to-r from-naval-900 via-naval-800 to-naval-900 border-y border-cyanic-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/30 text-copper-500 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-copper-500" />
            Una Feria Para Todos
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white mb-6 leading-tight">
            En Valdivia, el agua no es solo paisaje.{' '}
            <span className="text-river-gradient block mt-2">Es desarrollo, territorio e identidad.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Superamos la idea tradicional de una feria exclusiva de embarcaciones. Valdivia Náutica 2026 une en un mismo suelo a la gran industria naval como <strong className="text-white">ASENAV</strong>, a los artesanos de ribera, a las familias, a los deportistas de remo, a los pescadores y a las nuevas generaciones que ven en el agua su presente y su futuro.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl glass-panel">
              <span className="block text-xl font-bold text-cyanic-400 mb-1">Especialistas</span>
              <span className="text-xs text-slate-300">Ruedas B2B, seminarios SEM y proveedores.</span>
            </div>
            <div className="p-4 rounded-xl glass-panel">
              <span className="block text-xl font-bold text-copper-500 mb-1">Familias</span>
              <span className="text-xs text-slate-300">Paseos fluviales, artesanía y gastronomía.</span>
            </div>
            <div className="p-4 rounded-xl glass-panel">
              <span className="block text-xl font-bold text-cyanic-400 mb-1">Pescadores</span>
              <span className="text-xs text-slate-300">Campeonatos de orilla y embarcada en Expo Pesca.</span>
            </div>
            <div className="p-4 rounded-xl glass-panel">
              <span className="block text-xl font-bold text-slate-200 mb-1">Estudiantes</span>
              <span className="text-xs text-slate-300">Charlas de investigación y nuevos oficios.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
