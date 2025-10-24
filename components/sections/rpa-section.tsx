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
  { icon: Bot, title: 'Processos automatizados', description: 'Reduza erros e retrabalho.' },
  { icon: Link2, title: 'Integrações fluidas', description: 'Sistemas que conversam entre si.' },
  { icon: Zap, title: 'IA aplicada', description: 'Decisões mais rápidas e eficientes.' },
  { icon: Lightbulb, title: 'Tempo para inovar', description: 'Libere pessoas para pensar o futuro.' },
];

export function RPASection() {
  return (
    <section
      id="rpa"
      className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Fundo animado */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.25]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 900"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* ===== LINHA PRINCIPAL ===== */}
          <motion.path
            d="M150 450 C250 440 420 460 560 450"
            stroke="#5a5aff"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 3,
              times: [0, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
          />

          {/* ===== RAMIFICAÇÕES ===== */}
          {/* Superior */}
          <motion.path
            d="M560 450 C660 390 850 370 1000 400"
            stroke="#323284"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 2,
              delay: 3.2, // só começa após linha principal chegar
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
          />

          {/* Inferior */}
          <motion.path
            d="M560 450 C660 510 850 530 1000 500"
            stroke="#323284"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 2,
              delay: 3.2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
          />

          {/* ===== NÓS ===== */}
          {[
            { x: 150, y: 450, icon: Settings, delay: 0, persist: true }, // início fixo
            { x: 560, y: 450, icon: Database, delay: 2.8 }, // aparece quando linha chega
            { x: 1000, y: 400, icon: Cloud, delay: 4.5 },
            { x: 1000, y: 500, icon: Network, delay: 4.6 },
            { x: 850, y: 450, icon: Cpu, delay: 4.8 },
          ].map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  n.persist
                    ? { opacity: 1, scale: 1 } // engrenagem fixa, sem piscar
                    : { opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1, 0.9] }
                }
                transition={{
                  duration: n.persist ? 0.6 : 6,
                  delay: n.delay,
                  times: [0, 0.3, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: 'easeInOut',
                }}
              >
                <circle cx={n.x} cy={n.y} r="40" fill="#5a5aff" opacity="0.1" />
                <circle cx={n.x} cy={n.y} r="18" fill="#5a5aff" opacity="0.35" />
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

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Coluna Esquerda */}
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
