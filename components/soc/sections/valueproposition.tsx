'use client';

import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Radar, KeyRound, BadgeCheck } from 'lucide-react';

const cards = [
  {
    icon: Radar,
    title: 'Monitoramento contínuo (SOC 24/7)',
    desc: 'Detecção de anomalias e correlação de eventos para reduzir tempo de resposta.',
  },
  {
    icon: ShieldCheck,
    title: 'Resposta a incidentes',
    desc: 'Playbooks e contenção rápida para minimizar impacto operacional.',
  },
  {
    icon: KeyRound,
    title: 'IAM com controle granular',
    desc: 'MFA, SSO, RBAC e privilégios sob revisão para reduzir risco de acesso indevido.',
  },
  {
    icon: BadgeCheck,
    title: 'Conformidade e auditoria',
    desc: 'Relatórios, rastreabilidade e processos alinhados a boas práticas e frameworks.',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' as const } },
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
            Proteção inteligente com governança de acessos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Segurança e identidade são inseparáveis: detecte ameaças, contenha incidentes e garanta
            que apenas usuários autorizados acessem o que importa.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={item}
              animate={{ y: [-4, 4] }}
              transition={{
                y: {
                  duration: 3.8,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut' as const,
                  delay: i * 0.25,
                },
              }}
              whileHover={{ y: -10, scale: 1.04 }}
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
      </div>
    </section>
  );
}