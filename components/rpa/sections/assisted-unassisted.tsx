'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, CheckCircle2, Workflow } from 'lucide-react';

export function AssistedVsUnassisted() {
  const assisted = ['Atendimento e backoffice', 'Operações com validação humana', 'Apoio a times de suporte'];
  const unassisted = ['Processos financeiros recorrentes', 'Integração de sistemas legados', 'Relatórios e rotinas operacionais'];

  return (
    <section className="py-20 sm:py-24 bg-kolivo-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12">
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Automação assistida ou não assistida
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Projetamos bots para trabalhar junto com pessoas (assistida) ou operar end-to-end sem intervenção (não assistida).
            </motion.p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
            >
              <div className="inline-flex items-center gap-2 text-kolivo-accent font-semibold">
                <Bot className="w-5 h-5" />
                Automação assistida
              </div>

              <p className="mt-3 text-gray-300 leading-relaxed">
                Bots atuam em segundo plano e são ativados por ações humanas, acelerando tarefas sem mudar o modo de trabalho.
              </p>

              <ul className="mt-5 space-y-3">
                {assisted.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
            >
              <div className="inline-flex items-center gap-2 text-kolivo-accent font-semibold">
                <Workflow className="w-5 h-5" />
                Automação não assistida
              </div>

              <p className="mt-3 text-gray-300 leading-relaxed">
                Bots executam processos completos de forma agendada ou por gatilhos, sem intervenção humana.
              </p>

              <ul className="mt-5 space-y-3">
                {unassisted.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero automatizar processos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}