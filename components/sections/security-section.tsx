'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SecuritySection() {
  return (
    <section
      id="assessment-seguranca"
      className="relative py-32 bg-kolivo-primary overflow-hidden"
    >
      {/* Imagem de fundo + overlay com gradiente azul */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/security.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-primary/90 via-kolivo-primary/80 to-transparent" />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Diagnóstico completo. <br /> Segurança contínua.
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Realizamos avaliações que mapeiam vulnerabilidades, identificam
              riscos e fortalecem sua infraestrutura.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Combinamos análise técnica e cultura organizacional para garantir
              que a segurança acompanhe a inovação.
            </p>
          </motion.div>
        </div>

        {/* Escudo animado — agora centralizado e menor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto my-12 w-[14rem] h-[14rem] sm:w-[16rem] sm:h-[16rem] flex items-center justify-center"
        >
          {/* Escudo pulsante */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: [0.9, 1, 0.9], opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 flex items-center justify-center text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            <Shield className="w-full h-full" />
          </motion.div>

          {/* Ondas concêntricas */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.3],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/10"
            animate={{
              scale: [1, 1.6],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 1,
            }}
          />
        </motion.div>

        {/* Botão CTA — centralizado e responsivo */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-kolivo-accent text-kolivo-accent hover:bg-kolivo-accent hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group mx-auto"
          >
            Verifique sua segurança
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
