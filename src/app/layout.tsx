import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Valdivia Náutica 2026 — Capital Náutica de Chile',
  description:
    'Feria de industria naval, electromovilidad marítima (SEM), pesca artesanal, deportes náuticos y oficios de ribera. 4 al 6 de diciembre de 2026 en Parque Saval, Valdivia.',
  keywords: [
    'Valdivia Náutica 2026',
    'Feria Náutica Valdivia',
    'Electromovilidad Marítima Chile',
    'SEM 2026',
    'Astilleros Valdivia',
    'Parque Saval',
    'Regata Calle Calle',
    'Expo Pesca Valdivia',
  ],
  authors: [{ name: 'Valdivia Náutica' }],
  metadataBase: new URL('https://valdivianautica.cl'),
  alternates: {
    canonical: 'https://valdivianautica.cl',
  },
  openGraph: {
    title: 'Valdivia Náutica 2026 — 4 al 6 de Diciembre',
    description:
      'Industria, innovación, electromovilidad marítima, deportes y comunidad en torno al agua.',
    url: 'https://valdivianautica.cl',
    siteName: 'Valdivia Náutica',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valdivia Náutica 2026',
    description: 'Encuentro náutico, naval y de electromovilidad en Parque Saval, Valdivia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-screen bg-naval-950 text-slate-100 flex flex-col font-sans selection:bg-cyanic-400 selection:text-naval-950">
        {children}
      </body>
    </html>
  );
}
