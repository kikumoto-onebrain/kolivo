'use client';

import { motion } from 'framer-motion';
import { Bot, Layers, Plug, ShieldCheck } from 'lucide-react';

export function Methodology() {
  const steps = [
    {
      icon: Plug,
      title: '1) Diagnóstico de processos',
      desc: 'Mapeamos tarefas repetitivas, baseadas em regras e suscetíveis a erro humano.',
    },
    {
      icon: Layers,
      title: '2) Priorização por impacto',
      desc: 'Avaliamos frequência, volume e ganho potencial para selecionar o melhor backlog.',
    },
    {
      icon: Bot,
      title: '3) Desenvolvimento dos bots',
      desc: 'Construímos automações com rastreabilidade, segurança e integração aos fluxos existentes.',
    },
    {
      icon: ShieldCheck,
      title: '4) Implantação e governança',
      desc: 'Operação monitorada, logs, métricas e melhoria contínua para garantir estabilidade.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Como a Kolivo implementa RPA
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              Começamos com análise detalhada, priorizamos o que dá retorno e implantamos com governança e monitoramento.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                  <Icon className="w-6 h-6 text-kolivo-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}