'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StressTestSection() {
  return (
    <section
      id="stress-test"
      className="relative py-32 bg-kolivo-primary overflow-hidden"
    >
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          {/* Espaço à esquerda (para posicionar o conteúdo à direita) */}
          <div className="hidden lg:flex flex-1" />

          {/* Coluna direita - conteúdo alinhado à esquerda */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 relative z-10">
                Descubra os limites antes que o sistema descubra por você
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed mb-6 max-w-xl relative z-10"
            >
              Simulamos picos de acesso e cargas extremas para avaliar a
              resiliência da sua infraestrutura.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 leading-relaxed mb-12 max-w-xl relative z-10"
            >
              Nossos stress tests ajudam sua equipe a antecipar gargalos e
              preparar o ambiente para qualquer cenário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-kolivo-accent text-kolivo-accent hover:bg-kolivo-accent hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group"
              >
                Teste a performance da sua operação
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
