'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

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
    number: '01',
    name: 'Electromovilidad Marítima',
    tag: 'SEM 2026',
    location: 'Pabellón Central & Auditorio Climatizado',
    title: 'La transición energética fluvial nace en los ríos del sur',
    desc: 'Salón de Electromovilidad Marítima co-organizado con la Universidad Austral de Chile (UACh) y THEMS. Conferencias con expertos internacionales de Noruega y Países Bajos, exhibición de catamaranes solares en vivo y ruedas técnicas de descarbonización fluvial.',
    tags: ['Catamarán Solar UACh', 'Hidrógeno Verde', 'Propulsión Eléctrica Marina', 'Descarbonización'],
    href: '/sem',
    ctaText: 'Explorar Programa SEM',
    icon: Zap,
    accent: 'poster-cyan',
  },
  {
    id: 'pesca',
    number: '02',
    name: 'Pesca y Acuicultura',
    tag: 'EXPO PESCA',
    location: 'Explanada Sur & Ribera Fluvial',
    title: 'Pesca deportiva sustentable y saberes de la cuenca',
    desc: 'El gran punto de encuentro para pescadores aficionados y profesionales. Campeonatos de orilla y embarcada en la confluencia de los ríos Cruces y Calle-Calle, equipamiento de marcas líderes, señuelos de última generación y talleres de atado de mosca.',
    tags: ['Campeonato de Pesca Embarcada', 'Torneo de Orilla', 'Equipamiento & Marcas', 'Pesca con Devolución'],
    href: '/expo-pesca',
    ctaText: 'Ver Bases y Stands de Pesca',
    icon: Fish,
    accent: 'poster-gold',
  },
  {
    id: 'deporte',
    number: '03',
    name: 'Deporte y Aventura',
    tag: 'REMO & DEPORTE',
    location: 'Muelle Fluvial & Cancha Calle-Calle',
    title: 'La capital del remo chileno en plena competencia',
    desc: 'Espectáculo náutico de primer nivel con los históricos clubes centenarios valdivianos (Phoenix, Arturo Prat, Centenario) y remeros olímpicos. Incluye bautizos náuticos abiertos de kayak para jóvenes y paseos fluviales guiados.',
    tags: ['Regatas Oficiales Calle-Calle', 'Bautizos de Kayak Gratuitos', 'Clubes Centenarios', 'Clínicas Náuticas'],
    href: '/deporte-turismo',
    ctaText: 'Ver Actividades Deportivas',
    icon: Sailboat,
    accent: 'poster-cyan',
  },
  {
    id: 'naval',
    number: '04',
    name: 'Industria Naval y Servicios',
    tag: 'ASTILLEROS & B2B',
    location: 'Hangar Principal Parque Saval',
    title: 'Vanguardia en construcción naval y proveeduría técnica',
    desc: 'Exhibición de la potente industria de astilleros encabezada por ASENAV, armadores comerciales, motores marinos de alta eficiencia, soluciones de telemetría y ruedas de negocios nacionales e internacionales.',
    tags: ['Astilleros ASENAV', 'Rondas de Negocios B2B', 'Motores & Sistemas Navales', 'Proveedores Marítimos'],
    href: '/industria-naval',
    ctaText: 'Pabellón Industrial & Stands',
    icon: Ship,
    accent: 'white',
  },
  {
    id: 'comunidad',
    number: '05',
    name: 'Comunidad y Educación',
    tag: 'COMUNIDAD',
    location: 'Plaza Central & Espacio Ciudadano',
    title: 'Integración ciudadana, escuelas y futuro fluvial',
    desc: 'Espacio de divulgación y encuentro donde universidades, centros de formación técnica, colegios de la región y organizaciones ciudadanas dialogan sobre la relación histórica y futura de Valdivia con sus ríos y humedales.',
    tags: ['Vinculación Escolar', 'Proyectos Científicos UACh', 'Educación Ambiental', 'Futuro Sostenible'],
    href: '/valdivia',
    ctaText: 'Conocer Iniciativas',
    icon: Users,
    accent: 'poster-cyan',
  },
  {
    id: 'turismo',
    number: '06',
    name: 'Turismo y Experiencias',
    tag: 'TURISMO FLUVIAL',
    location: 'Patio Gastronómico & Muelle Fluvial',
    title: 'Sabores ribereños, cerveza artesanal y navegación',
    desc: 'La experiencia sensorial de Valdivia: paseos en embarcaciones turísticas por el Santuario de la Naturaleza Carlos Anwandter, patio de gastronomía marina y fluvial en vivo, y degustación de cervecerías artesanales de Los Ríos.',
    tags: ['Paseos al Santuario', 'Cocina en Vivo', 'Cerveza Artesanal Valdiviana', 'Música al Atardecer'],
    href: '/valdivia',
    ctaText: 'Descubrir Experiencias',
    icon: Compass,
    accent: 'poster-gold',
  },
  {
    id: 'patrimonio',
    number: '07',
    name: 'Ciencia, Patrimonio e Innovación',
    tag: 'PATRIMONIO VIVO',
    location: 'El Taller Vivo / Galpón de Tradiciones',
    title: 'Carpintería de ribera y memoria viva en madera nativa',
    desc: 'Demostraciones magistrales en directo donde maestros carpinteros de ribera construyen y calafatean embarcaciones tradicionales de madera. Un tributo al patrimonio vivo que define la identidad fluvial del sur austral.',
    tags: ['Construcción en Vivo', 'Maestros de Ribera', 'Madera Nativa', 'Oficios Ancestrales'],
    href: '/oficios',
    ctaText: 'Ver Talleres de Oficios',
    icon: Hammer,
    accent: 'poster-gold',
  },
];

export default function ImpactManifesto() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentWorld = WORLDS[activeIndex];
  const WorldIcon = currentWorld.icon;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? WORLDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === WORLDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="manifiesto" className="relative py-20 sm:py-28 bg-gradient-to-b from-poster-midnight via-[#001744] to-poster-midnight text-white overflow-hidden border-y border-white/10">
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

      {/* 2. TRUE FULL-WIDTH EDGE-TO-EDGE PHOTOGRAPHY: Río Calle-Calle (100vw Bleed) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] relative overflow-hidden my-14 sm:my-20 border-y border-white/15"
      >
        <img
          src="/images/valdivia-calle-calle-rio.jpg"
          alt="Río Calle-Calle al amanecer en Valdivia"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-poster-midnight via-transparent to-poster-midnight/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-poster-midnight/60 via-transparent to-poster-midnight/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 relative z-10">
          <span className="text-xs sm:text-sm font-archivo font-bold uppercase tracking-widest text-white/95 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
            Río Calle-Calle · Sede Fluvial Oficial
          </span>
        </div>
      </motion.div>

      {/* 3. INTERACTIVE SLIDER: LOS 7 MUNDOS DEL ENCUENTRO */}
      <div id="mundos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Slider Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h3 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
              Los 7 Mundos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">Encuentro</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 font-sans max-w-xl">
              Selecciona cada eje temático para explorar en directo sus actividades, pabellones y novedades en Parque Saval.
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Mundo anterior"
              className="w-10 h-10 rounded-xl bg-poster-dark/80 hover:bg-poster-cyan hover:text-poster-midnight border border-white/15 hover:border-poster-cyan flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
              {currentWorld.number} / 07
            </span>
            <button
              onClick={handleNext}
              aria-label="Mundo siguiente"
              className="w-10 h-10 rounded-xl bg-poster-dark/80 hover:bg-poster-cyan hover:text-poster-midnight border border-white/15 hover:border-poster-cyan flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 7 Worlds Interactive Tab Menu (Row with Icons on Top) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 mb-8">
          {WORLDS.map((mundo, idx) => {
            const Icon = mundo.icon;
            const isSelected = activeIndex === idx;
            return (
              <button
                key={mundo.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-center text-center p-3.5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#06294d] to-poster-dark border-poster-cyan shadow-xl shadow-poster-cyan/20 scale-[1.03] ring-1 ring-poster-cyan/40'
                    : 'bg-poster-dark/40 border-white/10 hover:border-white/30 hover:bg-poster-dark/70 text-slate-400'
                }`}
              >
                <div className={`w-11 h-11 mb-2.5 flex items-center justify-center rounded-xl transition-all ${
                  isSelected ? 'bg-poster-cyan text-poster-midnight' : 'bg-white/5 text-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <span className={`text-xs font-archivo font-bold uppercase tracking-wide leading-tight transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {mundo.name}
                </span>
                
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-poster-gold mt-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Dynamic Slider Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWorld.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#06264c] via-[#051c38] to-poster-dark border border-poster-cyan/40 shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-poster-cyan/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar of the Card: Number, Tag and Location */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-poster-cyan/20 border border-poster-cyan/50 text-poster-cyan text-xs font-bold uppercase tracking-wider">
                <WorldIcon className="w-4 h-4 text-poster-gold" />
                <span>Mundo {currentWorld.number} · {currentWorld.name}</span>
              </div>
              <span className="text-xs sm:text-sm font-sans text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-poster-gold" />
                {currentWorld.location}
              </span>
            </div>

            {/* Main Headline & Description */}
            <div className="max-w-4xl my-4 relative z-10">
              <h4 className="text-2xl sm:text-4xl font-archivo font-extrabold text-white mb-4 leading-tight">
                {currentWorld.title}
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans mb-8">
                {currentWorld.desc}
              </p>

              {/* Keyword Concept Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {currentWorld.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-200 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-slate-400 font-sans">
                Explora el programa detallado, participantes y actividades de este mundo.
              </span>

              <Link
                href={currentWorld.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-poster-cyan text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-poster-cyan/20 hover:scale-[1.02]"
              >
                <span>{currentWorld.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* 4. TRUE FULL-WIDTH EDGE-TO-EDGE PHOTOGRAPHY 2: Astilleros e Innovación SEM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] relative overflow-hidden mt-20 border-t border-white/15"
      >
        <img
          src="/images/valdivia-astillero-catamaran.jpg"
          alt="Astillero y catamarán eléctrico solar en Valdivia"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-poster-midnight via-transparent to-poster-midnight/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-poster-midnight/60 via-transparent to-poster-midnight/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 relative z-10">
          <span className="text-xs sm:text-sm font-archivo font-bold uppercase tracking-widest text-white/95 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
            Vanguardia Naval & Electromovilidad Marítima (SEM)
          </span>
        </div>
      </motion.div>

    </section>
  );
}
