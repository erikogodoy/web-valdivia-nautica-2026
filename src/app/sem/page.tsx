'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import SemRegistrationModal from '@/components/ui/SemRegistrationModal';
import SponsorsSection from '@/components/ui/SponsorsSection';
import {
  Zap,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  BatteryCharging,
  Ship,
  Cpu,
  Check,
  CreditCard,
  Ticket,
  ShieldCheck,
} from 'lucide-react';

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
        {/* 1. SEM HERO HEADER CON LOGO OFICIAL */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Logo Oficial SEM 2026 con SEO semantic H1 */}
            <div className="flex justify-center items-center mb-8">
              <h1 className="sr-only">SEM 2026 — Seminario de Electromovilidad Marítima · Valdivia Náutica</h1>
              <img
                src="/images/logo-sem-2026.png"
                alt="Logo SEM 2026 — Seminario de Electromovilidad Marítima"
                className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] h-auto object-contain mx-auto filter drop-shadow-[0_20px_45px_rgba(186,237,57,0.3)] transition-transform duration-300"
              />
            </div>

            {/* Pastillas de Fecha y Lugar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300 mb-10">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-poster-semGreen" />
                <span>4, 5 y 6 de Diciembre 2026</span>
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-poster-semGreen" />
                <span>Centro de Ferias Parque Saval · Isla Teja, Valdivia</span>
              </span>
            </div>

            {/* CTAs Principales: 1. Inscripción | 2. Ser Sponsor */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <button
                onClick={() => handleOpenSemModal('general')}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-poster-semGreen text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white hover:scale-[1.03] transition-all shadow-xl shadow-poster-semGreen/25"
              >
                <Ticket className="w-4 h-4" />
                <span>Inscribirme en SEM 2026</span>
              </button>

              <button
                onClick={() => handleOpenModal('sponsor', 'Bronce')}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-poster-semGreen hover:text-poster-midnight border border-poster-semGreen/60 text-white hover:border-poster-semGreen text-xs font-bold uppercase tracking-wider hover:scale-[1.03] transition-all shadow-xl"
              >
                <ShieldCheck className="w-4 h-4 text-poster-semGreen group-hover:text-poster-midnight" />
                <span>Ser Sponsor / Auspiciador</span>
              </button>
            </div>

            {/* Enlace secundario para descarga del Dossier */}
            <div className="mt-5 flex items-center justify-center">
              <a
                href="/documents/Valdivia_Nautica_2026_Dossier_Sponsors.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Valdivia_Nautica_2026_Matriz_Auspicios_Sponsors.pdf"
                className="text-xs text-slate-400 hover:text-poster-semGreen transition-colors inline-flex items-center gap-1.5 underline decoration-white/20 underline-offset-4"
              >
                <Download className="w-3.5 h-3.5 text-poster-semGreen" />
                <span>Descargar Dossier Oficial de Auspicios SEM (PDF)</span>
              </a>
            </div>

          </div>
        </section>

        {/* 2. DESCRIPCIÓN DEL SEM CON FONDO FOTOGRÁFICO DE MÁXIMA AMPLITUD Y OVERLAY */}
        <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-poster-midnight">
          {/* Fondo fotográfico ampliado a la derecha sin recorte por parallax */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[64%] lg:w-[60%] h-full overflow-hidden pointer-events-none">
            <img
              src="/images/sem-auditorio-conferencia.jpg"
              alt="Auditorio y conferencias del Seminario de Electromovilidad Marítima SEM en Parque Saval"
              className="w-full h-full object-cover object-[center_72%] filter brightness-95 contrast-[1.05]"
            />
            {/* Gradiente direccional para fundir suavemente con el fondo medianoche de la izquierda */}
            <div className="absolute inset-0 bg-gradient-to-r from-poster-midnight via-poster-midnight/80 via-20% md:via-28% to-transparent" />
            {/* Suave degradado superior e inferior para transición perfecta */}
            <div className="absolute inset-0 bg-gradient-to-b from-poster-midnight via-transparent via-15% to-poster-midnight" />
          </div>

          {/* Contenido limpio alineado a la izquierda */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-archivo font-extrabold text-white tracking-tight leading-tight mb-8">
                El Epicentro de la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-semGreen via-white to-poster-semGreen">
                  Descarbonización Marítima y Fluvial
                </span>
              </h2>

              <div className="space-y-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light">
                {/* Párrafo 2 */}
                <p>
                  El <strong className="text-white font-medium">Seminario de Electromovilidad Marítima (SEM 2026)</strong> es el punto de encuentro anual donde convergen los principales astilleros, centros de investigación universitaria, armadores, proveedores globales de sistemas de propulsión eléctrica y los organismos rectores del Estado (Ministerio de Transportes, Corfo y la Dirección General del Territorio Marítimo y Marina Mercante, DIRECTEMAR).
                </p>

                {/* Párrafo 4 */}
                <p className="text-slate-200">
                  El programa incluye ponencias magistrales internacionales, paneles de debate sobre políticas públicas, mesas de negocios B2B y demostraciones reales de navegación cero emisiones sobre las aguas del río Calle-Calle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EJES ESTRATÉGICOS DEL SEMINARIO */}
        <section className="py-20 border-b border-white/10 bg-poster-dark/40 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-archivo font-bold uppercase tracking-[0.2em] text-poster-semGreen">
                Pilares Temáticos
              </span>
              <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight mt-2">
                Ejes Estratégicos del <span className="text-poster-semGreen">Seminario</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans leading-relaxed">
                Cuatro áreas clave que marcarán el rumbo de la transformación tecnológica naval durante el encuentro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Eje 1 */}
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-semGreen/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-poster-semGreen/10 flex items-center justify-center mb-5 text-poster-semGreen">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <h3 className="font-archivo text-lg font-bold text-white mb-2">
                    Propulsión Eléctrica & Baterías
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Sistemas de tracción limpia para embarcaciones fluviales, transbordadores y naves de pasaje. Bancos de baterías LiFePO4, almacenamiento seguro y autonomía.
                  </p>
                </div>
              </div>

              {/* Eje 2 */}
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-semGreen/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-poster-semGreen/10 flex items-center justify-center mb-5 text-poster-semGreen">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-archivo text-lg font-bold text-white mb-2">
                    Electrificación de Muelles & Carga
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Infraestructura de carga rápida en puertos fluviales y costeros, microrredes con energías renovables y conexión de energía a tierra (cold ironing).
                  </p>
                </div>
              </div>

              {/* Eje 3 */}
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-semGreen/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-poster-semGreen/10 flex items-center justify-center mb-5 text-poster-semGreen">
                    <Ship className="w-6 h-6" />
                  </div>
                  <h3 className="font-archivo text-lg font-bold text-white mb-2">
                    Astilleros & Arquitectura Naval
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Diseño de cascos hidrodinámicos en aluminio y materiales ligeros, reconversión (retrofitting) de flota existente y optimización de eficiencia de casco.
                  </p>
                </div>
              </div>

              {/* Eje 4 */}
              <div className="p-7 rounded-2xl bg-poster-dark/80 border border-white/10 hover:border-poster-semGreen/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-poster-semGreen/10 flex items-center justify-center mb-5 text-poster-semGreen">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-archivo text-lg font-bold text-white mb-2">
                    Marco Regulatorio & Políticas Públicas
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Normativa de seguridad marítima DIRECTEMAR, modelos de concesión de transporte público fluvial, incentivos tributarios y articulación público-privada.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SECCIÓN OFICIAL DE INSCRIPCIÓN Y PASES SEM 2026 */}
        <section id="inscripcion" className="py-20 border-t border-white/10 bg-gradient-to-b from-poster-midnight via-[#031530] to-poster-midnight relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-archivo font-bold uppercase tracking-[0.2em] text-poster-semGreen">
                Acreditación & Entradas
              </span>
              <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight mt-2">
                Pases y Acreditación <span className="text-poster-semGreen">SEM 2026</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans leading-relaxed">
                Selecciona tu modalidad, completa tu ficha de registro y obtén inmediatamente los datos para la transferencia bancaria oficial.
              </p>
            </div>

            {/* 3 Tarjetas de Inscripción */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              
              {/* Tarjeta 1: General (Presencial) */}
              <div className="p-7 rounded-3xl bg-poster-dark/90 border-2 border-poster-semGreen shadow-xl shadow-poster-semGreen/20 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-poster-semGreen/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-poster-semGreen/15 border border-poster-semGreen/30 text-poster-semGreen text-[11px] font-bold uppercase tracking-wider mb-4">
                    Acceso Total 3 Días
                  </div>
                  <h3 className="font-archivo text-xl font-extrabold text-white mb-1">
                    Inscripción General
                  </h3>
                  <div className="text-3xl font-archivo font-extrabold text-poster-semGreen mb-4">
                    $100.000 <span className="text-xs font-normal text-slate-300">CLP</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Pase presencial completo para profesionales, armadores, proveedores y ejecutivos del sector marítimo y naval.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Acceso presencial a los 3 días de conferencias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Acreditación con credencial oficial SEM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Coffee breaks oficiales y rondas de networking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Certificado oficial de asistencia y ponencias</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenSemModal('general')}
                  className="w-full py-3.5 px-6 rounded-xl bg-poster-semGreen text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-poster-semGreen/25 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Inscribirme y Transferir</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tarjeta 2: Streaming (Online) */}
              <div className="p-7 rounded-3xl bg-poster-dark/80 border border-white/20 hover:border-poster-semGreen/60 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-poster-semGreen/15 border border-poster-semGreen/30 text-poster-semGreen text-[11px] font-bold uppercase tracking-wider mb-4">
                    Transmisión Online HD
                  </div>
                  <h3 className="font-archivo text-xl font-extrabold text-white mb-1">
                    Inscripción Streaming
                  </h3>
                  <div className="text-3xl font-archivo font-extrabold text-white mb-4">
                    $50.000 <span className="text-xs font-normal text-slate-300">CLP</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Sigue en directo todas las exposiciones desde cualquier lugar de Chile y el extranjero con interacción remota.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Señal en vivo HD de todos los paneles técnicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Acceso on-demand a las grabaciones del evento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Descarga de presentaciones y material de ponentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Certificado digital de participación emitido por SEM</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenSemModal('streaming')}
                  className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-poster-semGreen hover:text-poster-midnight border border-white/20 hover:border-poster-semGreen text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Inscribirme en Streaming</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tarjeta 3: Estudiantes (Acreditado) */}
              <div className="p-7 rounded-3xl bg-poster-dark/80 border border-white/15 hover:border-poster-semGreen/50 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all">
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
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Acceso presencial a conferencias en Parque Saval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Acreditación con credencial de estudiante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Certificado oficial de asistencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-poster-semGreen shrink-0 mt-0.5" />
                      <span>Presentar certificado de alumno regular en el ingreso</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenSemModal('estudiante')}
                  className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-poster-semGreen hover:text-poster-midnight border border-white/20 hover:border-poster-semGreen text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Inscribirme como Estudiante</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Banner de Pago Seguro */}
            <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-3 text-xs text-slate-300 font-sans text-center">
              <CreditCard className="w-4 h-4 text-poster-semGreen shrink-0" />
              <span>Modalidad habilitada: <strong>Transferencia Bancaria Oficial</strong> a cuenta corriente de Valdivia Náutica SpA (Banco Santander).</span>
            </div>

          </div>
        </section>

        {/* 6. SPONSOR PACKAGES SECTION */}
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
