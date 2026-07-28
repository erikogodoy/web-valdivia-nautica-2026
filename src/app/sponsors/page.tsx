'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';
import SponsorsSection from '@/components/ui/SponsorsSection';

export default function SponsorsPage() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'sponsor', level: '' });

  const handleOpenModal = (type = 'sponsor', level = '') => {
    setModalState({ isOpen: true, type, level });
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-32 pb-24 bg-naval-950">
        <SponsorsSection onOpenModal={handleOpenModal} />
      </main>

      <Footer onOpenModal={handleOpenModal} />
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: 'sponsor', level: '' })}
        initialType={modalState.type}
        initialLevel={modalState.level}
      />
    </>
  );
}
