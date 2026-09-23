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
import SemRegistrationModal from '@/components/ui/SemRegistrationModal';

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
        <ImpactManifesto onOpenModal={handleOpenModal} />

        {/* Bloques reservados para fases posteriores (preservados en componentes): */}
        {/* <VisitorCompass onOpenModal={handleOpenModal} /> */}
        {/* <InteractiveVenueMap /> */}
        {/* <EventTimeline onOpenModal={handleOpenModal} /> */}

        {/* 3. Pabellón de Patrocinios B2B: Metales de Transición Energética */}
        <SponsorsSection onOpenModal={handleOpenModal} />

        {/* 4. Marquesina Institucional: Organizan, Patrocinan e Impulsan */}
        <OrganizersBar />
      </main>

      {/* Footer Editorial */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Contact & Registration Modals */}
      <ContactModal
        isOpen={modalState.isOpen && modalState.type !== 'sem'}
        onClose={handleCloseModal}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />

      <SemRegistrationModal
        isOpen={modalState.isOpen && modalState.type === 'sem'}
        onClose={handleCloseModal}
        initialLevel={modalState.level || 'general'}
      />
    </>
  );
}
