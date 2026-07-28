'use client';

import React, { useState } from 'react';
import { Users, Store, Award, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

interface AudienceTabsProps {
  onOpenModal: (type?: string) => void;
}

const AUDIENCES = [
  {
    id: 'espectador',
    label: 'Familia y Turista',
    icon: Users,
    heading: 'Vive la experiencia del río en Parque Saval',
    description: 'Tres días imperdibles con muestras gastronómicas, paseos fluviales, regatas en vivo, campeonatos de pesca y actividades para toda la familia.',
    highlights: [
      'Entrada liberada a muestras comunitarias y deportivas',
      'Espectáculos fluviales en vivo en la ribera del Calle-Calle',
      'Zonas gastronómicas y cerveza artesanal valdiviana',
      'Demostraciones de carpintería de ribera en directo',
    ],
    ctaText: 'Ver Programa Completo',
    ctaAction: 'program',
  },
  {
    id: 'expositor',
    label: 'Expositores B2B',
    icon: Store,
    heading: 'Conecta tu marca con la industria naval y marítima',
    description: 'El punto de encuentro anual donde astilleros, proveedores de repuestos, servicios marítimos y tecnología cierran negocios estratégicos.',
    highlights: [
      'Stands equipados en el Centro de Ferias Parque Saval',
      'Acceso a ruedas de negocios B2B nacionales e internacionales',
      'Presencia de delegaciones internacionales (ej. República Checa)',
      'Visitas guiadas a los principales astilleros de Valdivia',
    ],
    ctaText: 'Solicitar Espacio de Stand',
    ctaAction: 'expositor',
  },
  {
    id: 'sponsor',
    label: 'Sponsors & Marcas',
    icon: Award,
    heading: 'Sé protagonista del mayor hito náutico del sur de Chile',
    description: 'Posiciona a tu empresa en las categorías de patrocinio basadas en los metales de la transición energética (Litio, Cobalto, Manganeso, Níquel, Cadmio).',
    highlights: [
      'Presencia estelar en medios nacionales y plataformas digitales',
      'Pases VIP a seminarios del Salón de Electromovilidad Marítima (SEM)',
      'Naming de espacios y escenarios principales en Parque Saval',
      'Mesas de networking exclusivas con líderes gubernamentales y privados',
    ],
    ctaText: 'Revisar Niveles de Auspicio',
    ctaAction: 'sponsor',
  },
  {
    id: 'sem',
    label: 'SEM / Innovación',
    icon: Cpu,
    heading: 'Salón de Electromovilidad Marítima (SEM)',
    description: 'La vitrina de vanguardia desarrollada junto a la Universidad Austral de Chile (UACh) y THEMS, acelerando el transporte acuático sustentable.',
    highlights: [
      'Primeras pruebas navegadas de catamaranes eléctricos en Chile',
      'Ponencias con expertos en propulsión marina limpia e hidrógeno verde',
      'Participación de ministerios de Energía, Transportes y universidades',
      'Mesas de trabajo sobre regulación náutica cero emisiones',
    ],
    ctaText: 'Inscribirme al SEM 2026',
    ctaAction: 'sem',
  },
];

export default function AudienceTabs({ onOpenModal }: AudienceTabsProps) {
  const [activeTab, setActiveTab] = useState('espectador');

  const currentAudience = AUDIENCES.find((a) => a.id === activeTab) || AUDIENCES[0];
  const Icon = currentAudience.icon;

  return (
    <section id="audiencia" className="py-24 bg-naval-900/40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-copper-500 font-bold mb-2 block">
            Información por Perfil
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Diseñado según tus intereses
          </h2>
          <p className="text-slate-300 text-base">
            Selecciona tu perfil para conocer qué ofrece Valdivia Náutica 2026 para ti.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {AUDIENCES.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-cyanic-400 text-naval-950 shadow-lg shadow-cyanic-400/20 font-bold scale-[1.02]'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-naval-800/80'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-naval-950' : 'text-cyanic-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Content Display Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border-white/10 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyanic-400 font-bold mb-3">
                <Icon className="w-5 h-5" />
                {currentAudience.label}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                {currentAudience.heading}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {currentAudience.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pt-6 border-t border-white/10">
            {currentAudience.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyanic-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => onOpenModal(currentAudience.ctaAction)}
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all flex items-center gap-2 shadow-lg shadow-cyanic-400/20"
            >
              {currentAudience.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
