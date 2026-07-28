'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Anchor, Menu, X, Waves, Compass, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (type?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyanic-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyanic-500 to-naval-700 flex items-center justify-center text-white shadow-lg shadow-cyanic-500/20 group-hover:scale-105 transition-transform">
              <Waves className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-cyanic-400 transition-colors">
                VALDIVIA NÁUTICA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyanic-400 font-semibold -mt-1">
                4 · 5 · 6 DICIEMBRE 2026
              </span>
            </div>
          </Link>

          {/* Navigation Links - Semantic <nav> */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
            <a 
              href="#mundos" 
              className="text-sm font-medium text-slate-300 hover:text-cyanic-400 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-cyanic-400" />
              Siete Mundos
            </a>
            <a 
              href="#sem" 
              className="text-sm font-medium text-slate-300 hover:text-cyanic-400 transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-cyanic-400 animate-ping"></span>
              SEM 2026
            </a>
            <a 
              href="#audiencia" 
              className="text-sm font-medium text-slate-300 hover:text-cyanic-400 transition-colors"
            >
              Para Ti
            </a>
            <a 
              href="#sponsors" 
              className="text-sm font-medium text-slate-300 hover:text-cyanic-400 transition-colors"
            >
              Auspicios
            </a>
            <a 
              href="#contacto" 
              className="text-sm font-medium text-slate-300 hover:text-cyanic-400 transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('expositor')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyanic-400 border border-cyanic-500/30 rounded-lg hover:bg-cyanic-500/10 hover:border-cyanic-400 transition-all"
            >
              Quiero Exponer
            </button>
            <button
              onClick={() => onOpenModal('sponsor')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-naval-950 bg-gradient-to-r from-cyanic-400 to-cyanic-500 rounded-lg shadow-lg shadow-cyanic-500/25 hover:shadow-cyanic-400/40 hover:scale-[1.02] transition-all"
            >
              Ser Sponsor
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyanic-400"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#mundos" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyanic-400 py-2 font-medium border-b border-white/5"
            >
              Siete Mundos
            </a>
            <a 
              href="#sem" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyanic-400 py-2 font-medium border-b border-white/5"
            >
              SEM (Electromovilidad)
            </a>
            <a 
              href="#audiencia" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyanic-400 py-2 font-medium border-b border-white/5"
            >
              Para Ti
            </a>
            <a 
              href="#sponsors" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyanic-400 py-2 font-medium border-b border-white/5"
            >
              Auspicios
            </a>
            <a 
              href="#contacto" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyanic-400 py-2 font-medium border-b border-white/5"
            >
              Contacto
            </a>
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenModal('expositor'); }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-cyanic-400 border border-cyanic-500/40 rounded-lg text-center"
            >
              Quiero Exponer
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenModal('sponsor'); }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-lg text-center"
            >
              Ser Sponsor
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
