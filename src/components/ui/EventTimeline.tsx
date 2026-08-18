'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  Zap, 
  Fish, 
  Sailboat, 
  Hammer, 
  ChevronRight,
  Bell
} from 'lucide-react';

interface EventTimelineProps {
  onOpenModal: (type?: string) => void;
}

interface EventItem {
  id: string;
  time: string;
  title: string;
  category: 'sem' | 'pesca' | 'deporte' | 'oficios' | 'general';
  categoryLabel: string;
  location: string;
  description: string;
  badge?: string;
  isLiveHighlight?: boolean;
}

const SCHEDULE_DAYS: Record<string, { label: string; date: string; summary: string; events: EventItem[] }> = {
  viernes: {
    label: 'Viernes 4 Dic',
    date: '4 de Diciembre, 2026',
    summary: 'Apertura oficial, inauguración del Salón SEM con ponencias internacionales y rondas B2B de astilleros.',
    events: [
      {
        id: 'v1',
        time: '09:00 - 10:30',
        title: 'Ceremonia Inaugural Valdivia Náutica 2026',
        category: 'general',
        categoryLabel: 'Protocolar',
        location: 'Auditorio Central Parque Saval',
        description: 'Apertura con autoridades regionales, ministerios de Transportes y Energía, astilleros y delegaciones extranjeras.',
        badge: 'Invitados & Acreditados',
      },
      {
        id: 'v2',
        time: '10:45 - 13:00',
        title: 'SEM 2026: Plenario Internacional de Propulsión Limpia',
        category: 'sem',
        categoryLabel: 'SEM Innovación',
        location: 'Pabellón SEM & Auditorio',
        description: 'Exposiciones de expertos de Noruega, Países Bajos y la UACh sobre electrificación de flotas fluviales e hidrógeno verde.',
        badge: 'Transmisión en Directo',
        isLiveHighlight: true,
      },
      {
        id: 'v3',
        time: '14:30 - 17:30',
        title: 'Ruedas de Negocios B2B Astilleros & Proveedores',
        category: 'general',
        categoryLabel: 'Industria B2B',
        location: 'Hangar Principal',
        description: 'Encuentros comerciales programados entre armadores, astilleros locales y empresas tecnológicas marítimas.',
        badge: 'Empresas Registradas',
      },
      {
        id: 'v4',
        time: '18:00 - 19:30',
        title: 'Inauguración del Patio Gastronómico & Brindis Ribereño',
        category: 'oficios',
        categoryLabel: 'Gastronomía',
        location: 'Patio Central Saval',
        description: 'Degustación de cocina costera y destilados locales al atardecer en la ribera del Calle-Calle.',
        badge: 'Abierto al Público',
      },
    ],
  },
  sabado: {
    label: 'Sábado 5 Dic',
    date: '5 de Diciembre, 2026',
    summary: 'Día estelar en el río: regatas de remo tradicionales, torneo de pesca de orilla y demostraciones de carpintería.',
    events: [
      {
        id: 's1',
        time: '08:30 - 12:00',
        title: 'Campeonato de Pesca de Orilla — Copa Valdivia',
        category: 'pesca',
        categoryLabel: 'Expo Pesca',
        location: 'Ribera Río Calle-Calle',
        description: 'Competencia abierta para aficionados y profesionales. Modalidad con devolución y pesaje certificado.',
        badge: 'Inscripción Abierta',
      },
      {
        id: 's2',
        time: '11:00 - 13:30',
        title: 'Pruebas y Navegación del Catamarán Solar UACh',
        category: 'sem',
        categoryLabel: 'SEM / Pruebas en Vivo',
        location: 'Muelle Fluvial Parque Saval',
        description: 'Demostración técnica en el agua de embarcaciones con propulsión 100% solar desarrolladas en la región.',
        isLiveHighlight: true,
      },
      {
        id: 's3',
        time: '14:00 - 16:30',
        title: 'El Taller Vivo: Carpintería de Ribera en Madera Nativa',
        category: 'oficios',
        categoryLabel: 'Patrimonio',
        location: 'Explanada de Oficios',
        description: 'Maestros armadores construyen y calafatean un bote tradicional chilote-valdiviano frente al público.',
        badge: 'Demostración Interactiva',
      },
      {
        id: 's4',
        time: '16:30 - 18:30',
        title: 'Gran Regata de Remo de Clubes Centenarios',
        category: 'deporte',
        categoryLabel: 'Deporte & Remo',
        location: 'Pista Fluvial Calle-Calle',
        description: 'Espectáculo deportivo con los históricos clubes Phoenix, Arturo Prat, Centenario y remeros olímpicos.',
        badge: 'Espectáculo Imperdible',
        isLiveHighlight: true,
      },
    ],
  },
  domingo: {
    label: 'Domingo 6 Dic',
    date: '6 de Diciembre, 2026',
    summary: 'Jornada de clausura familiar, torneo de pesca embarcada, bautizos náuticos en kayak y premiación.',
    events: [
      {
        id: 'd1',
        time: '08:00 - 13:00',
        title: 'Torneo de Pesca Embarcada en Cuenca Fluvial',
        category: 'pesca',
        categoryLabel: 'Expo Pesca',
        location: 'Confluencia Río Cruces y Calle-Calle',
        description: 'Embarcaciones a motor y eléctricas recorren los puntos de pesca deportiva autorizados.',
        badge: 'Copa Valdivia Náutica',
      },
      {
        id: 'd2',
        time: '11:30 - 15:00',
        title: 'Bautizos Náuticos de Kayak & Paseos al Santuario',
        category: 'deporte',
        categoryLabel: 'Familia & Deporte',
        location: 'Muelle Fluvial Saval',
        description: 'Salidas guiadas gratuitas para niños y jóvenes con instructores certificados de la región.',
        badge: 'Cupos por Orden de Llegada',
      },
      {
        id: 'd3',
        time: '16:00 - 18:00',
        title: 'Ceremonia de Premiación & Gran Cierre Fluvial',
        category: 'general',
        categoryLabel: 'Clausura',
        location: 'Escenario Principal Parque Saval',
        description: 'Entrega de trofeos a remeros y pescadores, distinciones a la innovación SEM y desfile de embarcaciones.',
        badge: 'Cierre Oficial 2026',
        isLiveHighlight: true,
      },
    ],
  },
};

const CATEGORIES = [
  { id: 'todos', label: 'Todos los Eventos' },
  { id: 'sem', label: 'SEM Electromovilidad', icon: Zap },
  { id: 'pesca', label: 'Pesca Deportiva', icon: Fish },
  { id: 'deporte', label: 'Remo & Regatas', icon: Sailboat },
  { id: 'oficios', label: 'Patrimonio & Sabores', icon: Hammer },
];

export default function EventTimeline({ onOpenModal }: EventTimelineProps) {
  const [activeDay, setActiveDay] = useState<'viernes' | 'sabado' | 'domingo'>('viernes');
  const [categoryFilter, setCategoryFilter] = useState('todos');

  const currentDayData = SCHEDULE_DAYS[activeDay];

  const filteredEvents = currentDayData.events.filter((ev) => {
    if (categoryFilter === 'todos') return true;
    return ev.category === categoryFilter;
  });

  return (
    <section id="programa" className="py-20 bg-gradient-to-b from-poster-midnight via-[#00122e] to-poster-midnight text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-poster-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean without pre-title pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
              Cronograma de <span className="text-poster-cyan">Actividades</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-sans leading-relaxed">
              Planifica tu visita según los horarios, conferencias del SEM, regatas y espectáculos en Parque Saval.
            </p>
          </div>

          <button
            onClick={() => onOpenModal('general')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-all self-start md:self-end"
          >
            <Bell className="w-4 h-4 text-poster-gold" />
            <span>Recibir Notificaciones del Programa</span>
          </button>
        </div>

        {/* Day Switcher Tabs (Viernes · Sábado · Domingo) */}
        <div className="grid grid-cols-3 gap-3 mb-6 max-w-xl">
          {(['viernes', 'sabado', 'domingo'] as const).map((dayKey) => {
            const isSelected = activeDay === dayKey;
            const dayInfo = SCHEDULE_DAYS[dayKey];
            return (
              <button
                key={dayKey}
                onClick={() => setActiveDay(dayKey)}
                className={`py-3.5 px-3 rounded-2xl flex flex-col items-center justify-center transition-all border ${
                  isSelected
                    ? 'bg-poster-dark border-poster-cyan shadow-lg shadow-poster-cyan/20 scale-[1.02]'
                    : 'bg-poster-dark/40 border-white/10 hover:border-white/30 text-slate-400'
                }`}
              >
                <span className={`text-xs uppercase tracking-wider ${isSelected ? 'text-poster-cyan font-bold' : 'text-slate-300'}`}>
                  {dayInfo.label}
                </span>
                <span className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Parque Saval
                </span>
              </button>
            );
          })}
        </div>

        {/* Day Summary Banner */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-poster-gold shrink-0" />
            <span className="text-xs sm:text-sm text-slate-200 font-sans">
              <strong className="text-white font-semibold">{currentDayData.date}:</strong> {currentDayData.summary}
            </span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-sans transition-all border ${
                  isSelected
                    ? 'bg-poster-gold text-poster-midnight font-bold border-poster-gold shadow-sm'
                    : 'bg-poster-dark/60 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Events Timeline List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay + categoryFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-3.5"
          >
            {filteredEvents.length === 0 ? (
              <div className="p-10 text-center rounded-3xl bg-poster-dark/60 border border-white/10">
                <p className="text-slate-400 text-sm">
                  No hay actividades programadas en esta categoría para este día.
                </p>
              </div>
            ) : (
              filteredEvents.map((ev) => (
                <div
                  key={ev.id}
                  className={`p-6 rounded-2xl transition-all duration-200 border flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                    ev.isLiveHighlight
                      ? 'bg-gradient-to-r from-[#06294d] via-poster-dark to-poster-dark border-poster-cyan/50 shadow-xl shadow-poster-cyan/10'
                      : 'bg-poster-dark/70 border-white/10 hover:border-white/25'
                  }`}
                >
                  {/* Left: Time & Badges */}
                  <div className="flex items-start gap-4 md:w-1/4 shrink-0">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-poster-gold font-bold text-sm sm:text-base">
                        <Clock className="w-4 h-4" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                        <MapPin className="w-3.5 h-3.5 text-poster-cyan" />
                        <span>{ev.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-poster-cyan font-bold">
                        {ev.categoryLabel}
                      </span>
                      {ev.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-poster-gold/10 text-poster-gold border border-poster-gold/20 font-medium">
                          {ev.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-archivo font-extrabold text-white mb-1">
                      {ev.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {ev.description}
                    </p>
                  </div>

                  {/* Right: Quick Action */}
                  <div className="shrink-0 flex items-center justify-end">
                    <button
                      onClick={() => onOpenModal(ev.category === 'sem' ? 'sem' : 'general')}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-poster-cyan hover:text-poster-midnight border border-white/15 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <span>Inscribirme</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
