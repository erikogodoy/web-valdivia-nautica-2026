import type { Metadata } from 'next';
import { Inter, Archivo, Cabin } from 'next/font/google';
import './globals.css';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
});

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Valdivia Náutica 2026 — Capital Náutica de Chile',
  description:
    'Feria de industria naval, electromovilidad marítima (SEM), pesca y acuicultura, deportes y aventura, comunidad, educación, turismo y patrimonio. 4 al 6 de diciembre de 2026 en Parque Saval, Valdivia.',
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
    <html lang="es" className={`${inter.variable} ${archivo.variable} ${cabin.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-screen bg-poster-midnight text-slate-100 flex flex-col font-sans selection:bg-poster-cyan selection:text-poster-midnight">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
