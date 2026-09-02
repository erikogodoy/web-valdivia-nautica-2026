'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import ImpactManifesto from '@/components/ui/ImpactManifesto';
import VisitorCompass from '@/components/ui/VisitorCompass';
import InteractiveVenueMap from '@/components/ui/InteractiveVenueMap';
import EventTimeline from '@/components/ui/EventTimeline';
import SponsorsSection from '@/components/ui/SponsorsSection';
import OrganizersBar from '@/components/ui/OrganizersBar';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type?: string;
    level?: string;
  }>({
    isOpen: false,
    type: 'general',
    level: '',
  });

  const handleOpenModal = (type = 'general', level = '') => {
    setModalState({
      isOpen: true,
      type,
      level,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {/* Dynamic Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Experience Flow */}
      <main className="flex-grow">
        {/* 1. Hero Inmersivo Fluvial con Video, Coordenadas y Cuenta Regresiva */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Manifiesto Fluvial, Cifras de Impacto Dinámicas y Slider Interactivo de los 7 Mundos */}
        <ImpactManifesto />

        {/* 3. La Brújula del Visitante (Selector Interactivo por Perfil) */}
        <VisitorCompass onOpenModal={handleOpenModal} />

        {/* 4. Mapa Interactivo de la Sede: Parque Saval & Río Calle-Calle */}
        <InteractiveVenueMap />

        {/* 5. Cronograma / Bitácora Interactiva de Actividades por Días con Foto de Regata */}
        <EventTimeline onOpenModal={handleOpenModal} />

        {/* 6. Pabellón de Patrocinios B2B: Metales de Transición Energética */}
        <SponsorsSection onOpenModal={handleOpenModal} />

        {/* 7. Marquesina Institucional */}
        <OrganizersBar />
      </main>

      {/* Footer Editorial */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Modal */}
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
