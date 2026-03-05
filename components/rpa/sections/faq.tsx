'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function FAQ() {
  const faq = [
    {
      q: 'O que é RPA (Robotic Process Automation)?',
      a: 'RPA é o uso de bots de software para executar tarefas digitais repetitivas, baseadas em regras, em sistemas e aplicações como se fossem um usuário humano.',
    },
    {
      q: 'Quais processos são os melhores candidatos para automação?',
      a: 'Tarefas repetitivas, com alto volume, baseadas em regras e suscetíveis a erro humano (ex.: lançamentos, validações, conciliações, relatórios e integrações).',
    },
    {
      q: 'RPA substitui pessoas?',
      a: 'O objetivo é reduzir tarefas operacionais e liberar pessoas para atividades estratégicas, atendimento, inovação e tomada de decisão.',
    },
    {
      q: 'Em quanto tempo consigo ver resultado?',
      a: 'Em projetos bem escolhidos, é comum alcançar ROI em 6–12 meses, com ganhos já perceptíveis nas primeiras automações.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-kolivo-primary to-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center"
          >
            Perguntas frequentes
          </motion.h2>

          <div className="mt-10 space-y-4">
            {faq.map((f) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">{f.q}</h3>
                    <p className="mt-2 text-gray-300 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}