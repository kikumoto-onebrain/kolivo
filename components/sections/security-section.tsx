'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SecuritySection() {
  return (
    <section
      id="assessment-seguranca"
      className="relative py-32 bg-kolivo-blue overflow-hidden"
    >
      {/* Fundo animado com o escudo à esquerda */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start opacity-10">
        <motion.div
          className="relative lg:ml-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Shield className="w-[26rem] h-[26rem] text-kolivo-accent" />
        </motion.div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Coluna esquerda (animação visível apenas em telas grandes) */}
          <div className="hidden lg:flex flex-1 justify-center items-center"></div>

          {/* Coluna direita (conteúdo textual e CTA) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-right lg:pl-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kolivo-accent/20 mb-6 ml-auto">
              <Shield className="w-10 h-10 text-kolivo-accent" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Diagnóstico completo. <br /> Segurança contínua.
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-lg ml-auto">
              Realizamos avaliações de segurança que mapeiam vulnerabilidades,
              identificam riscos e fortalecem sua infraestrutura.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg ml-auto">
              Combinamos análise técnica, compliance e cultura organizacional
              para garantir que a segurança acompanhe a inovação.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-kolivo-blue transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group"
            >
              Avalie o nível de segurança da sua empresa
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
