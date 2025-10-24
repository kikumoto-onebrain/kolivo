import { IntroLogo } from '@/components/IntroLogo';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/hero-section';
import { ClientsCarousel } from '@/components/sections/clients-carousel';
import { ITOpsSection } from '@/components/sections/itops-section';
import { RPASection } from '@/components/sections/rpa-section';
import { SecuritySection } from '@/components/sections/security-section';
import { SOCSection } from '@/components/sections/soc-section';
import { NOCSection } from '@/components/sections/noc-section';
import { CloudSection } from '@/components/sections/cloud-section';
import { ServiceDeskSection } from '@/components/sections/service-desk-section';
import { AssetManagementSection } from '@/components/sections/asset-management-section';
import { StressTestSection } from '@/components/sections/stress-test-section';
import { FieldServiceSection } from '@/components/sections/field-service-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      {/* Tela inicial de entrada com logo animado */}
      <IntroLogo />

      {/* Header fixo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="min-h-screen">
        <HeroSection />
        <ClientsCarousel />
        <ITOpsSection />
        <RPASection />
        <SecuritySection />
        <SOCSection />
        <NOCSection />
        <CloudSection />
        <ServiceDeskSection />
        <AssetManagementSection />
        <StressTestSection />
        <FieldServiceSection />
        <ContactSection />
        <Footer />
        <Toaster />

        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Kolivo',
              url: 'https://kolivo.com.br',
              description:
                'Transformamos operações complexas em ecossistemas vivos. ITOps, RPA, SOC, NOC e muito mais.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://kolivo.com.br/?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* JSON-LD: Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'IT Operations',
              provider: {
                '@type': 'Organization',
                name: 'Kolivo',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Brazil',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Serviços de TI',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'ITOps',
                      description: 'IT Operations com automação e IA',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'RPA',
                      description: 'Robotic Process Automation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'SOC',
                      description: 'Centro de Operações de Segurança 24/7',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </main>
    </>
  );
}
