'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Waves, 
  Building2, 
  Flame, 
  Zap, 
  Fish, 
  Sailboat, 
  Ship, 
  Users, 
  Compass, 
  Hammer,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface ImpactManifestoProps {
  onOpenModal?: (type?: string) => void;
}

const STATS = [
  {
    icon: Building2,
    value: '+100',
    label: 'Expositores y Marcas',
    detail: 'Astilleros, pesca, náutica y tecnología',
    accent: 'text-poster-gold',
    border: 'border-poster-gold/30',
  },
  {
    icon: Flame,
    value: '3',
    label: 'Días de Evento',
    detail: '4, 5 y 6 de Diciembre 2026 · Parque Saval',
    accent: 'text-poster-cyan',
    border: 'border-poster-cyan/30',
  },
  {
    icon: Waves,
    value: '7',
    label: 'Mundos del Agua',
    detail: 'El ecosistema fluvial y marítimo del sur',
    accent: 'text-white',
    border: 'border-white/30',
  },
];

const WORLDS = [
  {
    id: 'sem',
    name: 'Electromovilidad Marítima',
    modalType: 'sem',
    title: 'La transición energética fluvial nace en los ríos del sur',
    desc: 'Salón de Electromovilidad Marítima co-organizado con la Universidad Austral de Chile (UACh) y THEMS. Conferencias con expertos internacionales, exhibición del catamarán solar en vivo en el Calle-Calle y rondas técnicas de descarbonización de flotas.',
    ctaText: 'Acreditación SEM 2026',
    icon: Zap,
    accent: 'poster-cyan',
  },
  {
    id: 'pesca',
    name: 'Pesca y Acuicultura',
    modalType: 'general',
    title: 'Pesca deportiva sustentable y saberes de la cuenca',
    desc: 'El gran punto de encuentro para pescadores aficionados y profesionales. Campeonatos de orilla y embarcada en la confluencia de los ríos Cruces y Calle-Calle, equipamiento de marcas líderes, señuelos de última generación y clínicas de atado de moscas.',
    ctaText: 'Información de Campeonatos',
    icon: Fish,
    accent: 'poster-gold',
  },
  {
    id: 'deporte',
    name: 'Deporte y Aventura',
    modalType: 'general',
    title: 'La capital del remo chileno en plena competencia',
    desc: 'Espectáculo náutico de primer nivel con los históricos clubes centenarios valdivianos (Phoenix, Arturo Prat, Centenario) y remeros olímpicos. Incluye bautizos náuticos abiertos de kayak para jóvenes y paseos fluviales guiados.',
    ctaText: 'Ver Actividades Deportivas',
    icon: Sailboat,
    accent: 'poster-cyan',
  },
  {
    id: 'naval',
    name: 'Industria Naval y Servicios',
    modalType: 'expositor',
    title: 'Vanguardia en construcción naval y proveeduría técnica',
    desc: 'Exhibición de la potente industria de astilleros encabezada por ASENAV, armadores comerciales, motores marinos de alta eficiencia, soluciones de telemetría y ruedas de negocios nacionales e internacionales.',
    ctaText: 'Solicitar Stand B2B',
    icon: Ship,
    accent: 'white',
  },
  {
    id: 'comunidad',
    name: 'Comunidad y Educación',
    modalType: 'general',
    title: 'Integración ciudadana, escuelas y futuro fluvial',
    desc: 'Espacio de divulgación y encuentro donde universidades, centros de formación técnica, colegios de la región y organizaciones ciudadanas dialogan sobre la relación histórica y futura de Valdivia con sus ríos y humedales.',
    ctaText: 'Participar con Escuela / Universidad',
    icon: Users,
    accent: 'poster-cyan',
  },
  {
    id: 'turismo',
    name: 'Turismo y Experiencias',
    modalType: 'general',
    title: 'Sabores ribereños, cerveza artesanal y navegación',
    desc: 'La experiencia sensorial de Valdivia: paseos en embarcaciones turísticas por el Santuario de la Naturaleza Carlos Anwandter, patio de gastronomía marina y fluvial en vivo, y degustación de cervecerías artesanales de Los Ríos.',
    ctaText: 'Descubrir Experiencias',
    icon: Compass,
    accent: 'poster-gold',
  },
  {
    id: 'patrimonio',
    name: 'Ciencia, Patrimonio e Innovación',
    modalType: 'general',
    title: 'Carpintería de ribera y memoria viva en madera nativa',
    desc: 'Demostraciones magistrales en directo donde maestros carpinteros de ribera construyen y calafatean embarcaciones tradicionales de madera. Un tributo al patrimonio vivo que define la identidad fluvial del sur austral.',
    ctaText: 'Ver Talleres de Oficios',
    icon: Hammer,
    accent: 'poster-gold',
  },
];

export default function ImpactManifesto({ onOpenModal }: ImpactManifestoProps) {
  const [activeMundoIndex, setActiveMundoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveMundoIndex((prev) => (prev === WORLDS.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveMundoIndex((prev) => (prev === 0 ? WORLDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveMundoIndex((prev) => (prev === WORLDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="manifiesto" className="relative pt-10 sm:pt-16 pb-20 sm:pb-28 bg-gradient-to-b from-poster-midnight via-[#001744] to-poster-midnight text-white overflow-hidden border-b border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-96 h-96 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 -translate-y-1/2 w-96 h-96 bg-poster-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. TOP CONTAINER: Headline + Paragraph + Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline & Narrative Statement */}
        <div className="max-w-5xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-archivo font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            El agua no es paisaje. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">
              Es desarrollo, territorio e identidad viva.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed font-sans max-w-4xl font-normal"
          >
            <strong className="text-white font-semibold">Valdivia Náutica 2026</strong> es el gran encuentro del sur de Chile donde el río se transforma en el motor del futuro. Durante tres días en el Parque Saval, convergen la vanguardia de los astilleros navales, la revolución de la electromovilidad marítima (SEM), la pesca deportiva, el remo histórico y los oficios tradicionales; conectando a la industria, la ciencia, la gastronomía y la comunidad en una sola cuenca viva.
          </motion.p>
        </div>

        {/* 3 Main Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`p-7 rounded-2xl bg-poster-dark/70 backdrop-blur-md border ${stat.border} hover:scale-[1.02] transition-all duration-300 shadow-xl group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <Icon className={`w-5 h-5 ${stat.accent}`} />
                  </div>
                </div>
                
                <div className={`text-4xl sm:text-5xl font-archivo font-extrabold ${stat.accent} mb-1 tracking-tight`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white font-sans mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* 2. TRUE FULL-WIDTH EDGE-TO-EDGE PHOTOGRAPHY: Río Calle-Calle (100vw Bleed with Parallax) */}
      <div
        ref={parallaxRef}
        className="w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] relative overflow-hidden my-14 sm:my-20 border-y border-white/15"
      >
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 -top-[20%] -bottom-[20%] h-[140%] w-full will-change-transform"
        >
          <img
            src="/images/valdivia-calle-calle-rio.jpg"
            alt="Río Calle-Calle al amanecer en Valdivia"
            className="w-full h-full object-cover filter brightness-95 scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-poster-midnight via-transparent to-poster-midnight/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-poster-midnight/60 via-transparent to-poster-midnight/60 pointer-events-none" />
      </div>

      {/* 3. LOS 7 MUNDOS DEL ENCUENTRO: MENÚ DE CATEGORÍAS + SLIDER DE ANCHO COMPLETO CON AUTOPLAY */}
      <div id="mundos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Section Header (Clean without counter) */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
            Los 7 Mundos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">Encuentro</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2">
            Explora las áreas temáticas que convergen en la gran fiesta fluvial de Valdivia.
          </p>
        </div>

        {/* 7 Worlds Icon Menu */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-start mb-10">
          {WORLDS.map((mundo, idx) => {
            const Icon = mundo.icon;
            const isSelected = activeMundoIndex === idx;
            return (
              <button
                key={mundo.id}
                onClick={() => setActiveMundoIndex(idx)}
                className={`group flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                  isSelected ? 'scale-105 opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                {/* Clean Icon */}
                <div className={`w-12 h-12 mb-3 flex items-center justify-center rounded-2xl transition-all duration-200 ${
                  isSelected
                    ? 'bg-poster-cyan text-poster-midnight shadow-lg shadow-poster-cyan/30 ring-2 ring-poster-cyan/50'
                    : 'bg-white/5 group-hover:bg-white/10 text-slate-300'
                }`}>
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-poster-midnight' : mundo.accent === 'poster-gold' ? 'text-poster-gold' : 'text-poster-cyan'}`} />
                </div>

                {/* Clean Title */}
                <span className={`text-xs sm:text-[13px] font-archivo font-bold uppercase tracking-wide transition-colors leading-snug ${
                  isSelected ? 'text-poster-gold' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {mundo.name}
                </span>

                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-poster-gold mt-2 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* FULL-WIDTH SLIDER WITH SIDE ARROWS & AUTOPLAY */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full"
        >
          {/* Left Control Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Lámina anterior"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-poster-dark/90 hover:bg-poster-cyan text-white hover:text-poster-midnight border border-white/20 hover:border-poster-cyan shadow-2xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Control Arrow */}
          <button
            onClick={handleNext}
            aria-label="Lámina siguiente"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-poster-dark/90 hover:bg-poster-cyan text-white hover:text-poster-midnight border border-white/20 hover:border-poster-cyan shadow-2xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Full-width Single Slide Container */}
          <div className="w-full min-h-[360px] sm:min-h-[320px] rounded-3xl bg-gradient-to-br from-[#06264c] via-[#051c38] to-poster-dark border border-poster-cyan/30 shadow-2xl shadow-poster-cyan/10 p-8 sm:p-12 md:p-14 relative overflow-hidden flex flex-col justify-between">
            {/* Subtle inside glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-poster-gold/5 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {(() => {
                const currentMundo = WORLDS[activeMundoIndex];
                const Icon = currentMundo.icon;
                return (
                  <motion.div
                    key={currentMundo.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full max-w-4xl mx-auto flex flex-col justify-between h-full relative z-10"
                  >
                    <div>
                      {/* Mundo Identifier */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-poster-cyan/15 text-poster-cyan flex items-center justify-center border border-poster-cyan/30">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-archivo font-bold uppercase tracking-[0.2em] text-poster-cyan">
                          {currentMundo.name}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-archivo font-extrabold text-white mb-5 leading-snug tracking-tight">
                        {currentMundo.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-3xl mb-10">
                        {currentMundo.desc}
                      </p>
                    </div>

                    {/* CTA Button */}
                    {onOpenModal && (
                      <div>
                        <button
                          onClick={() => onOpenModal(currentMundo.modalType)}
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-poster-cyan text-poster-midnight hover:bg-white transition-all shadow-lg shadow-poster-cyan/25 hover:scale-[1.03]"
                        >
                          <span>{currentMundo.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* 4. TRUE FULL-WIDTH EDGE-TO-EDGE PHOTOGRAPHY 2: Astilleros e Innovación SEM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] relative overflow-hidden mt-16 border-t border-white/15"
      >
        <img
          src="/images/valdivia-astillero-catamaran.jpg"
          alt="Astillero y catamarán eléctrico solar en Valdivia"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-poster-midnight via-transparent to-poster-midnight/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-poster-midnight/60 via-transparent to-poster-midnight/60 pointer-events-none" />
      </motion.div>

    </section>
  );
}
