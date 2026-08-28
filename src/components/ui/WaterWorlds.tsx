'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Fish, 
  Ship, 
  Hammer, 
  Sailboat, 
  Users, 
  Compass, 
  ArrowUpRight, 
  ChevronRight
} from 'lucide-react';

const WORLDS = [
  {
    id: 'sem',
    name: 'Electromovilidad Marítima',
    sub: 'SEM 2026 · Descarbonización Fluvial',
    desc: 'Salón de Electromovilidad Marítima co-organizado con la UACh y THEMS. Conferencias con expertos internacionales, catamarán solar y propulsión limpia cero emisiones.',
    href: '/sem',
    icon: Zap,
    tag: 'SEM 2026',
    featured: true,
    accent: 'poster-cyan',
  },
  {
    id: 'pesca',
    name: 'Pesca y Acuicultura',
    sub: 'Expo Pesca · Deportes & Saberes del Mar',
    desc: 'Campeonatos de orilla y embarcada en la cuenca del Cruces y Calle-Calle. Equipamiento de marcas líderes, señuelos y acuicultura sustentable.',
    href: '/expo-pesca',
    icon: Fish,
    tag: 'EXPO PESCA',
    featured: false,
    accent: 'poster-gold',
  },
  {
    id: 'deporte',
    name: 'Deporte y Aventura',
    sub: 'Remo, Kayak & Regatas en el Calle-Calle',
    desc: 'Regatas con clubes valdivianos centenarios, cantera histórica de campeones olímpicos y clínicas de kayak abiertas para jóvenes y familias.',
    href: '/deporte-turismo',
    icon: Sailboat,
    tag: 'REMO & DEPORTE',
    featured: false,
    accent: 'poster-gold',
  },
  {
    id: 'naval',
    name: 'Industria Naval y Servicios',
    sub: 'Astilleros, ASENAV & Proveedores B2B',
    desc: 'Exhibición de construcción naval con astilleros como ASENAV, armadores, motores marinos, tecnología y rueda de negocios internacional.',
    href: '/industria-naval',
    icon: Ship,
    tag: 'ASTILLEROS & B2B',
    featured: false,
    accent: 'white',
  },
  {
    id: 'comunidad',
    name: 'Comunidad y Educación',
    sub: 'UACh, Escuelas & Territorio Ciudadano',
    desc: 'Integración de las universidades, centros científicos, colegios técnicos y la comunidad local en torno a la cultura y el cuidado de los ríos.',
    href: '/valdivia',
    icon: Users,
    tag: 'COMUNIDAD',
    featured: false,
    accent: 'poster-cyan',
  },
  {
    id: 'turismo',
    name: 'Turismo y Experiencias',
    sub: 'Paseos Fluviales, Gastronomía & Paisaje',
    desc: 'Navegación turística por el Santuario de la Naturaleza, patio de gastronomía costera tradicional y degustación de cerveza artesanal valdiviana.',
    href: '/valdivia',
    icon: Compass,
    tag: 'TURISMO FLUVIAL',
    featured: false,
    accent: 'poster-cyan',
  },
  {
    id: 'patrimonio',
    name: 'Ciencia, Patrimonio e Innovación',
    sub: 'Carpintería de Ribera & Saberes del Sur',
    desc: 'El oficio ancestral de los maestros carpinteros de ribera construyendo embarcaciones de madera nativa en directo frente a los visitantes.',
    href: '/oficios',
    icon: Hammer,
    tag: 'PATRIMONIO VIVO',
    featured: false,
    accent: 'poster-gold',
  },
];

export default function WaterWorlds() {
  const heroWorld = WORLDS[0]; // SEM
  const otherWorlds = WORLDS.slice(1);

  return (
    <section id="mundos" className="py-20 bg-gradient-to-b from-poster-midnight via-[#03132e] to-poster-midnight text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-poster-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-archivo font-extrabold text-white tracking-tight">
              Los 7 Mundos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">Agua</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-md font-sans leading-relaxed">
            Una mirada integral que une la alta tecnología naval con las raíces centenarias de la navegación fluvial.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. HERO FEATURED CARD: SEM 2026 (Spans 12 columns on mobile, 12 on tablet, 12 on desktop with horizontal impact) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#06264c] via-[#051c38] to-poster-dark border border-poster-cyan/40 shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Top Badge & Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poster-cyan/20 border border-poster-cyan/50 text-poster-cyan text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-poster-gold" />
                <span>Mundo 01 · {heroWorld.name}</span>
              </div>
              <span className="text-xs text-slate-400 font-sans">Pabellón Central & Auditorio</span>
            </div>

            {/* Content */}
            <div className="max-w-3xl my-3">
              <h3 className="text-2xl sm:text-4xl font-archivo font-extrabold text-white mb-3 leading-snug group-hover:text-poster-cyan transition-colors">
                La transición energética fluvial nace en los ríos del sur
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                {heroWorld.desc}
              </p>

              {/* Mini Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Catamarán Solar UACh</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Hidrógeno Verde</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Propulsión Eléctrica</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Descarbonización Marítima</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-sans">
                Convocatoria a expositores, academia y empresas abierta
              </span>
              <Link
                href={heroWorld.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-poster-cyan text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-poster-cyan/20"
              >
                <span>Explorar Programa SEM</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 2 to 7: The remaining 6 Official Worlds from Poster (Clean 3-column grid) */}
          {otherWorlds.map((world, idx) => {
            const Icon = world.icon;
            return (
              <motion.div
                key={world.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="md:col-span-6 lg:col-span-4 p-7 rounded-3xl bg-poster-dark/80 border border-white/15 hover:border-white/40 shadow-xl flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-poster-cyan/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {world.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-archivo font-extrabold text-white mb-1.5 group-hover:text-poster-cyan transition-colors">
                    {world.name}
                  </h3>
                  <div className="text-xs text-poster-gold font-medium mb-3">
                    {world.sub}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {world.desc}
                  </p>
                </div>

                <Link
                  href={world.href}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all bg-white/5 text-white hover:bg-white hover:text-poster-midnight border border-white/10"
                >
                  <span>Explorar Mundo</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
