'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Link2,
  Zap,
  Lightbulb,
  Settings,
  Cloud,
  Database,
  Cpu,
  Network,
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
      {/* Fluxo de automação Make/n8n */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.25]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 900"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Fluxo completo — começa na esquerda, ramifica e termina na direita */}
          <motion.path
            d="M150 450 C300 420 400 380 550 420 S850 480 950 420 S1150 380 1250 450"
            stroke="#5a5aff"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: 'easeInOut',
            }}
          />

          {/* Linhas de ramificação superior e inferior */}
          <motion.path
            d="M550 420 C650 350 800 360 900 300"
            stroke="#323284"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              delay: 0.8,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: 'easeInOut',
            }}
          />

          <motion.path
            d="M550 420 C650 480 800 500 900 550"
            stroke="#323284"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: 'easeInOut',
            }}
          />

          {/* Nós com ícones — aparecem conforme o fluxo avança */}
          {[
            { x: 150, y: 450, icon: Settings, delay: 0 },
            { x: 550, y: 420, icon: Database, delay: 1 },
            { x: 900, y: 300, icon: Cloud, delay: 2 },
            { x: 900, y: 550, icon: Network, delay: 2.2 },
            { x: 1250, y: 450, icon: Cpu, delay: 3 },
          ].map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: n.delay,
                  repeat: Infinity,
                  repeatDelay: 7.5 - n.delay,
                  ease: 'easeOut',
                }}
              >
                <circle cx={n.x} cy={n.y} r="45" fill="#5a5aff" opacity="0.1" />
                <circle cx={n.x} cy={n.y} r="22" fill="#5a5aff" opacity="0.35" />
                <foreignObject
                  x={n.x - 14}
                  y={n.y - 14}
                  width="28"
                  height="28"
                >
                  <Icon className="w-7 h-7 text-white/90" />
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
