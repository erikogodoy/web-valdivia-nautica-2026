'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import { MapPin, Navigation, Plane, Bus, Car } from 'lucide-react';

export default function ValdiviaPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'general', level: '' });

  const handleOpenModal = (type = 'general', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-naval-950">
        
        <section className="relative py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-cyanic-400 font-bold mb-3 block">
              La Sede & El Territorio
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
              Valdivia: <span className="text-river-gradient">El Territorio del Agua</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              El Centro de Ferias Parque Saval es el recinto que alberga Valdivia Náutica 2026. Ubicado en la emblemática Isla Teja a orillas del río, combina pabellones cubiertos con acceso directo al agua para demostraciones náuticas.
            </p>
          </div>
        </section>

        {/* How to Get There */}
        <section className="py-16 bg-naval-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
              Cómo Llegar a Valdivia
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-2xl">
                <Plane className="w-8 h-8 text-cyanic-400 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Vía Aérea</h3>
                <p className="text-sm text-slate-300">
                  Vuelos diarios desde Santiago al Aeropuerto Pichoy (ZAL). Transfer directo de 30 minutos a Isla Teja / Parque Saval.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <Bus className="w-8 h-8 text-copper-500 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Vía Terrestre (Buses)</h3>
                <p className="text-sm text-slate-300">
                  Conexión directa desde todo Chile hacia el Terminal de Buses de Valdivia, a solo 5 minutos del reciento del evento.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <Car className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">En Vehículo</h3>
                <p className="text-sm text-slate-300">
                  Acceso por la Ruta 5 Sur (~840 km desde Santiago). Amplios estacionamientos habilitados dentro de Parque Saval.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenModal={handleOpenModal} />
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: 'general', level: '' })}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
