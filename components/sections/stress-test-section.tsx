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
      {/* Gráfico animado à esquerda */}
      <div className="absolute inset-0 flex justify-center lg:justify-start items-center pointer-events-none">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          className="w-[90%] max-w-4xl opacity-20"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5a5aff" />
              <stop offset="100%" stopColor="#9b9bff" />
            </linearGradient>
          </defs>

          {/* Linha base */}
          <path
            d="M0 200 H800"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
          />

          {/* Linha de batimentos */}
          <motion.path
            d="M0 200 L100 200 L130 150 L160 250 L190 200 L220 200 L250 170 L280 230 L310 200 L340 200 L370 120 L400 280 L430 200 L460 200 L490 180 L520 220 L550 200 L580 200 L610 150 L640 250 L670 200 L800 200"
            stroke="url(#pulse-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          {/* Espaço para o gráfico à esquerda */}
          <div className="hidden lg:flex flex-1" />

          {/* Coluna direita - texto e botão */}
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
