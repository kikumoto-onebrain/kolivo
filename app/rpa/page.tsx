import type { Metadata } from 'next';
import RPA from '@/components/rpa/rpa';

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
  return <RPA />;
}