'use client';

import { motion, type Variants } from 'framer-motion';
import { Bot, Link2, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const valueCards = [
  {
    icon: Bot,
    title: 'Automação robótica',
    desc: 'Bots executam tarefas repetitivas com consistência e velocidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Menos erros e retrabalho',
    desc: 'Processos baseados em regras reduzem falhas humanas e aumentam controle.',
  },
  {
    icon: Link2,
    title: 'Integrações fluidas',
    desc: 'Conecte sistemas legados e plataformas modernas para criar fluxo contínuo.',
  },
  {
    icon: Zap,
    title: 'Produtividade real',
    desc: 'Libere seu time para atividades estratégicas e decisões com mais impacto.',
  },
];

// Motion leve e sequencial (stagger)
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

// variants só para OPACITY (sem y)
const item: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

export function ValueProposition() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-kolivo-primary to-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Automação que cria eficiência de ponta a ponta
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            RPA elimina tarefas manuais, melhora a qualidade operacional e acelera
            fluxos críticos com previsibilidade.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {valueCards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={item}
              // motion constante (glow sutil)
              animate={{
                boxShadow: [
                  '0 0 0px rgba(90,90,255,0.00)',
                  '0 0 22px rgba(90,90,255,0.14)',
                  '0 0 0px rgba(90,90,255,0.00)',
                ],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut' as const,
                delay: i * 0.35,
              }}
              // hover padronizado
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: '0 0 25px rgba(90,90,255,0.18)',
              }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.18)]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                <Icon className="w-7 h-7 text-kolivo-accent transition-transform group-hover:rotate-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
            onClick={() => {
              document
                .getElementById('contato')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Acelerar com RPA
          </Button>
        </div>
      </div>
    </section>
  );
}