'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section id="contato" className="py-20 sm:py-24 bg-kolivo-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Quer automatizar processos com RPA?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Solicite um diagnóstico e receba recomendações práticas para reduzir tempo, erros e retrabalho com automação e integrações.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5511996456724"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <Link href="/framework/quiz" className="inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-lg"
              >
                Fazer avaliação gratuita
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Tempo médio de avaliação: 5–6 minutos. Diagnóstico direcionado para seu cenário.
          </div>
        </div>
      </div>
    </section>
  );
}