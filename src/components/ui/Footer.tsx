'use client';

import React from 'react';
import Link from 'next/link';
import { Waves, MapPin, Mail, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type?: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-poster-midnight text-slate-300 pt-16 pb-12 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-poster-cyan to-poster-blue flex items-center justify-center text-white shadow-lg shadow-poster-cyan/20">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white font-sans">
                VALDIVIA NĀUTICA 2026
              </span>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              4 · 5 · 6 de Diciembre de 2026 — Parque Saval, Valdivia. Una feria abierta a la comunidad que reúne industria naval, electromovilidad marítima (SEM), pesca, remo, turismo y oficios de ribera.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-poster-gold" />
                4, 5 y 6 de Diciembre de 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-poster-cyan" />
                Centro de Ferias Parque Saval, Isla Teja, Valdivia, Chile
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-poster-gold" />
                info@valdivianautica.cl
              </span>
            </div>
          </div>

          {/* Col 2: Secciones & Rutas SEO */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Pilares del Evento</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link href="/evento" className="hover:text-poster-cyan transition-colors">El Evento</Link></li>
              <li><Link href="/sem" className="hover:text-poster-cyan transition-colors">SEM (Electromovilidad)</Link></li>
              <li><Link href="/expo-pesca" className="hover:text-poster-cyan transition-colors">Expo Pesca</Link></li>
              <li><Link href="/industria-naval" className="hover:text-poster-cyan transition-colors">Industria Naval</Link></li>
              <li><Link href="/deporte-turismo" className="hover:text-poster-cyan transition-colors">Deporte & Turismo</Link></li>
              <li><Link href="/oficios" className="hover:text-poster-cyan transition-colors">Oficios & Patrimonio</Link></li>
            </ul>
          </div>

          {/* Col 3: Participación */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Participa</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link href="/expositores" className="hover:text-poster-cyan transition-colors">Ficha de Expositores</Link></li>
              <li><Link href="/sponsors" className="hover:text-poster-cyan transition-colors">Categorías de Auspicio</Link></li>
              <li><Link href="/valdivia" className="hover:text-poster-cyan transition-colors">Cómo Llegar & Parque Saval</Link></li>
              <li>
                <button onClick={() => onOpenModal('general')} className="hover:text-poster-cyan transition-colors text-left">
                  Contacto & Prensa
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Alianzas */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Organiza</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Valdivia Náutica es impulsada junto a la Municipalidad de Valdivia, GORE Los Ríos, UACh, THEMS, ASENAV y la comunidad ribereña.
            </p>
            <div className="px-3 py-2 rounded-lg glass-panel border-white/5 text-[11px] text-poster-cyan font-mono">
              Base Datos: GV Databases (São Paulo)
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Valdivia Náutica. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Volver a la Portada</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
