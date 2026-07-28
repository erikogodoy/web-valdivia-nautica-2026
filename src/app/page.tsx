'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import OrganizersBar from '@/components/ui/OrganizersBar';
import InclusiveMessage from '@/components/ui/InclusiveMessage';
import TresDimensiones from '@/components/ui/TresDimensiones';
import MundosSection from '@/components/ui/MundosSection';
import AudienceTabs from '@/components/ui/AudienceTabs';
import SEMHighlight from '@/components/ui/SEMHighlight';
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
      {/* Semantic Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Semantic Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section (Inspirado directamente en el Afiche Oficial 2026) */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Barra de Marcas & Auspiciadores Oficiales (Municipalidad, UACh, ASENAV, THEMS, etc.) */}
        <OrganizersBar />

        {/* 3. Manifiesto & Propósito Inclusivo: "Una Feria Para Todos" */}
        <InclusiveMessage />

        {/* 4. Las Tres Dimensiones: Desarrollo, Territorio, Identidad */}
        <TresDimensiones />

        {/* 5. Siete Mundos Detail */}
        <MundosSection />

        {/* 6. Perfil de Audiencia (Para Ti) */}
        <AudienceTabs onOpenModal={handleOpenModal} />

        {/* 7. Salón de Electromovilidad Marítima (SEM) */}
        <SEMHighlight onOpenModal={handleOpenModal} />

        {/* 8. Categorías de Auspicio (Litio, Cobalto, Manganeso, Níquel, Cadmio) */}
        <SponsorsSection onOpenModal={handleOpenModal} />
      </main>

      {/* Semantic Footer */}
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
