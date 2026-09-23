'use client';

import React from 'react';
import Link from 'next/link';
import { Waves, MapPin, Mail, Calendar, Phone, Download } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type?: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-poster-midnight text-slate-300 pt-14 pb-10 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          
          {/* Col 1: Identidad y Sede */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-poster-cyan to-poster-blue flex items-center justify-center text-white shadow-lg shadow-poster-cyan/20">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="font-archivo font-extrabold text-xl tracking-tight text-white">
                VALDIVIA NÁUTICA 2026
              </span>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              Feria Náutica y Seminario de Electromovilidad Marítima (SEM). El gran punto de encuentro fluvial y marítimo del sur austral.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-poster-gold shrink-0" />
                4, 5 y 6 de Diciembre de 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-poster-cyan shrink-0" />
                Centro de Ferias Parque Saval · Isla Teja, Valdivia
              </span>
            </div>
          </div>

          {/* Col 2: Contacto & Coordinación de Auspicios */}
          <div>
            <h4 className="font-archivo font-bold text-white text-xs uppercase tracking-wider mb-4">
              Contacto & Auspicios
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href="mailto:info@valdivianautica.cl"
                  className="flex items-center gap-2 hover:text-poster-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-poster-gold shrink-0" />
                  info@valdivianautica.cl
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventasajcck@gmail.com"
                  className="flex items-center gap-2 hover:text-poster-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-poster-cyan shrink-0" />
                  ventasajcck@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="tel:+56981363976"
                  className="flex items-center gap-2 hover:text-poster-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-poster-gold shrink-0" />
                  +56 9 8136 3976
                </a>
              </li>
              <li>
                <a
                  href="tel:+56976436618"
                  className="flex items-center gap-2 hover:text-poster-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-poster-cyan shrink-0" />
                  +56 9 7643 6618
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Accesos Rápidos */}
          <div>
            <h4 className="font-archivo font-bold text-white text-xs uppercase tracking-wider mb-4">
              Enlaces Directos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-poster-cyan transition-colors">
                  El Evento (Inicio)
                </Link>
              </li>
              <li>
                <Link href="/sem" className="hover:text-poster-cyan transition-colors">
                  SEM (Seminario de Electromovilidad)
                </Link>
              </li>
              <li>
                <Link href="/expo-pesca" className="hover:text-poster-cyan transition-colors">
                  Expo Pesca
                </Link>
              </li>
              <li>
                <a href="/#sponsors" className="hover:text-poster-cyan transition-colors">
                  Auspicios & Alianzas
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="/documents/Valdivia_Nautica_2026_Dossier_Sponsors.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Valdivia_Nautica_2026_Matriz_Auspicios_Sponsors.pdf"
                  className="inline-flex items-center gap-1.5 text-poster-gold hover:text-poster-goldHover font-bold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar Dossier Oficial (PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Gatovisual credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Valdivia Náutica. Todos los derechos reservados.</p>
          <p className="text-slate-400">
            Diseñado y desarrollado en Valdivia por{' '}
            <a
              href="https://gatovisual.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-poster-gold hover:text-white font-semibold transition-colors underline decoration-poster-gold/40 underline-offset-4"
            >
              Gatovisual
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
