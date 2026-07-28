'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import TresDimensiones from '@/components/ui/TresDimensiones';
import InclusiveMessage from '@/components/ui/InclusiveMessage';
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
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Manifiesto & Propósito Inclusive: "Una Feria Para Todos" */}
        <InclusiveMessage />

        {/* 3. Las Tres Dimensiones: Desarrollo, Territorio, Identidad */}
        <TresDimensiones />

        {/* 4. Siete Mundos Detail */}
        <MundosSection />

        {/* 5. Perfil de Audiencia (Para Ti) */}
        <AudienceTabs onOpenModal={handleOpenModal} />

        {/* 6. Salón de Electromovilidad Marítima (SEM) */}
        <SEMHighlight onOpenModal={handleOpenModal} />

        {/* 7. Categorías de Auspicio (Litio, Cobalto, Manganeso, Níquel, Cadmio) */}
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
