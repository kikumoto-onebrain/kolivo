'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Server, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Cloud,
    title: 'Cloud sob medida',
    description: 'Escale recursos conforme sua demanda.',
  },
  {
    icon: Server,
    title: 'Infra híbrida',
    description: 'Conecte ambientes locais e na nuvem.',
  },
  {
    icon: Settings,
    title: 'Governança contínua',
    description: 'Controle e automação em tempo real.',
  },
];

export function CloudSection() {
  return (
    <section id="cloud" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
              Infraestrutura flexível, segura e escalável
            </h2>
            <p className="text-xl text-kolivo-gray max-w-3xl mx-auto">
              Projetamos e gerenciamos ambientes cloud e on-premise sob medida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-kolivo-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.15)]"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-kolivo-accent/10 mb-6"
                  >
                    <Icon className="w-8 h-8 text-kolivo-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-kolivo-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-kolivo-gray">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
            >
              Modernize sua infraestrutura de TI
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
