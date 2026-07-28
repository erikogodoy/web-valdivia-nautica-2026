'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Zap, Fish, Ship, Sailboat, Hammer } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (type?: string) => void;
}

// Social Media Icons
function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"/>
    </svg>
  );
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

          {/* Clean Minimal 4-Item Primary Nav */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            
            {/* 1. EL EVENTO (Minimal Dropdown: DESCÚBRENOS, LA CIUDAD) */}
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
                <div className="absolute top-full left-0 w-48 glass-panel p-3 rounded-2xl shadow-2xl border-white/10 mt-1 animate-fadeIn space-y-1">
                  <Link
                    href="/evento"
                    className="block font-bold text-xs uppercase tracking-wider text-white hover:text-poster-gold hover:bg-white/5 p-2.5 rounded-xl transition-colors"
                  >
                    Descúbrenos
                  </Link>
                  <Link
                    href="/valdivia"
                    className="block font-bold text-xs uppercase tracking-wider text-white hover:text-poster-cyan hover:bg-white/5 p-2.5 rounded-xl transition-colors"
                  >
                    La Ciudad
                  </Link>
                </div>
              )}
            </div>

            {/* 2. MUNDOS DEL EVENTO (Mega-Menu) */}
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
                <div className="absolute top-full -left-20 w-[500px] glass-panel p-5 rounded-2xl shadow-2xl border-white/10 mt-1 animate-fadeIn grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-poster-cyan mb-2.5">
                      Innovación & Producción
                    </div>
                    <div className="space-y-1">
                      <Link href="/sem" className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-colors group">
                        <Zap className="w-4 h-4 text-poster-cyan" />
                        <span className="font-bold text-xs text-white group-hover:text-poster-cyan">SEM 2026</span>
                      </Link>
                      <Link href="/expo-pesca" className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-colors group">
                        <Fish className="w-4 h-4 text-poster-gold" />
                        <span className="font-bold text-xs text-white group-hover:text-poster-gold">Expo Pesca</span>
                      </Link>
                      <Link href="/industria-naval" className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-colors group">
                        <Ship className="w-4 h-4 text-white" />
                        <span className="font-bold text-xs text-white group-hover:text-poster-cyan">Industria Naval</span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-poster-gold mb-2.5">
                      Comunidad & Vivencias
                    </div>
                    <div className="space-y-1">
                      <Link href="/deporte-turismo" className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-colors group">
                        <Sailboat className="w-4 h-4 text-poster-gold" />
                        <span className="font-bold text-xs text-white group-hover:text-poster-gold">Deporte & Remo</span>
                      </Link>
                      <Link href="/oficios" className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-colors group">
                        <Hammer className="w-4 h-4 text-poster-cyan" />
                        <span className="font-bold text-xs text-white group-hover:text-poster-cyan">Oficios de Ribera</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. PARTICIPA (Minimal Dropdown: EXPOSITORES, AUSPICIADORES) */}
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
                <div className="absolute top-full right-0 w-48 glass-panel p-3 rounded-2xl shadow-2xl border-white/10 mt-1 animate-fadeIn space-y-1">
                  <Link
                    href="/expositores"
                    className="block font-bold text-xs uppercase tracking-wider text-white hover:text-poster-gold hover:bg-white/5 p-2.5 rounded-xl transition-colors"
                  >
                    Expositores
                  </Link>
                  <Link
                    href="/sponsors"
                    className="block font-bold text-xs uppercase tracking-wider text-white hover:text-poster-cyan hover:bg-white/5 p-2.5 rounded-xl transition-colors"
                  >
                    Auspiciadores
                  </Link>
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

          {/* Social Media Links (Replaces duplicate CTAs) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://facebook.com/valdivianautica"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-poster-cyan hover:scale-110 transition-all rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Facebook Valdivia Náutica"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com/valdivianautica"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-poster-gold hover:scale-110 transition-all rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Instagram Valdivia Náutica"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="https://instagram.com/valdivianautica" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-poster-gold p-1">
              <InstagramIcon className="w-5 h-5" />
            </a>
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
              Descúbrenos
            </Link>
            <Link href="/valdivia" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              La Ciudad
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
              Deporte & Remo
            </Link>
            <Link href="/expositores" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Expositores
            </Link>
            <Link href="/sponsors" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 hover:text-poster-cyan py-2 text-sm font-semibold border-b border-white/5">
              Auspiciadores
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
