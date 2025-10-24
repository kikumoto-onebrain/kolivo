'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: MapPin,
    title: 'Atendimento local',
    description: 'Técnicos certificados em todo o país.',
  },
  {
    icon: Clock,
    title: 'Resposta imediata',
    description: 'Reduza downtime e aumente disponibilidade.',
  },
  {
    icon: Radio,
    title: 'Conectado ao NOC',
    description: 'Sincronizado com monitoramento central.',
  },
];

export function FieldServiceSection() {
  return (
    <section id="field-service" className="py-32 bg-gradient-to-b from-white to-gray-50">
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
              Suporte técnico, em qualquer lugar
            </h2>
            <p className="text-xl text-kolivo-gray max-w-3xl mx-auto">
              Especialistas em campo conectados à sua operação digital. Presença
              física com a mesma agilidade do remoto.
            </p>
          </motion.div>

          <div className="overflow-hidden mb-12">
            <div className="flex gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex-1 min-w-[280px] p-8 bg-white rounded-2xl border border-gray-200 hover:border-kolivo-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.15)]"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-kolivo-accent/10 mb-6">
                      <Icon className="w-8 h-8 text-kolivo-accent" />
                    </div>
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
              Solicite especialistas técnicos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
