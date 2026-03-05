'use client';

import { motion } from 'framer-motion';
import { Radar, Siren, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SOC247() {
  const items = [
    { icon: Radar, title: 'Monitoramento contínuo', desc: 'Visibilidade e correlação de eventos para detectar anomalias.' },
    { icon: Siren, title: 'Resposta a incidentes', desc: 'Triagem, contenção e orientação para reduzir impacto e tempo de exposição.' },
    { icon: Brain, title: 'Threat Intelligence', desc: 'Contexto de ameaça para priorizar risco e agir com precisão.' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            SOC 24/7: detectar, responder e evoluir
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Operação contínua com processos e indicadores para reduzir MTTR, aumentar rastreabilidade e
            sustentar decisões de segurança.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.18)]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                <Icon className="w-7 h-7 text-kolivo-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero estruturar um SOC 24/7
          </Button>
        </div>
      </div>
    </section>
  );
}