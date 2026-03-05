'use client';

import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

import { Hero } from '@/components/rpa/sections/hero';
import { ValueProposition } from '@/components/rpa/sections/valueproposition';
import { UseCases } from '@/components/rpa/sections/usecases';
import { AssistedVsUnassisted } from '@/components/rpa/sections/assisted-unassisted';
import { Platforms } from '@/components/rpa/sections/platforms';
import { Methodology } from '@/components/rpa/sections/methodology';
import { CTA } from '@/components/rpa/sections/cta';
import { FAQ } from '@/components/rpa/sections/faq';

export const metadata: Metadata = {
  title: 'Automação RPA | Reduza custos e acelere processos | Kolivo',
  description:
    'Automatize processos repetitivos com RPA. Reduza erros, aumente produtividade e integre sistemas com bots operando 24/7. ROI em 6–12 meses.',
  alternates: {
    canonical: 'https://kolivo.com.br/rpa',
  },
  openGraph: {
    title: 'Automação RPA | Kolivo',
    description:
      'Automatize processos repetitivos com RPA. Reduza erros, aumente produtividade e integre sistemas com bots operando 24/7.',
    url: 'https://kolivo.com.br/rpa',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kolivo',
    images: [
      {
        url: 'https://kolivo.com.br/thumb-kolivo.webp',
        width: 1200,
        height: 630,
        alt: 'Kolivo - Automação RPA',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automação RPA | Kolivo',
    description:
      'Automatize processos repetitivos com RPA. Reduza erros, aumente produtividade e integre sistemas com bots operando 24/7.',
    images: ['https://kolivo.com.br/thumb-kolivo.webp'],
  },
};

export default function RPAPage() {
  return (
    <div className="bg-kolivo-primary text-white">
      <Header />

      <Hero />
      <ValueProposition />
      <UseCases />
      <AssistedVsUnassisted />
      <Platforms />
      <Methodology />
      <CTA />
      <FAQ />

      <Footer />
    </div>
  );
}