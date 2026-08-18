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
  ArrowUpRight, 
  ChevronRight
} from 'lucide-react';

export default function WaterWorlds() {
  return (
    <section id="mundos" className="py-20 bg-gradient-to-b from-poster-midnight via-[#03132e] to-poster-midnight text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-poster-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean without pre-title) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-archivo font-extrabold text-white tracking-tight">
              Los Mundos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-poster-cyan via-white to-poster-gold">Agua</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-md font-sans leading-relaxed">
            Una mirada integral que une la alta tecnología de propulsión limpia con las raíces centenarias de la navegación fluvial.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. HERO FEATURED CARD: SEM 2026 (Spans 8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-12 lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#06264c] via-[#051c38] to-poster-dark border border-poster-cyan/40 shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Top Badge & Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poster-cyan/20 border border-poster-cyan/50 text-poster-cyan text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-poster-gold" />
                <span>Salón de Electromovilidad Marítima (SEM)</span>
              </div>
              <span className="text-xs text-slate-400 font-sans">Pabellón Central</span>
            </div>

            {/* Content */}
            <div className="max-w-2xl my-3">
              <h3 className="text-2xl sm:text-3xl font-archivo font-extrabold text-white mb-3 leading-snug group-hover:text-poster-cyan transition-colors">
                La transición energética fluvial nace en los ríos del sur
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                Co-organizado junto a la Universidad Austral de Chile y THEMS. Conferencias con expertos internacionales, pruebas de catamaranes solares en vivo en el Calle-Calle y rondas de innovación técnica cero emisiones.
              </p>

              {/* Mini Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Catamarán Solar UACh</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Hidrógeno Verde</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Propulsión Eléctrica</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-sans">
                Convocatoria a investigadores y empresas abierta
              </span>
              <Link
                href="/sem"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-poster-cyan text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-poster-cyan/20"
              >
                <span>Explorar Programa SEM</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 2. EXPO PESCA 2026 (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 p-8 rounded-3xl bg-poster-dark/80 border border-poster-gold/40 hover:border-poster-gold shadow-xl flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-poster-gold/10 border border-poster-gold/30 flex items-center justify-center text-poster-gold">
                  <Fish className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 text-poster-gold border border-poster-gold/20">
                  EXPO PESCA
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-archivo font-extrabold text-white mb-2.5 group-hover:text-poster-gold transition-colors">
                Pesca Deportiva & Sustentable
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Campeonatos de orilla y embarcada en la cuenca del Cruces y Calle-Calle. Equipamiento de marcas líderes, señuelos y talleres de mosca.
              </p>
            </div>

            <Link
              href="/expo-pesca"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all bg-poster-gold/10 text-poster-gold hover:bg-poster-gold hover:text-poster-midnight border border-poster-gold/30"
            >
              <span>Ver Bases y Stands</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* 3. INDUSTRIA NAVAL & ASENAV (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="md:col-span-6 lg:col-span-4 p-8 rounded-3xl bg-poster-dark/80 border border-white/15 hover:border-white/40 shadow-xl flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Ship className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  ASTILLEROS & B2B
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-archivo font-extrabold text-white mb-2.5 group-hover:text-poster-cyan transition-colors">
                Vanguardia Naval & Proveedores
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Exhibición de la industria de astilleros con ASENAV a la cabeza, armadores, motores marinos y rueda de negocios internacional.
              </p>
            </div>

            <Link
              href="/industria-naval"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all bg-white/5 text-white hover:bg-white hover:text-poster-midnight border border-white/10"
            >
              <span>Pabellón Industrial</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* 4. CARPINTERÍA DE RIBERA & OFICIOS (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-4 p-8 rounded-3xl bg-poster-dark/80 border border-white/15 hover:border-white/40 shadow-xl flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Hammer className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  PATRIMONIO VIVO
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-archivo font-extrabold text-white mb-2.5 group-hover:text-poster-gold transition-colors">
                Carpintería de Ribera
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Demostraciones en vivo de los maestros armadores de madera nativa. El saber heredado que mantiene viva la memoria fluvial del sur.
              </p>
            </div>

            <Link
              href="/oficios"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all bg-white/5 text-white hover:bg-white hover:text-poster-midnight border border-white/10"
            >
              <span>Talleres en Directo</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* 5. DEPORTE, REMO & TURISMO (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="md:col-span-6 lg:col-span-4 p-8 rounded-3xl bg-poster-dark/80 border border-poster-cyan/30 hover:border-poster-cyan shadow-xl flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-poster-cyan/10 border border-poster-cyan/30 flex items-center justify-center text-poster-cyan">
                  <Sailboat className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 text-poster-cyan border border-poster-cyan/20">
                  REMO & TURISMO
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-archivo font-extrabold text-white mb-2.5 group-hover:text-poster-cyan transition-colors">
                Deporte & Experiencias Fluviales
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Regatas en el río Calle-Calle con clubes valdivianos centenarios, paseos guiados por el Santuario de la Naturaleza y gastronomía costera.
              </p>
            </div>

            <Link
              href="/deporte-turismo"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all bg-poster-cyan/10 text-poster-cyan hover:bg-poster-cyan hover:text-poster-midnight border border-poster-cyan/30"
            >
              <span>Ver Actividades en Río</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
