'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NOCSection() {
  return (
    <section id="noc" className="relative py-32 bg-kolivo-primary overflow-hidden">
      {/* Imagem de fundo + overlay de cor */}
      <div className="absolute inset-0">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/noc.webp')",
          }}
        />
        {/* Overlay para preservar o tom principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-primary/90 via-kolivo-primary/80 to-transparent" />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Título e ícone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kolivo-accent/20 mb-6">
              <Network className="w-10 h-10 text-kolivo-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Monitoramento constante
            </h2>
          </motion.div>

          {/* Texto principal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl text-left"
          >
            Nosso NOC (Network Operations Center) garante alta disponibilidade e
            resposta proativa.
          </motion.p>

          {/* Texto complementar */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl text-left"
          >
            Detectamos e solucionamos incidentes antes que impactem o negócio,
            assegurando estabilidade, performance e experiência digital impecável.
          </motion.p>

          {/* Botão CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-left"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-kolivo-accent text-kolivo-accent hover:bg-kolivo-accent hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group"
            >
              Monitore sua rede
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
