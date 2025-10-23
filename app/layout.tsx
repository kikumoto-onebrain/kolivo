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
  title: 'Kolivo - Transformamos operações complexas em ecossistemas vivos',
  description: 'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas. ITOps, RPA, SOC, NOC e muito mais.',
  keywords: ['ITOps', 'RPA', 'SOC', 'NOC', 'Automação', 'IA', 'Cloud', 'Service Desk', 'Field Service'],
  openGraph: {
    title: 'Kolivo - IT Operations com automação e IA',
    description: 'Transformamos operações complexas em ecossistemas vivos',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kolivo - IT Operations com automação e IA',
    description: 'Transformamos operações complexas em ecossistemas vivos',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} font-raleway antialiased`}>{children}</body>
    </html>
  );
}
