'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Clock, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const stats = [
    {
      icon: TrendingDown,
      title: '60%–80%',
      desc: 'redução no tempo de processos',
    },
    {
      icon: Clock,
      title: '24/7',
      desc: 'execução contínua com alta precisão',
    },
    {
      icon: BadgeCheck,
      title: '6–12 meses',
      desc: 'ROI típico em projetos bem escolhidos',
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-kolivo-primary via-kolivo-primary to-transparent" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-kolivo-accent/20 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-kolivo-accent/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-[#5A5AFF]">Automação de processos </span>
            <span className="lg:whitespace-nowrap">com RPA para empresas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Automatize tarefas repetitivas, reduza erros humanos e libere sua
            equipe para atividades estratégicas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg"
              onClick={() => {
                document
                  .getElementById('contato')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicite um diagnóstico
            </Button>
          </motion.div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                  <Icon className="w-7 h-7 text-kolivo-accent" />
                </div>

                <div className="text-2xl font-bold">{title}</div>
                <p className="mt-2 text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}