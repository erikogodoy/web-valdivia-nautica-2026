'use client';

import React from 'react';
import Link from 'next/link';
import { Waves, MapPin, Mail, Phone, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type?: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-naval-950 text-slate-300 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyanic-500 to-naval-700 flex items-center justify-center text-white shadow-lg shadow-cyanic-500/20">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                VALDIVIA NÁUTICA
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              4 · 5 · 6 de diciembre de 2026 — Parque Saval, Valdivia. El encuentro anual que reúne a la industria naval, la innovación en electromovilidad marítima, la pesca, los deportes acuáticos y la comunidad ribereña de la Región de Los Ríos.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyanic-400" />
                4, 5 y 6 de Diciembre de 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-copper-500" />
                Centro de Ferias Parque Saval, Isla Teja, Valdivia, Chile
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyanic-400" />
                info@valdivianautica.cl
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Mundos */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Siete Mundos</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#mundos" className="hover:text-cyanic-400 transition-colors">Industria Naval</a></li>
              <li><a href="#sem" className="hover:text-cyanic-400 transition-colors">Salón Electromovilidad (SEM)</a></li>
              <li><a href="#mundos" className="hover:text-cyanic-400 transition-colors">Expo Pesca Artesanal</a></li>
              <li><a href="#mundos" className="hover:text-cyanic-400 transition-colors">Deporte Náutico & Remo</a></li>
              <li><a href="#mundos" className="hover:text-cyanic-400 transition-colors">Turismo Fluvial</a></li>
              <li><a href="#mundos" className="hover:text-cyanic-400 transition-colors">Oficios de Ribera</a></li>
            </ul>
          </div>

          {/* Col 3: Participación */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Participa</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onOpenModal('expositor')} className="hover:text-cyanic-400 transition-colors text-left">
                  Quiero Exponer (Stands)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('sponsor')} className="hover:text-cyanic-400 transition-colors text-left">
                  Categorías de Auspicio
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('sem')} className="hover:text-cyanic-400 transition-colors text-left">
                  Inscripción SEM 2026
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('general')} className="hover:text-cyanic-400 transition-colors text-left">
                  Acreditación Prensa
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Alianzas */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Organiza & Alianzas</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Valdivia Náutica es impulsada junto a la comunidad local, la Municipalidad de Valdivia, Universidad Austral de Chile (UACh) y THEMS.
            </p>
            <div className="px-3 py-2 rounded-lg glass-panel border-white/5 text-[11px] text-cyanic-400 font-mono">
              Proyecto DB: GV Databases
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Valdivia Náutica. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Volver arriba ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
