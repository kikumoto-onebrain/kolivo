'use client';

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