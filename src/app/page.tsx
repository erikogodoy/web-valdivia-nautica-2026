'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import OrganizersBar from '@/components/ui/OrganizersBar';
import NarrativeIntro from '@/components/ui/NarrativeIntro';
import InterestHub from '@/components/ui/InterestHub';
import TresDimensiones from '@/components/ui/TresDimensiones';
import AudienceTabs from '@/components/ui/AudienceTabs';
import SponsorsSection from '@/components/ui/SponsorsSection';
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
      {/* Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Narrative Flow */}
      <main className="flex-grow">
        {/* 1. Hero Visual & Coordenadas */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Marquesina de Instituciones Patrocinadoras */}
        <OrganizersBar />

        {/* 3. Presentación Narrativa de 1 Párrafo Elocuente */}
        <NarrativeIntro />

        {/* 4. Hub de Descubrimiento Inmediato por Pasión (Pesca, SEM, Industria, Remo, Turismo, Oficios) */}
        <InterestHub />

        {/* 5. Las Tres Dimensiones: Desarrollo, Territorio, Identidad */}
        <TresDimensiones />

        {/* 6. Guía por Perfil de Usuario */}
        <AudienceTabs onOpenModal={handleOpenModal} />

        {/* 7. Niveles de Patrocinio */}
        <SponsorsSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
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
