'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const clients = [
  'Empresa A',
  'Empresa B',
  'Empresa C',
  'Empresa D',
  'Empresa E',
  'Empresa F',
  'Empresa G',
  'Empresa H',
];

export function ClientsCarousel() {
  return (
    // 🔹 Adicionamos min-h e overflow-x-hidden (não geral)
    <section className="relative py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-kolivo-primary mb-16"
        >
          Empresas que confiam no nosso ecossistema
        </motion.h2>

        {/* 🔹 Wrapper fixo para evitar sobreposição */}
        <div className="relative w-full overflow-hidden flex items-center">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="flex gap-16 items-center min-w-full"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 25, // ajuste velocidade aqui (menor = mais rápido)
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Building2 className="w-12 h-12 text-kolivo-gray" />
                    <span className="text-sm font-semibold text-kolivo-gray">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
