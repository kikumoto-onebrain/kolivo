'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function FAQ() {
  const faq = [
    {
      q: 'O que é um SOC 24/7?',
      a: 'É uma operação de segurança que monitora eventos continuamente, detecta ameaças e coordena resposta a incidentes para reduzir tempo de exposição.',
    },
    {
      q: 'IAM serve apenas para login?',
      a: 'Não. IAM organiza identidade, políticas e privilégios (MFA, SSO, RBAC), inclui revisão periódica e relatórios para governança e conformidade.',
    },
    {
      q: 'Quais benefícios práticos?',
      a: 'Redução de risco, resposta mais rápida a incidentes, controle de acessos privilegiados, auditoria mais simples e melhor experiência para usuários.',
    },
    {
      q: 'Quais plataformas são comuns em IAM?',
      a: 'Azure AD, JumpCloud e Active Directory (AD), variando conforme cenário e integração com aplicações.',
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
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