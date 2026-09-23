import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEM 2026 — Seminario de Electromovilidad Marítima | Valdivia Náutica',
  description:
    'El principal foro del Cono Sur dedicado a la descarbonización del transporte fluvial y marítimo, propulsión eléctrica, solar e innovación naval sostenible. 4 al 6 de diciembre de 2026 en Parque Saval, Valdivia.',
  keywords: [
    'SEM 2026',
    'Seminario de Electromovilidad Marítima',
    'Valdivia Náutica 2026',
    'Electromovilidad Marítima Chile',
    'Propulsión Eléctrica Barcos',
    'Descarbonización Fluvial',
    'Parque Saval',
    'Río Calle-Calle',
  ],
  openGraph: {
    title: 'SEM 2026 — Seminario de Electromovilidad Marítima',
    description:
      'Foro técnico, comercial y académico de electromovilidad marítima y fluvial. Parque Saval, Valdivia, 4-6 Diciembre 2026.',
    url: 'https://valdivianautica.cl/sem',
    siteName: 'Valdivia Náutica 2026',
    images: [
      {
        url: '/images/logo-sem-2026.png',
        width: 1200,
        height: 630,
        alt: 'Logo Oficial SEM 2026 — Seminario de Electromovilidad Marítima',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
};

export default function SemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
