'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Waves, Menu, X, Anchor, Compass, Zap, Fish, Sailboat, Hammer, Building2 } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (type?: string) => void;
}

const NAV_LINKS = [
  { href: '/evento', label: 'El Evento' },
  { href: '/sem', label: 'SEM 2026' },
  { href: '/expo-pesca', label: 'Expo Pesca' },
  { href: '/industria-naval', label: 'Industria Naval' },
  { href: '/deporte-turismo', label: 'Deporte & Turismo' },
  { href: '/oficios', label: 'Oficios' },
  { href: '/expositores', label: 'Expositores' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/valdivia', label: 'Valdivia' },
];

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-poster-cyan to-poster-blue flex items-center justify-center text-white shadow-lg shadow-poster-cyan/20 group-hover:scale-105 transition-transform">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-poster-cyan transition-colors text-lg font-sans">
                VALDIVIA NĀUTICA
              </span>
              <span className="text-[9px] uppercase tracking-widest text-poster-gold font-bold -mt-1">
                4 · 5 · 6 DICIEMBRE 2026
              </span>
            </div>
          </Link>

          {/* Navigation Links - Semantic <nav> with clean routes for Google Sitelinks */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-poster-gold border-poster-gold'
                      : 'text-slate-300 hover:text-poster-cyan border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('expositor')}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-poster-cyan border border-poster-cyan/30 rounded-lg hover:bg-poster-cyan/10 hover:border-poster-cyan transition-all"
            >
              Quiero Exponer
            </button>
            <button
              onClick={() => onOpenModal('sponsor')}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-lg shadow-md shadow-poster-gold/20 hover:bg-poster-goldHover transition-all"
            >
              Ser Sponsor
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5"
            >
              Portada (Inicio)
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-sm font-semibold border-b border-white/5 ${
                  pathname === link.href ? 'text-poster-gold' : 'text-slate-200 hover:text-poster-cyan'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenModal('expositor'); }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-poster-cyan border border-poster-cyan/40 rounded-lg text-center"
            >
              Quiero Exponer
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenModal('sponsor'); }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-lg text-center"
            >
              Ser Sponsor
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
