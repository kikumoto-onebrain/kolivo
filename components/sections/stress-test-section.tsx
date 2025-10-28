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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Velocímetro animado - lado esquerdo */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-64 h-64 flex justify-center items-center">
              {/* Base semicircular */}
              <svg viewBox="0 0 200 100" className="w-full h-auto">
                <path
                  d="M20 100 A80 80 0 0 1 180 100"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="12"
                  fill="none"
                />
              </svg>

              {/* Arco de gradiente (stress crescendo) */}
              <motion.svg
                viewBox="0 0 200 100"
                className="absolute top-0 left-0 w-full h-auto"
              >
                <defs>
                  <linearGradient id="speed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5a5aff" />
                    <stop offset="100%" stopColor="#9b9bff" />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M20 100 A80 80 0 0 1 180 100"
                  stroke="url(#speed-gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="250"
                  strokeDashoffset="250"
                  animate={{ strokeDashoffset: [250, 0, 250] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.svg>

              {/* Ponteiro do velocímetro */}
              <motion.div
                className="absolute origin-bottom"
                style={{
                  width: '4px',
                  height: '90px',
                  backgroundColor: '#5a5aff',
                  bottom: '10%',
                  transformOrigin: 'bottom center',
                }}
                animate={{ rotate: [0, 140, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Indicador central */}
              <motion.div
                className="absolute bottom-0 text-white/80 font-semibold text-lg"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                STRESS TEST
              </motion.div>
            </div>
          </div>

          {/* Coluna direita - conteúdo */}
          <div className="flex-1 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Descubra os limites antes que o sistema descubra por você
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed mb-6 max-w-xl"
            >
              Simulamos picos de acesso e cargas extremas para avaliar a
              resiliência da sua infraestrutura.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 leading-relaxed mb-12 max-w-xl"
            >
              Nossos stress tests ajudam sua equipe a antecipar gargalos e
              preparar o ambiente para qualquer cenário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
