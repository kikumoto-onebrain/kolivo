'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Link2, Zap, Lightbulb } from 'lucide-react';
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
    <section id="rpa" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
              Automação que libera pessoas para inovar
            </h2>
            <p className="text-xl text-kolivo-gray max-w-3xl mx-auto">
              Com RPA (Robotic Process Automation), eliminamos tarefas manuais e
              otimizamos fluxos críticos com precisão e segurança.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-kolivo-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.15)]"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-kolivo-accent/10 mb-6 group-hover:bg-kolivo-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-kolivo-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-kolivo-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-kolivo-gray">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
            >
              Acelere sua operação
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
