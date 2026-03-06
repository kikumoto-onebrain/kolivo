'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Radar, Siren, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Methodology() {
  const steps = [
    {
      icon: ClipboardList,
      title: '1) Diagnóstico e baseline',
      desc: 'Levantamos ambiente, riscos e maturidade; definimos objetivos, SLAs e indicadores.',
    },
    {
      icon: Radar,
      title: '2) Monitoramento e correlação (SOC)',
      desc: 'Implementamos detecção, alertas, regras e priorização com SIEM e playbooks.',
    },
    {
      icon: Siren,
      title: '3) Resposta e melhoria contínua',
      desc: 'Triagem, contenção e lições aprendidas para reduzir recorrência e tempo de resposta.',
    },
    {
      icon: BadgeCheck,
      title: '4) Governança de acessos (IAM)',
      desc: 'MFA/SSO/RBAC, revisões periódicas, relatórios e trilha de auditoria para conformidade.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Como a Kolivo estrutura SOC e IAM
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              Um fluxo claro para ganhar visibilidade, reduzir incidentes e
              controlar acessos com governança.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="mt-12 relative">
            {/* linha central */}
            <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-8">
              {steps.map(({ icon: Icon, title, desc }, idx) => {
                const isRight = idx % 2 === 1;

                return (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col sm:flex-row ${
                      isRight ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* marker alinhado à linha da timeline */}
                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut' as const,
                      }}
                      className="
                        absolute
                        left-5
                        sm:left-1/2
                        sm:-translate-x-1/2
                        top-1/2
                        -translate-y-1/2
                        w-6 h-6
                        rounded-full
                        bg-kolivo-accent/30
                        border border-kolivo-accent/60
                        z-10
                      "
                    />

                    {/* spacer lateral para manter metade/metade */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* card */}
                    <div className="sm:w-1/2 pl-12 sm:pl-0">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.18)]">
                        <div className="flex items-center gap-3 mb-2 text-kolivo-accent font-semibold">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-kolivo-accent/10">
                            <Icon className="w-5 h-5 text-kolivo-accent" />
                          </div>
                          <span className="text-white">{title}</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
              onClick={() =>
                document.getElementById('contato')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Estruturar operação de SOC e IAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}