'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ITOpsSection() {
  return (
    <section className="relative py-32 bg-kolivo-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent 0%, rgba(90,90,255,0.5) 50%, transparent 100%)',
            backgroundSize: '200% 2px',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: '0 0',
          }}
          animate={{
            backgroundPosition: ['0 0', '100% 0'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kolivo-accent/20 mb-6">
              <Cpu className="w-10 h-10 text-kolivo-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              IT Operations com automação e IA
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-8 text-center"
          >
            Redefinimos o conceito de ITOps ao unir automação, IA e colaboração
            humana em um modelo contínuo de eficiência. Monitoramos, gerenciamos e otimizamos ambientes de TI com
            previsibilidade, velocidade e clareza, para que sua empresa opere
            com menos ruído e mais resultado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-kolivo-accent text-kolivo-accent hover:bg-kolivo-accent hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group"
            >
              Conheça nossas soluções
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
