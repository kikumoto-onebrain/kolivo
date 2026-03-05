'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      title: 'Financeiro',
      bullets: ['Processamento de faturas', 'Reconciliação financeira', 'Validações e conciliações'],
    },
    {
      title: 'Operações',
      bullets: ['Entrada de dados', 'Geração de relatórios', 'Atualização de cadastros e transações'],
    },
    {
      title: 'Atendimento',
      bullets: ['Automação de e-mails', 'Triagem e encaminhamento', 'Chatbots e respostas a FAQs'],
    },
    {
      title: 'TI',
      bullets: ['Monitoramento de rotinas', 'Execução de tarefas operacionais', 'Apoio a atualizações e checklists'],
    },
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
            Casos de uso de alto impacto
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Processos repetitivos e baseados em regras são ideais para automação. Começamos pelo que gera resultado mais rápido.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {useCases.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{c.title}</h3>
              <ul className="space-y-3">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}