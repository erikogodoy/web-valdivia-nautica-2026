'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Anchor, Sparkles, Zap, Fish, Ship, Sailboat, Hammer, MapPin, Building2 } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (type?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-gradient-to-b from-poster-midnight/90 via-poster-midnight/40 to-transparent py-4'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Oficial Header */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none rounded-lg p-1"
            aria-label="Valdivia Náutica 2026 Inicio"
          >
            <img
              src="/images/logo-header.svg"
              alt="Feria Valdivia Náutica"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Clean 4-Item Primary Nav with Mega-Menu Dropdowns */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            
            {/* 1. EL EVENTO */}
            <div className="relative py-2" onMouseEnter={() => setActiveDropdown('evento')}>
              <button
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors py-1 border-b-2 ${
                  pathname.startsWith('/evento') || activeDropdown === 'evento'
                    ? 'text-poster-gold border-poster-gold'
                    : 'text-slate-200 hover:text-poster-cyan border-transparent'
                }`}
              >
                El Evento
                <ChevronDown className="w-3.5 h-3.5 text-poster-cyan" />
              </button>

              {activeDropdown === 'evento' && (
                <div className="absolute top-full left-0 w-80 glass-panel p-5 rounded-2xl shadow-2xl border-white/10 mt-1 animate-fadeIn">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-poster-cyan mb-3">
                    Conoce Valdivia Náutica
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/evento"
                      className="block group hover:bg-white/5 p-2 rounded-xl transition-colors"
                    >
                      <div className="font-bold text-sm text-white group-hover:text-poster-gold">
                        Manifiesto & Propósito
                      </div>
                      <div className="text-xs text-slate-300">
                        Por qué el agua es desarrollo, territorio e identidad.
                      </div>
                    </Link>
                    <Link
                      href="/valdivia"
                      className="block group hover:bg-white/5 p-2 rounded-xl transition-colors"
                    >
                      <div className="font-bold text-sm text-white group-hover:text-poster-cyan flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-poster-cyan" />
                        Parque Saval & Sede
                      </div>
                      <div className="text-xs text-slate-300">
                        Isla Teja, Valdivia — 4, 5 y 6 de Diciembre.
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. MUNDOS & CONTENIDOS (MEGA MENU) */}
            <div className="relative py-2" onMouseEnter={() => setActiveDropdown('mundos')}>
              <button
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors py-1 border-b-2 ${
                  activeDropdown === 'mundos'
                    ? 'text-poster-gold border-poster-gold'
                    : 'text-slate-200 hover:text-poster-cyan border-transparent'
                }`}
              >
                Mundos del Evento
                <ChevronDown className="w-3.5 h-3.5 text-poster-cyan" />
              </button>

              {activeDropdown === 'mundos' && (
                <div className="absolute top-full -left-20 w-[540px] glass-panel p-6 rounded-2xl shadow-2xl border-white/10 mt-1 animate-fadeIn grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-poster-cyan mb-3">
                      Innovación & Producción
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="/sem"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <Zap className="w-4 h-4 text-poster-cyan mt-0.5" />
                        <div>
                          <div className="font-bold text-xs text-white group-hover:text-poster-cyan">SEM 2026</div>
                          <div className="text-[11px] text-slate-300">Electromovilidad Marítima</div>
                        </div>
                      </Link>

                      <Link
                        href="/expo-pesca"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <Fish className="w-4 h-4 text-poster-gold mt-0.5" />
                        <div>
                          <div className="font-bold text-xs text-white group-hover:text-poster-gold">Expo Pesca</div>
                          <div className="text-[11px] text-slate-300">Pesca Deportiva & Marcas</div>
                        </div>
                      </Link>

                      <Link
                        href="/industria-naval"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <Ship className="w-4 h-4 text-white mt-0.5" />
                        <div>
                          <div className="font-bold text-xs text-white group-hover:text-poster-cyan">Industria Naval</div>
                          <div className="text-[11px] text-slate-300">ASENAV & Astilleros</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-poster-gold mb-3">
                      Comunidad & Vivencias
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="/deporte-turismo"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <Sailboat className="w-4 h-4 text-poster-gold mt-0.5" />
                        <div>
                          <div className="font-bold text-xs text-white group-hover:text-poster-gold">Deporte & Remo</div>
                          <div className="text-[11px] text-slate-300">Regatas & Kayak</div>
                        </div>
                      </Link>

                      <Link
                        href="/oficios"
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <Hammer className="w-4 h-4 text-poster-cyan mt-0.5" />
                        <div>
                          <div className="font-bold text-xs text-white group-hover:text-poster-cyan">Oficios de Ribera</div>
                          <div className="text-[11px] text-slate-300">Carpintería & Patrimonio</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. PARTICIPA & AUSPICIOS */}
            <div className="relative py-2" onMouseEnter={() => setActiveDropdown('participa')}>
              <button
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors py-1 border-b-2 ${
                  activeDropdown === 'participa'
                    ? 'text-poster-gold border-poster-gold'
                    : 'text-slate-200 hover:text-poster-cyan border-transparent'
                }`}
              >
                Participa
                <ChevronDown className="w-3.5 h-3.5 text-poster-cyan" />
              </button>

              {activeDropdown === 'participa' && (
                <div className="absolute top-full right-0 w-72 glass-panel p-5 rounded-2xl shadow-2xl border-white/10 mt-1 animate-fadeIn">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-poster-cyan mb-3">
                    Oportunidades 2026
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/expositores"
                      className="block p-2 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="font-bold text-xs text-white group-hover:text-poster-gold flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-poster-gold" />
                        Expositores (Stands)
                      </div>
                      <div className="text-[11px] text-slate-300">Reserva tu espacio comercial B2B.</div>
                    </Link>

                    <Link
                      href="/sponsors"
                      className="block p-2 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="font-bold text-xs text-white group-hover:text-poster-cyan flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-poster-cyan" />
                        Auspiciadores
                      </div>
                      <div className="text-[11px] text-slate-300">Niveles Litio, Cobalto, Níquel.</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. CONTACTO DIRECTO */}
            <button
              onClick={() => onOpenModal('general')}
              className="text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-poster-cyan transition-colors"
            >
              Contacto & Prensa
            </button>

          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('expositor')}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-lg shadow-lg shadow-poster-gold/20 hover:bg-poster-goldHover hover:scale-105 transition-all"
            >
              Quiero Exponer
            </button>

            <button
              onClick={() => onOpenModal('sponsor')}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white glass-panel border-poster-cyan/50 rounded-lg hover:bg-poster-cyan/20 transition-all backdrop-blur-md"
            >
              Ser Sponsor
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none"
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Portada (Inicio)
            </Link>
            <Link href="/evento" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              El Evento & Parque Saval
            </Link>
            <Link href="/sem" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              SEM 2026 (Electromovilidad)
            </Link>
            <Link href="/expo-pesca" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Expo Pesca
            </Link>
            <Link href="/industria-naval" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Industria Naval
            </Link>
            <Link href="/deporte-turismo" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Deporte, Remo & Turismo
            </Link>
            <Link href="/expositores" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Expositores & Stands
            </Link>
            <Link href="/sponsors" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Auspiciadores
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenModal('expositor'); }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-poster-midnight bg-poster-gold rounded-lg text-center"
            >
              Quiero Exponer
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenModal('sponsor'); }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white glass-panel border-poster-cyan/40 rounded-lg text-center"
            >
              Ser Sponsor
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
