'use client';

import { motion } from 'framer-motion';
import { KeyRound, ShieldCheck, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function IAM() {
  const bullets = [
    { icon: ShieldCheck, title: 'MFA, SSO e RBAC', desc: 'Controle por função e autenticação forte com experiência otimizada.' },
    { icon: KeyRound, title: 'Acessos privilegiados', desc: 'Gestão e revisão de privilégios para reduzir risco de escalonamento.' },
    { icon: Users, title: 'Provisionamento e desprovisionamento', desc: 'Integração/desintegração automática de usuários e acessos.' },
    { icon: FileText, title: 'Relatórios e conformidade', desc: 'Revisões regulares, trilhas de auditoria e relatórios de permissão.' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-kolivo-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            IAM: gestão de identidade e acesso com governança
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Centralize usuários, aplique políticas de acesso e mantenha conformidade com segurança granular
            e rastreabilidade.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {bullets.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
            >
              <div className="inline-flex items-center gap-3 mb-2 text-kolivo-accent font-semibold">
                <Icon className="w-5 h-5" />
                {title}
              </div>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Centralize e controle acessos
          </Button>
        </div>
      </div>
    </section>
  );
}