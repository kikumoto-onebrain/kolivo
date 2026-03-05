'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

import { Hero } from '@/components/soc/sections/hero';
import { ValueProposition } from '@/components/soc/sections/valueproposition';
import { SOC247 } from '@/components/soc/sections/soc247';
import { IAM } from '@/components/soc/sections/iam';
import { Tools } from '@/components/soc/sections/tools';
import { Methodology } from '@/components/soc/sections/methodology';
import { CTA } from '@/components/soc/sections/cta';
import { FAQ } from '@/components/soc/sections/faq';

export default function SOCPage() {
  return (
    <div className="bg-kolivo-primary text-white">
      <Header />

      <Hero />
      <ValueProposition />
      <SOC247 />
      <IAM />
      <Tools />
      <Methodology />
      <CTA />
      <FAQ />

      <Footer />
    </div>
  );
}