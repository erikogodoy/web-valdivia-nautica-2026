'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Zap, 
  Fish, 
  Compass, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Ticket,
  CalendarCheck
} from 'lucide-react';

interface VisitorCompassProps {
  onOpenModal: (type?: string, level?: string) => void;
}

const PERSONAS = [
  {
    id: 'familia',
    label: 'Familia & Turista',
    tag: 'Acceso Liberado a Muestras',
    icon: Users,
    color: 'poster-gold',
    badgeBg: 'bg-poster-gold/10 text-poster-gold border-poster-gold/30',
    title: 'Tu fin de semana navegando el Calle-Calle',
    description: 'Una experiencia pensada para disfrutar en familia con gastronomía ribereña, paseos náuticos, demostraciones en directo de carpintería y regatas en el río.',
    scheduleHighlights: [
      { time: '11:00 - 13:00', activity: 'Apertura de pabellones y demostraciones de carpintería en vivo' },
      { time: '14:30 - 16:30', activity: 'Patio gastronómico tradicional, cerveza artesanal y música ribereña' },
      { time: '17:00 - 18:30', activity: 'Paseos fluviales por el Santuario y regatas en el río Calle-Calle' },
    ],
    features: [
      'Entrada gratuita a las áreas de exhibición abierta y deportes',
      'Zonas de sombra, áreas verdes y juegos en Parque Saval',
      'Muelle habilitado para paseos fluviales y bautizos de kayak',
      'Muestra de productos locales de la costa valdiviana',
    ],
    ctaText: 'Ver Itinerario Completo',
    ctaAction: () => {
      const el = document.getElementById('programa');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    ctaIcon: CalendarCheck,
  },
  {
    id: 'b2b',
    label: 'Industria Naval & B2B',
    tag: 'Networking & Proveedores',
    icon: Building2,
    color: 'poster-cyan',
    badgeBg: 'bg-poster-cyan/10 text-poster-cyan border-poster-cyan/30',
    title: 'El epicentro de negocios marítimos del cono sur',
    description: 'Conecta con los principales astilleros del país (como ASENAV), empresas de mantenimiento, proveedores de motores, servicios portuarios e instituciones públicas.',
    scheduleHighlights: [
      { time: '09:30 - 12:30', activity: 'Rondas de negocios B2B con astilleros y armadores' },
      { time: '13:00 - 14:30', activity: 'Almuerzo ejecutivo de networking y autoridades marítimas' },
      { time: '15:00 - 18:00', activity: 'Exhibición técnica de proveedores y visitas técnicas a astilleros' },
    ],
    features: [
      'Stands comerciales modulares en el Centro de Ferias Parque Saval',
      'Acceso exclusivo al directorio digital de expositores y compradores',
      'Presencia en catálogo oficial y rondas de financiamiento/CORFO',
      'Opciones de patrocinio estelar en las categorías de metales',
    ],
    ctaText: 'Solicitar Stand / Acreditación B2B',
    ctaAction: (openModal: any) => openModal('expositor'),
    ctaIcon: Ticket,
  },
  {
    id: 'sem',
    label: 'Congreso SEM Innovación',
    tag: 'Descarbonización Fluvial',
    icon: Zap,
    color: 'poster-cyan',
    badgeBg: 'bg-poster-cyan/10 text-poster-cyan border-poster-cyan/30',
    title: 'Salón de Electromovilidad Marítima & Nuevas Energías',
    description: 'Encuentro pionero co-organizado con la Universidad Austral de Chile (UACh) y THEMS, enfocado en propulsión marina limpia, hidrógeno verde y catamaranes solares.',
    scheduleHighlights: [
      { time: '09:00 - 11:30', activity: 'Paneles internacionales: Casos de éxito en Europa y América' },
      { time: '12:00 - 13:30', activity: 'Pruebas de navegación en vivo de embarcaciones eléctricas' },
      { time: '15:00 - 17:30', activity: 'Mesas técnicas de regulación y transición energética náutica' },
    ],
    features: [
      'Ponencias con expertos internacionales de Noruega, Países Bajos y Chile',
      'Demostración del catamarán solar desarrollado en la cuenca del Calle-Calle',
      'Presentación de papers científicos y proyectos de I+D aplicada',
      'Certificación de asistencia para profesionales y estudiantes',
    ],
    ctaText: 'Inscribirme al SEM 2026',
    ctaAction: (openModal: any) => openModal('sem'),
    ctaIcon: Zap,
  },
  {
    id: 'pesca',
    label: 'Pesca & Deportes del Agua',
    tag: 'Campeonatos & Clínicas',
    icon: Fish,
    color: 'poster-gold',
    badgeBg: 'bg-poster-gold/10 text-poster-gold border-poster-gold/30',
    title: 'Vivir el río desde la cancha y la caña',
    description: 'El espacio para pescadores deportivos, remeros de todos los clubes de Valdivia, kayakistas y aficionados a las actividades al aire libre.',
    scheduleHighlights: [
      { time: '07:30 - 12:00', activity: 'Campeonato de Pesca Embarcada en el río Cruces y Calle-Calle' },
      { time: '11:00 - 14:00', activity: 'Clínicas abiertas de iniciación al remo y kayak para jóvenes' },
      { time: '16:00 - 18:00', activity: 'Torneo de Pesca de Orilla y premiación de capturas sustentables' },
    ],
    features: [
      'Bases y premiación con marcas líderes de equipamiento y señuelos',
      'Regatas tradicionales con la histórica cantera de remeros valdivianos',
      'Talleres de atado de moscas y técnicas de pesca con devolución',
      'Punto de embarque y guardería náutica durante el evento',
    ],
    ctaText: 'Ver Bases de Campeonatos',
    ctaAction: () => {
      const el = document.getElementById('programa');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    ctaIcon: ArrowRight,
  },
];

export default function VisitorCompass({ onOpenModal }: VisitorCompassProps) {
  const [activeId, setActiveId] = useState('familia');

  const current = PERSONAS.find((p) => p.id === activeId) || PERSONAS[0];
  const PersonaIcon = current.icon;
  const CtaIcon = current.ctaIcon;

  return (
    <section id="brujula" className="py-24 bg-poster-midnight relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-poster-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-poster-gold/10 border border-poster-gold/30 text-poster-gold text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>La Brújula del Visitante</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight">
              Personaliza tu <span className="text-poster-cyan">Experiencia</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-sans">
              Elige tu perfil y descubre al instante la ruta recomendada, horarios y beneficios diseñados para ti.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            [ 4 Perfiles Clave Disponibles ]
          </div>
        </div>

        {/* Persona Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {PERSONAS.map((p) => {
            const Icon = p.icon;
            const isSelected = activeId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`p-4 rounded-2xl flex flex-col items-start gap-3 transition-all duration-300 text-left border ${
                  isSelected
                    ? 'bg-poster-dark border-poster-gold shadow-xl shadow-poster-gold/10 scale-[1.02]'
                    : 'bg-poster-dark/40 border-white/10 hover:border-white/25 hover:bg-poster-dark/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-poster-gold text-poster-midnight' : 'bg-white/5 text-slate-300'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-poster-gold animate-ping" />
                  )}
                </div>
                <div>
                  <div className={`text-xs font-mono uppercase tracking-wider ${isSelected ? 'text-poster-gold font-bold' : 'text-slate-400'}`}>
                    {p.label}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                    {p.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Persona Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-8 sm:p-12 rounded-3xl bg-poster-dark/90 border border-white/15 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Title, Description & Action */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${current.badgeBg}`}>
                      <PersonaIcon className="w-3.5 h-3.5" />
                      {current.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5 text-poster-cyan" />
                      Parque Saval
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-syne font-bold text-white mb-4 leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                    {current.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 pt-6 border-t border-white/10">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-poster-cyan shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => current.ctaAction(onOpenModal)}
                    className="w-full sm:w-auto px-8 py-4 bg-poster-gold hover:bg-poster-goldHover text-poster-midnight text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-poster-gold/20 hover:scale-[1.02] flex items-center justify-center gap-2.5"
                  >
                    <CtaIcon className="w-4 h-4" />
                    {current.ctaText}
                  </button>
                </div>
              </div>

              {/* Right Column: Mini Schedule Timeline */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    Ruta Sugerida del Día
                  </span>
                  <Clock className="w-4 h-4 text-poster-gold" />
                </div>

                <div className="space-y-4">
                  {current.scheduleHighlights.map((slot, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-poster-midnight/60 border border-white/5 hover:border-poster-cyan/30 transition-colors">
                      <span className="text-[11px] font-mono font-bold text-poster-cyan shrink-0 pt-0.5">
                        {slot.time}
                      </span>
                      <span className="text-xs text-slate-200 leading-snug">
                        {slot.activity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <span className="text-[11px] text-slate-400 font-mono">
                    * Horarios sincronizados con el programa oficial 2026
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
