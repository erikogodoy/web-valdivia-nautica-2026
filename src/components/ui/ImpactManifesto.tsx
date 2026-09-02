'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles,
  Ticket
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
    number: '01',
    name: 'Electromovilidad Marítima',
    tag: 'SEM 2026',
    modalType: 'sem',
    location: 'Pabellón Central & Auditorio',
    title: 'La transición energética fluvial nace en los ríos del sur',
    desc: 'Salón de Electromovilidad Marítima co-organizado con la Universidad Austral de Chile (UACh) y THEMS. Conferencias con expertos internacionales, exhibición del catamarán solar en vivo en el Calle-Calle y rondas técnicas de descarbonización de flotas.',
    tags: ['Catamarán Solar UACh', 'Hidrógeno Verde', 'Propulsión Eléctrica Marina', 'Descarbonización'],
    ctaText: 'Acreditación SEM 2026',
    icon: Zap,
    accent: 'poster-cyan',
  },
  {
    id: 'pesca',
    number: '02',
    name: 'Pesca y Acuicultura',
    tag: 'EXPO PESCA',
    modalType: 'general',
    location: 'Explanada Sur & Ribera Fluvial',
    title: 'Pesca deportiva sustentable y saberes de la cuenca',
    desc: 'El gran punto de encuentro para pescadores aficionados y profesionales. Campeonatos de orilla y embarcada en la confluencia de los ríos Cruces y Calle-Calle, equipamiento de marcas líderes, señuelos de última generación y clínicas de atado de moscas.',
    tags: ['Campeonato Embarcada', 'Torneo de Orilla', 'Equipamiento & Marcas', 'Pesca con Devolución'],
    ctaText: 'Información de Campeonatos',
    icon: Fish,
    accent: 'poster-gold',
  },
  {
    id: 'deporte',
    number: '03',
    name: 'Deporte y Aventura',
    tag: 'REMO & DEPORTE',
    modalType: 'general',
    location: 'Muelle Fluvial & Cancha Calle-Calle',
    title: 'La capital del remo chileno en plena competencia',
    desc: 'Espectáculo náutico de primer nivel con los históricos clubes centenarios valdivianos (Phoenix, Arturo Prat, Centenario) y remeros olímpicos. Incluye bautizos náuticos abiertos de kayak para jóvenes y paseos fluviales guiados.',
    tags: ['Regatas Oficiales Calle-Calle', 'Bautizos de Kayak Gratuitos', 'Clubes Centenarios', 'Clínicas Náuticas'],
    ctaText: 'Ver Actividades en Río',
    icon: Sailboat,
    accent: 'poster-cyan',
  },
  {
    id: 'naval',
    number: '04',
    name: 'Industria Naval y Servicios',
    tag: 'ASTILLEROS & B2B',
    modalType: 'expositor',
    location: 'Hangar Principal Parque Saval',
    title: 'Vanguardia en construcción naval y proveeduría técnica',
    desc: 'Exhibición de la potente industria de astilleros encabezada por ASENAV, armadores comerciales, motores marinos de alta eficiencia, soluciones de telemetría y ruedas de negocios nacionales e internacionales.',
    tags: ['Astilleros ASENAV', 'Rondas de Negocios B2B', 'Motores & Sistemas Navales', 'Proveedores Marítimos'],
    ctaText: 'Solicitar Stand B2B',
    icon: Ship,
    accent: 'white',
  },
  {
    id: 'comunidad',
    number: '05',
    name: 'Comunidad y Educación',
    tag: 'COMUNIDAD',
    modalType: 'general',
    location: 'Plaza Central & Espacio Ciudadano',
    title: 'Integración ciudadana, escuelas y futuro fluvial',
    desc: 'Espacio de divulgación y encuentro donde universidades, centros de formación técnica, colegios de la región y organizaciones ciudadanas dialogan sobre la relación histórica y futura de Valdivia con sus ríos y humedales.',
    tags: ['Vinculación Escolar', 'Proyectos Científicos UACh', 'Educación Ambiental', 'Futuro Sostenible'],
    ctaText: 'Participar con Escuela / Universidad',
    icon: Users,
    accent: 'poster-cyan',
  },
  {
    id: 'turismo',
    number: '06',
    name: 'Turismo y Experiencias',
    tag: 'TURISMO FLUVIAL',
    modalType: 'general',
    location: 'Patio Gastronómico & Muelle Fluvial',
    title: 'Sabores ribereños, cerveza artesanal y navegación',
    desc: 'La experiencia sensorial de Valdivia: paseos en embarcaciones turísticas por el Santuario de la Naturaleza Carlos Anwandter, patio de gastronomía marina y fluvial en vivo, y degustación de cervecerías artesanales de Los Ríos.',
    tags: ['Paseos al Santuario', 'Cocina en Vivo', 'Cerveza Artesanal Valdiviana', 'Música al Atardecer'],
    ctaText: 'Descubrir Experiencias',
    icon: Compass,
    accent: 'poster-gold',
  },
  {
    id: 'patrimonio',
    number: '07',
    name: 'Ciencia, Patrimonio e Innovación',
    tag: 'PATRIMONIO VIVO',
    modalType: 'general',
    location: 'El Taller Vivo / Galpón de Tradiciones',
    title: 'Carpintería de ribera y memoria viva en madera nativa',
    desc: 'Demostraciones magistrales en directo donde maestros carpinteros de ribera construyen y calafatean embarcaciones tradicionales de madera. Un tributo al patrimonio vivo que define la identidad fluvial del sur austral.',
    tags: ['Construcción en Vivo', 'Maestros de Ribera', 'Madera Nativa', 'Oficios Ancestrales'],
    ctaText: 'Ver Talleres de Oficios',
    icon: Hammer,
    accent: 'poster-gold',
  },
];

export default function ImpactManifesto({ onOpenModal }: ImpactManifestoProps) {
  const [activeMundoIndex, setActiveMundoIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    setActiveMundoIndex(index);
    if (sliderRef.current) {
      const card = sliderRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeMundoIndex === 0 ? WORLDS.length - 1 : activeMundoIndex - 1;
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeMundoIndex === WORLDS.length - 1 ? 0 : activeMundoIndex + 1;
    scrollToCard(nextIdx);
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

      {/* 3. LOS 7 MUNDOS DEL ENCUENTRO (MENÚ DE ICONOS) + SLIDER DE 7 LÁMINAS */}
      <div id="mundos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h3 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
              Los 7 Mundos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">Encuentro</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2">
              Haz clic en cualquiera de los mundos para navegar directamente a su lámina en el slider.
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Lámina anterior"
              className="w-10 h-10 rounded-xl bg-poster-dark/80 hover:bg-poster-cyan hover:text-poster-midnight border border-white/15 hover:border-poster-cyan flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
              {String(activeMundoIndex + 1).padStart(2, '0')} / 07
            </span>
            <button
              onClick={handleNext}
              aria-label="Lámina siguiente"
              className="w-10 h-10 rounded-xl bg-poster-dark/80 hover:bg-poster-cyan hover:text-poster-midnight border border-white/15 hover:border-poster-cyan flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 7 Worlds Icon Menu (Clean frameless row with icons on top) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-start mb-10">
          {WORLDS.map((mundo, idx) => {
            const Icon = mundo.icon;
            const isSelected = activeMundoIndex === idx;
            return (
              <button
                key={mundo.id}
                onClick={() => scrollToCard(idx)}
                className={`group flex flex-col items-center text-center p-2.5 rounded-2xl transition-all duration-200 cursor-pointer ${
                  isSelected ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {/* Clean Icon */}
                <div className={`w-12 h-12 mb-3 flex items-center justify-center rounded-2xl transition-all duration-200 ${
                  isSelected
                    ? 'bg-poster-cyan text-poster-midnight shadow-lg shadow-poster-cyan/30'
                    : 'bg-white/5 group-hover:bg-poster-cyan/15 text-slate-300'
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

        {/* HORIZONTAL MULTI-CARD SLIDER (7 LÁMINAS LADO A LADO) */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {WORLDS.map((mundo, idx) => {
            const Icon = mundo.icon;
            const isSelected = activeMundoIndex === idx;
            return (
              <div
                key={mundo.id}
                onClick={() => setActiveMundoIndex(idx)}
                className={`w-[85vw] sm:w-[540px] md:w-[620px] lg:w-[680px] shrink-0 snap-center p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#06264c] via-[#051c38] to-poster-dark border-poster-cyan/60 shadow-2xl shadow-poster-cyan/15 ring-1 ring-poster-cyan/30'
                    : 'bg-poster-dark/60 border-white/10 hover:border-white/30 hover:bg-poster-dark/80 opacity-85'
                }`}
              >
                <div>
                  {/* Top Bar of the Slide */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poster-cyan/20 border border-poster-cyan/50 text-poster-cyan text-xs font-bold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-poster-gold" />
                      <span>Mundo {mundo.number} · {mundo.tag}</span>
                    </div>

                    <span className="text-xs font-sans text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-poster-gold" />
                      {mundo.location}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-archivo font-extrabold text-white mb-3.5 leading-snug">
                    {mundo.title}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-sans mb-6">
                    {mundo.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mundo.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-sans">
                    Encuentro oficial en Parque Saval
                  </span>
                  
                  {onOpenModal && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal(mundo.modalType);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-poster-cyan text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md shadow-poster-cyan/20 hover:scale-[1.02]"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>{mundo.ctaText}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 relative z-10">
          <span className="text-xs sm:text-sm font-archivo font-bold uppercase tracking-widest text-white/95 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
            Vanguardia Naval & Electromovilidad Marítima (SEM)
          </span>
        </div>
      </motion.div>

    </section>
  );
}
