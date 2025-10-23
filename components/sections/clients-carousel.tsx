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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-kolivo-primary mb-12"
        >
          Empresas que confiam no nosso ecossistema
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
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
        </div>
      </div>
    </section>
  );
}
