'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Link2,
  Zap,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Settings,
  Cloud,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Bot,
    title: 'Processos automatizados',
    description: 'Reduza erros e retrabalho.',
  },
  {
    icon: Link2,
    title: 'Integrações fluidas',
    description: 'Sistemas que conversam entre si.',
  },
  {
    icon: Zap,
    title: 'IA aplicada',
    description: 'Decisões mais rápidas e eficientes.',
  },
  {
    icon: Lightbulb,
    title: 'Tempo para inovar',
    description: 'Libere pessoas para pensar o futuro.',
  },
];

export function RPASection() {
  return (
    <section
      id="rpa"
      className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Fundo animado — fluxo tipo Make/n8n */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.15]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 900"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Linhas principais — fluxo */}
          <motion.path
            d="M700 450 C850 400 1050 500 1150 350"
            stroke="#5a5aff"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M700 450 C850 500 1050 600 1200 550"
            stroke="#5a5aff"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 2,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            d="M700 450 C550 500 400 400 250 450"
            stroke="#323284"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: 3,
              ease: 'easeInOut',
            }}
          />

          {/* Nós centrais e ramificações */}
          {[
            { x: 700, y: 450, icon: Settings },
            { x: 250, y: 450, icon: Database },
            { x: 1150, y: 350, icon: Cloud },
            { x: 1200, y: 550, icon: Network },
            { x: 950, y: 480, icon: Cpu },
            { x: 550, y: 400, icon: Bot },
          ].map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.g
                key={i}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <circle cx={n.x} cy={n.y} r="35" fill="#5a5aff" opacity="0.08" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="18"
                  fill="#5a5aff"
                  opacity="0.25"
                />
                <foreignObject
                  x={n.x - 12}
                  y={n.y - 12}
                  width="24"
                  height="24"
                >
                  <Icon className="w-6 h-6 text-white/70" />
                </foreignObject>
              </motion.g>
            );
          })}
        </motion.svg>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Coluna Esquerda — Título e texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
              Automação que libera pessoas para inovar
            </h2>
            <p className="text-xl text-kolivo-gray mb-10 max-w-lg">
              Com RPA (Robotic Process Automation), eliminamos tarefas manuais e
              otimizamos fluxos críticos com precisão e segurança.
            </p>

            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
            >
              Acelere sua operação
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Coluna Direita — Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-kolivo-accent transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.15)] max-w-[300px] mx-auto"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-kolivo-accent/10 mb-4 group-hover:bg-kolivo-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-kolivo-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-kolivo-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-kolivo-gray leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
