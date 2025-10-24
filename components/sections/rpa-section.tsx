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
      {/* Fundo animado — fluxo Make/n8n aprimorado */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.25]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 900"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Linhas de automação — iniciando da esquerda */}
          <motion.path
            d="M150 450 C400 350 800 550 1150 400"
            stroke="#5a5aff"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M150 450 C400 550 800 650 1200 500"
            stroke="#323284"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 2,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            d="M150 450 C300 500 700 400 1050 550"
            stroke="#5a5aff"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: 3,
              ease: 'easeInOut',
            }}
          />

          {/* Pulsos de energia indo da esquerda → direita */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="6"
              fill="#ffffff"
              stroke="#5a5aff"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <animateMotion
                dur={`${8 + i * 2}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#pulse-path-${i}`} />
              </animateMotion>
            </motion.circle>
          ))}

          {/* Nós visíveis e maiores */}
          {[
            { x: 150, y: 450, icon: Database },
            { x: 450, y: 400, icon: Settings },
            { x: 700, y: 470, icon: Cpu },
            { x: 950, y: 420, icon: Cloud },
            { x: 1200, y: 500, icon: Network },
          ].map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.g
                key={i}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <circle cx={n.x} cy={n.y} r="42" fill="#5a5aff" opacity="0.1" />
                <circle cx={n.x} cy={n.y} r="22" fill="#5a5aff" opacity="0.3" />
                <foreignObject
                  x={n.x - 14}
                  y={n.y - 14}
                  width="28"
                  height="28"
                >
                  <Icon className="w-7 h-7 text-white/80" />
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
