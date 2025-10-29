import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kolivo.com.br'),
  title: 'Kolivo - IT Operations com automação e IA',
  description:
    'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas. ITOps, RPA, SOC, NOC e muito mais.',
  keywords: [
    'ITOps',
    'RPA',
    'SOC',
    'NOC',
    'Automação',
    'IA',
    'Cloud',
    'Service Desk',
    'Field Service',
  ],

  // ✅ Favicon e ícones
  icons: {
    icon: '/favicon-kolivo.svg',
    shortcut: '/favicon-kolivo.svg',
    apple: '/favicon-kolivo.svg',
  },

  // ✅ Cor do tema para navegadores e PWA
  themeColor: '#0B0C2A',

  // ✅ Open Graph (para WhatsApp, Slack, LinkedIn, etc.)
  openGraph: {
    title: 'Kolivo - IT Operations com automação e IA',
    description:
      'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kolivo.com.br',
    siteName: 'Kolivo',
    images: [
      {
        url: 'https://kolivo.com.br/thumb-kolivo.webp', // URL absoluta
        secureUrl: 'https://kolivo.com.br/thumb-kolivo.webp',
        width: 1200,
        height: 630,
        alt: 'Kolivo - IT Operations com automação e IA',
        type: 'image/webp',
      },
    ],
  },

  // ✅ Twitter Card (para compartilhamentos no X/Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Kolivo - IT Operations com automação e IA',
    description:
      'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas.',
    images: ['https://kolivo.com.br/thumb-kolivo.webp'],
    creator: '@kolivo',
  },

  // ✅ Outras propriedades úteis de SEO
  alternates: {
    canonical: 'https://kolivo.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} font-raleway antialiased`}>
        {children}
      </body>
    </html>
  );
}
