'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StressTestSection() {
  return (
    <section id="stress-test" className="relative py-32 bg-kolivo-primary overflow-hidden">
      {/* Fundo animado com barras */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-end justify-around h-full px-8 pb-8">
          {[40, 70, 50, 90, 60, 85, 45, 95].map((height, index) => (
            <motion.div
              key={index}
              className="bg-kolivo-accent rounded-t-lg"
              style={{ width: '8%' }}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Efeito de pulsos circulares simulando ondas de stress */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-kolivo-accent/30"
            style={{
              width: 200,
              height: 200,
            }}
            animate={{
              scale: [1, 3.5],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kolivo-accent/20 mb-6 relative z-10">
                <BarChart3 className="w-10 h-10 text-kolivo-accent" />
              </div>
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
