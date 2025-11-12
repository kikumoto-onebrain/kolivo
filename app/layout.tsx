import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton'; // ✅ importa o botão

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kolivo.com.br'),
  title: 'Kolivo - ITOps com automação e IA',
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
    title: 'Kolivo - ITOps com automação e IA',
    description:
      'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kolivo.com.br',
    siteName: 'Kolivo',
    images: [
      {
        url: 'https://kolivo.com.br/thumb-kolivo.webp',
        secureUrl: 'https://kolivo.com.br/thumb-kolivo.webp',
        width: 1200,
        height: 630,
        alt: 'Kolivo - IT Ops com automação e IA',
        type: 'image/webp',
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Kolivo - IT Ops com automação e IA',
    description:
      'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas.',
    images: ['https://kolivo.com.br/thumb-kolivo.webp'],
    creator: '@kolivo',
  },

  // ✅ Outras propriedades úteis
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
        <WhatsAppButton /> {/* ✅ botão fixo de WhatsApp */}
      </body>
    </html>
  );
}
