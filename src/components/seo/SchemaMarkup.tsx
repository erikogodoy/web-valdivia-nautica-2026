import React from 'react';

export default function SchemaMarkup() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Valdivia Náutica 2026',
    description:
      'Feria de industria naval, innovación en electromovilidad marítima, pesca artesanal, deportes acuáticos, oficios de ribera y comunidad en torno al agua.',
    startDate: '2026-12-04T09:00:00-04:00',
    endDate: '2026-12-06T19:00:00-04:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Centro de Ferias Parque Saval',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Isla Teja, Parque Saval',
        addressLocality: 'Valdivia',
        addressRegion: 'Los Ríos',
        postalCode: '5090000',
        addressCountry: 'CL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -39.8142,
        longitude: -73.2459,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Valdivia Náutica',
      url: 'https://valdivianautica.cl',
      email: 'info@valdivianautica.cl',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CLP',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      url: 'https://valdivianautica.cl',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
}
