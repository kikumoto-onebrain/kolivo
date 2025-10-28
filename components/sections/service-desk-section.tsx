'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServiceDeskSection() {
  return (
    <section id="service-desk" className="relative py-32 bg-kolivo-primary overflow-hidden">
      {/* Imagem de fundo + overlay de cor */}
      <div className="absolute inset-0">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/service-desk.webp')",
          }}
        />
        {/* Overlay para preservar o tom principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-primary/90 via-kolivo-primary/80 to-transparent" />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Ícone e título */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kolivo-accent/20 mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Headphones className="w-10 h-10 text-kolivo-accent" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Suporte que resolve
            </h2>
          </motion.div>

          {/* Parágrafo principal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-8 text-center"
          >
            Com nosso Service Desk e CSC (Centro de Serviços Compartilhados),
            sua empresa ganha suporte ágil, integrado e humanizado. Monitoramos incidentes, 
            tratamos chamados e garantimos a continuidade do negócio com qualidade e SLA reais.
          </motion.p>

          {/* Botão CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-kolivo-accent text-kolivo-accent hover:bg-kolivo-accent hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group"
            >
              Otimize seu suporte
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
