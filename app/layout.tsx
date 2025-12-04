import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Script from 'next/script';
import WhatsAppButton from '@/components/WhatsAppButton';

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
  icons: {
    icon: '/favicon-kolivo.svg',
    shortcut: '/favicon-kolivo.svg',
    apple: '/favicon-kolivo.svg',
  },
  themeColor: '#0B0C2A',
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
        alt: 'Kolivo - ITOps com automação e IA',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kolivo - ITOps com automação e IA',
    description:
      'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas.',
    images: ['https://kolivo.com.br/thumb-kolivo.webp'],
    creator: '@kolivo',
  },
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
      <head>
        {/* 👇 Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FEYSJPV6T9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FEYSJPV6T9');
          `}
        </Script>
      </head>
      <body className={`${raleway.variable} font-raleway antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
