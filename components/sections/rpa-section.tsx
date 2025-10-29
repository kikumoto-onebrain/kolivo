'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Link2, Zap, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Bot, title: 'Processos automatizados', description: 'Reduza erros e retrabalho.' },
  { icon: Link2, title: 'Integrações fluidas', description: 'Sistemas que conversam entre si.' },
  { icon: Zap, title: 'IA aplicada', description: 'Decisões mais rápidas e eficientes.' },
  { icon: Lightbulb, title: 'Tempo para inovar', description: 'Libere pessoas para pensar o futuro.' },
];

export function RPASection() {
  return (
    <section id="rpa" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* No mobile, a ordem será invertida (cards abaixo do texto e botão depois dos cards) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Coluna Direita — Cards de features */}
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
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-kolivo-accent 
                             transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.15)] 
                             max-w-[300px] mx-auto"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                                  bg-kolivo-accent/10 mb-4 group-hover:bg-kolivo-accent/20 transition-colors">
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

          {/* Coluna Esquerda — Título, texto e botão */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            // Centralizado apenas no mobile
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
              Automação que libera pessoas para inovar
            </h2>

            <p className="text-xl text-kolivo-gray mb-10 max-w-lg mx-auto lg:mx-0">
              Com RPA (Robotic Process Automation), eliminamos tarefas manuais e
              otimizamos fluxos críticos com precisão e segurança.
            </p>

            {/* Botão — centralizado apenas no mobile */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg 
                           font-semibold rounded-lg transition-all duration-300 
                           hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              >
                Acelere sua operação
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
