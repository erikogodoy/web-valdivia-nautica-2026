'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import SemRegistrationModal from '@/components/ui/SemRegistrationModal';
import SponsorsSection from '@/components/ui/SponsorsSection';
import { Zap, Calendar, MapPin, Download, ArrowRight, BatteryCharging, Ship, Cpu, Check, CreditCard, Video, GraduationCap, Ticket } from 'lucide-react';

export default function SemPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type?: string;
    level?: string;
  }>({
    isOpen: false,
    type: 'sponsor',
    level: '',
  });

  const [semModalState, setSemModalState] = useState<{
    isOpen: boolean;
    level: string;
  }>({
    isOpen: false,
    level: 'general',
  });

  const handleOpenModal = (type = 'sponsor', level = '') => {
    if (type === 'sem') {
      setSemModalState({
        isOpen: true,
        level: level || 'general',
      });
      return;
    }
    setModalState({
      isOpen: true,
      type,
      level,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenSemModal = (level = 'general') => {
    setSemModalState({
      isOpen: true,
      level,
    });
  };

  const handleCloseSemModal = () => {
    setSemModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-16 bg-poster-midnight text-white min-h-screen">
        {/* SEM Hero Header */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-poster-cyan/10 border border-poster-cyan/30 text-poster-cyan text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4 text-poster-cyan" />
              <span>Seminario Oficial · Valdivia Náutica 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-archivo font-extrabold tracking-tight mb-6">
              SEM <span className="text-poster-cyan">2026</span>
            </h1>

            <p className="text-xl sm:text-2xl font-light text-slate-200 mb-6 font-sans">
              Seminario de Electromovilidad Marítima
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
              El principal foro del Cono Sur dedicado a la descarbonización del transporte fluvial y marítimo, propulsión eléctrica y solar, tecnología portuaria e innovación naval sostenible.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 mb-10">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-poster-gold" />
                4, 5 y 6 de Diciembre 2026
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-poster-cyan" />
                Centro de Ferias Parque Saval · Isla Teja, Valdivia
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenSemModal('general')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover hover:scale-[1.03] transition-all shadow-xl shadow-poster-gold/25"
              >
                <Ticket className="w-4 h-4" />
                <span>Inscribirme en SEM 2026</span>
              </button>

              <a
                href="/documents/Valdivia_Nautica_2026_Dossier_Sponsors.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Valdivia_Nautica_2026_Matriz_Auspicios_Sponsors.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all"
              >
                <Download className="w-4 h-4 text-poster-cyan" />
                <span>Descargar Dossier SEM</span>
              </a>
            </div>
          </div>
        </section>

        {/* Ejes Temáticos del SEM */}
        <section className="py-16 border-t border-white/10 bg-poster-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-archivo font-bold text-center mb-12">
              Ejes Estratégicos del <span className="text-poster-cyan">Seminario</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-cyan/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-poster-cyan/10 flex items-center justify-center mb-5 text-poster-cyan">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Propulsión Eléctrica & Baterías
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Sistemas de tracción limpia para embarcaciones fluviales, transbordadores y naves de pasaje. Bancos de baterías, autonomía y carga rápida en muelles.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-gold/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-poster-gold/10 flex items-center justify-center mb-5 text-poster-gold">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Astilleros e Innovación Naval
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  La experiencia de astilleros líderes del cono sur en diseño y construcción de naves con menor huella de carbono, optimización hidrodinámica y nuevos materiales.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-archivo text-lg font-bold text-white mb-2">
                  Políticas Públicas & Red Fluvial
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Modelos de concesión, infraestructura de puertos fluviales, normativa de seguridad marítima y articulación público-privada para la descarbonización.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN OFICIAL DE INSCRIPCIÓN Y PASES SEM 2026 */}
        <section id="inscripcion" className="py-20 border-t border-white/10 bg-gradient-to-b from-poster-midnight via-[#031530] to-poster-midnight relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-archivo font-bold uppercase tracking-[0.2em] text-poster-cyan">
                Acreditación & Entradas
              </span>
              <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight mt-2">
                Pases y Acreditación <span className="text-poster-gold">SEM 2026</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans leading-relaxed">
                Selecciona tu modalidad, completa tu ficha de registro y obtén inmediatamente los datos para la transferencia bancaria oficial.
              </p>
            </div>

            {/* 3 Tarjetas de Inscripción */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              
              {/* Tarjeta 1: General (Presencial) */}
              <div className="p-7 rounded-3xl bg-poster-dark/90 border border-poster-cyan shadow-xl shadow-poster-cyan/15 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-poster-cyan/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-poster-cyan/15 border border-poster-cyan/30 text-poster-cyan text-[11px] font-bold uppercase tracking-wider mb-4">
                    Acceso Total 3 Días
                  </div>
                  <h3 className="font-archivo text-xl font-extrabold text-white mb-1">
                    Inscripción General
                  </h3>
                  <div className="text-3xl font-archivo font-extrabold text-poster-gold mb-4">
                    $100.000 <span className="text-xs font-normal text-slate-300">CLP</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Pase presencial completo para profesionales, armadores, proveedores y ejecutivos del sector marítimo y naval.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-cyan shrink-0 mt-0.5" />
                      <span>Acceso presencial a los 3 días de conferencias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-cyan shrink-0 mt-0.5" />
                      <span>Acreditación con credencial oficial SEM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-cyan shrink-0 mt-0.5" />
                      <span>Coffee breaks oficiales y rondas de networking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-cyan shrink-0 mt-0.5" />
                      <span>Certificado oficial de asistencia y ponencias</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenSemModal('general')}
                  className="w-full py-3.5 px-6 rounded-xl bg-poster-cyan text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-poster-cyan/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Inscribirme y Transferir</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tarjeta 2: Streaming (Online) */}
              <div className="p-7 rounded-3xl bg-poster-dark/80 border border-poster-gold/60 shadow-lg shadow-poster-gold/10 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-poster-gold/15 border border-poster-gold/30 text-poster-gold text-[11px] font-bold uppercase tracking-wider mb-4">
                    Transmisión Online HD
                  </div>
                  <h3 className="font-archivo text-xl font-extrabold text-white mb-1">
                    Inscripción Streaming
                  </h3>
                  <div className="text-3xl font-archivo font-extrabold text-poster-gold mb-4">
                    $50.000 <span className="text-xs font-normal text-slate-300">CLP</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Sigue en directo todas las exposiciones desde cualquier lugar de Chile y el extranjero con interacción remota.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-gold shrink-0 mt-0.5" />
                      <span>Señal en vivo HD de todos los paneles técnicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-gold shrink-0 mt-0.5" />
                      <span>Acceso on-demand a las grabaciones del evento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-gold shrink-0 mt-0.5" />
                      <span>Descarga de presentaciones y material de ponentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-gold shrink-0 mt-0.5" />
                      <span>Certificado digital de participación emitido por SEM</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenSemModal('streaming')}
                  className="w-full py-3.5 px-6 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover transition-all shadow-lg shadow-poster-gold/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Inscribirme en Streaming</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tarjeta 3: Estudiantes (Acreditado) */}
              <div className="p-7 rounded-3xl bg-poster-dark/80 border border-white/15 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-4">
                    Tarifa Rebajada
                  </div>
                  <h3 className="font-archivo text-xl font-extrabold text-white mb-1">
                    Inscripción Estudiantes
                  </h3>
                  <div className="text-3xl font-archivo font-extrabold text-white mb-4">
                    $25.000 <span className="text-xs font-normal text-slate-300">CLP</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Tarifa preferencial para alumnos de pregrado, magíster y carreras técnicas de universidades e institutos del país.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span>Acceso presencial a conferencias en Parque Saval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span>Acreditación con credencial de estudiante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span>Certificado oficial de asistencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span>Presentar certificado de alumno regular en el ingreso</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenSemModal('estudiante')}
                  className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Inscribirme como Estudiante</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Banner de Pago Seguro */}
            <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-3 text-xs text-slate-300 font-sans text-center">
              <CreditCard className="w-4 h-4 text-poster-gold shrink-0" />
              <span>Modalidad habilitada: <strong>Transferencia Bancaria Oficial</strong> a cuenta corriente de Valdivia Náutica SpA (Banco Santander).</span>
            </div>

          </div>
        </section>

        {/* Sponsor Packages Section */}
        <SponsorsSection onOpenModal={handleOpenModal} />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      {/* Sponsor / Contact Modal */}
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />

      {/* SEM Registration & Bank Transfer Modal */}
      <SemRegistrationModal
        isOpen={semModalState.isOpen}
        onClose={handleCloseSemModal}
        initialLevel={semModalState.level}
      />
    </>
  );
}
