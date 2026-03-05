'use client';

import { motion } from 'framer-motion';
import { Bot, Layers, Plug, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          {/* HEADER */}
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

          {/* TIMELINE */}
          <div className="mt-12">
            <ol className="relative">
              {/* Linha vertical */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-white/10" />

              {steps.map(({ icon: Icon, title, desc }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Nó + ícone */}
                  <motion.div
                    // motion constante suave no ícone (não conflita com hover do card)
                    animate={{ y: [-2, 2] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                      delay: i * 0.15,
                    }}
                    className="absolute left-0 top-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-kolivo-accent/10 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-kolivo-accent" />
                    </div>
                  </motion.div>

                  {/* Card da etapa */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.18)]"
                  >
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-gray-300 leading-relaxed">{desc}</p>
                  </motion.div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 flex justify-center"
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              onClick={() => {
                document
                  .getElementById('contato')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero implementar RPA
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}