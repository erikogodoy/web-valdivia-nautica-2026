'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Layers, 
  Ship, 
  Zap, 
  UtensilsCrossed, 
  Hammer, 
  Waves, 
  Sparkles,
  Info
} from 'lucide-react';

const ZONES = [
  {
    id: 'hangar',
    name: 'Hangar Principal',
    category: 'Astilleros & Industria Naval',
    icon: Ship,
    color: 'poster-cyan',
    coords: 'Centro del Recinto',
    description: 'El corazón industrial del evento. Stands de gran escala con astilleros como ASENAV, motores, proveedores de equipamiento náutico y rondas de negocios B2B.',
    activities: [
      'Exposición de maquetas y tecnología de astilleros',
      'Ruedas de negocios con delegaciones internacionales',
      'Stands de proveedores marítimos e ingeniería',
    ],
    facilities: ['Acceso universal', 'Acreditaciones B2B', 'Wifi libre'],
    x: '42%',
    y: '48%',
  },
  {
    id: 'sem',
    name: 'Pabellón SEM & Auditorio',
    category: 'Salón Electromovilidad Marítima',
    icon: Zap,
    color: 'poster-gold',
    coords: 'Zona Norte Parque Saval',
    description: 'Espacio climatizado de conferencias co-organizado con la UACh y THEMS. Charlas de transición energética, hidrógeno verde y propulsión limpia.',
    activities: [
      'Seminarios magistrales internacionales',
      'Presentación del Catamarán Solar UACh',
      'Paneles ministeriales de descarbonización',
    ],
    facilities: ['Traducción simultánea', 'Cafetería de networking', 'Grabación y streaming'],
    x: '68%',
    y: '28%',
  },
  {
    id: 'muelle',
    name: 'Muelle Fluvial Calle-Calle',
    category: 'Navegación & Regatas',
    icon: Waves,
    color: 'poster-cyan',
    coords: 'Ribera del Río Calle-Calle',
    description: 'Punto de contacto directo con el agua. Embarque para los paseos fluviales por el Santuario de la Naturaleza y punto de partida de las regatas de remo y kayak.',
    activities: [
      'Paseos fluviales guiados cada 45 minutos',
      'Largada y meta de las regatas de remo valdiviano',
      'Bautizos náuticos en kayak para público general',
    ],
    facilities: ['Personal de seguridad', 'Muelle flotante universal', 'Guardería náutica'],
    x: '20%',
    y: '72%',
  },
  {
    id: 'gastronomia',
    name: 'Patio Gastronómico & Cerveza',
    category: 'Sabores de la Costa',
    icon: UtensilsCrossed,
    color: 'poster-gold',
    coords: 'Área Verde Central',
    description: 'El espacio de encuentro social con la gastronomía tradicional del mar y los ríos, maridada con las mejores cervecerías artesanales de la Región de Los Ríos.',
    activities: [
      'Cocina fluvial y costera en vivo (Cooking Shows)',
      'Degustación de cervezas artesanales valdivianas',
      'Música en vivo al atardecer',
    ],
    facilities: ['Mesas al aire libre y techadas', 'Puntos limpios', 'Baños'],
    x: '75%',
    y: '65%',
  },
  {
    id: 'oficios',
    name: 'Explanada Pesca & Oficios',
    category: 'Expo Pesca & Carpintería',
    icon: Hammer,
    color: 'white',
    coords: 'Zona Sur / Galpones',
    description: 'Área de demostración viva donde maestros armadores construyen embarcaciones de madera in situ y marcas de pesca exhiben sus últimas cañas y señuelos.',
    activities: [
      'Talleres en directo de carpintería de ribera',
      'Clínicas de lanzamiento y atado de moscas',
      'Pesaje de campeonatos de pesca de orilla',
    ],
    facilities: ['Gradas para demostraciones', 'Venta directa', 'Información de torneos'],
    x: '30%',
    y: '25%',
  },
];

export default function InteractiveVenueMap() {
  const [activeZoneId, setActiveZoneId] = useState('hangar');

  const currentZone = ZONES.find((z) => z.id === activeZoneId) || ZONES[0];
  const ZoneIcon = currentZone.icon;

  return (
    <section id="mapa" className="py-20 bg-poster-midnight relative overflow-hidden border-t border-white/10">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-poster-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean without pre-title pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-archivo font-extrabold text-white tracking-tight">
              Mapa del <span className="text-poster-gold">Recinto</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-sans leading-relaxed">
              Explora las zonas temáticas, los pabellones cerrados, el muelle fluvial y el patio de experiencias en Parque Saval.
            </p>
          </div>

          {/* Quick Zone Selector Buttons */}
          <div className="flex flex-wrap gap-2">
            {ZONES.map((zone) => {
              const isSelected = activeZoneId === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZoneId(zone.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-poster-cyan text-poster-midnight font-bold border-poster-cyan shadow-md shadow-poster-cyan/20'
                      : 'bg-poster-dark/60 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  <span>{zone.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Stylized Visual Map Representation */}
          <div className="lg:col-span-7 rounded-3xl bg-[#031428] border border-white/15 p-6 sm:p-8 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* Water River Curve Graphic in SVG */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
            >
              <path
                d="M-50,450 C200,480 350,250 850,300"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="70"
                strokeLinecap="round"
              />
              <path
                d="M-50,450 C200,480 350,250 850,300"
                fill="none"
                stroke="#0025b5"
                strokeWidth="40"
                strokeLinecap="round"
              />
            </svg>

            {/* Top Map Labels */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-slate-300 text-xs">
                <Layers className="w-3.5 h-3.5 text-poster-cyan" />
                <span>Vista Espacial del Evento</span>
              </div>
              <span className="text-xs text-poster-cyan/80">
                Isla Teja, Valdivia
              </span>
            </div>

            {/* Hotspot Markers on the Map */}
            <div className="relative w-full h-full flex-grow my-4">
              {ZONES.map((zone) => {
                const isSelected = activeZoneId === zone.id;
                const Icon = zone.icon;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZoneId(zone.id)}
                    style={{ left: zone.x, top: zone.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl flex items-center gap-2 transition-all duration-300 z-20 ${
                      isSelected
                        ? 'bg-poster-gold text-poster-midnight scale-110 shadow-2xl shadow-poster-gold/50 ring-4 ring-poster-gold/30'
                        : 'bg-poster-dark/90 text-white border border-white/20 hover:scale-105 hover:border-poster-cyan'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold whitespace-nowrap hidden sm:inline">
                      {zone.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Map River Tag */}
            <div className="flex items-center justify-between relative z-10 pt-2 border-t border-white/10 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-poster-cyan">
                <Waves className="w-3.5 h-3.5" />
                <span>Río Calle-Calle</span>
              </span>
              <span>Parque Saval</span>
            </div>
          </div>

          {/* Right: Zone Live Details Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentZone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 p-8 rounded-3xl bg-poster-dark/90 border border-white/15 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Zone Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-poster-cyan/10 border border-poster-cyan/30 flex items-center justify-center text-poster-cyan">
                      <ZoneIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-poster-cyan font-bold">
                        {currentZone.category}
                      </div>
                      <div className="text-xs text-slate-400">
                        {currentZone.coords}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-archivo font-extrabold text-white mb-3">
                  {currentZone.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-sans mb-6">
                  {currentZone.description}
                </p>

                {/* Key Activities in this Zone */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-poster-gold" />
                    <span>Qué encontrarás aquí:</span>
                  </div>
                  {currentZone.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-poster-gold shrink-0 mt-1.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities Badge Bar */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <Info className="w-3.5 h-3.5 text-poster-cyan" />
                  <span>Servicios y accesibilidad:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentZone.facilities.map((fac, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-poster-midnight border border-white/10 text-slate-300">
                      {fac}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
