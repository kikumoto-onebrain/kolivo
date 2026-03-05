'use client';

import { motion } from 'framer-motion';
import { Shield, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
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
            <span className="text-[#5A5AFF]">SOC 24/7 </span>
            <span className="lg:whitespace-nowrap">& IAM com controle total</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Monitoramento contínuo, resposta a incidentes e gestão de identidades e acessos
            para proteger dados, reduzir riscos e sustentar conformidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fale com um especialista
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="inline-flex items-center gap-3 text-kolivo-accent font-semibold">
                <Shield className="w-5 h-5" /> Segurança em tempo real
              </div>
              <p className="mt-3 text-gray-300">
                Identificar, prevenir e responder com rapidez — reduzindo impacto e tempo de exposição.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="inline-flex items-center gap-3 text-kolivo-accent font-semibold">
                <KeyRound className="w-5 h-5" /> Acessos sob governança
              </div>
              <p className="mt-3 text-gray-300">
                MFA, SSO, RBAC e revisões periódicas para controlar privilégios e atender auditorias.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}