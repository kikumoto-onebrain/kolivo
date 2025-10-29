'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Server, Settings, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Server,
    title: 'Arquitetura híbrida',
    description:
      'Desenhamos ambientes cloud e on-premise personalizados para o ritmo e as necessidades da sua operação.',
  },
  {
    icon: Settings,
    title: 'Governança',
    description:
      'Implementamos processos inteligentes que monitoram, atualizam e otimizam sua infraestrutura de forma constante.',
  },
  {
    icon: Shield,
    title: 'Segurança avançada',
    description:
      'Ambientes configurados com camadas de proteção, redundância e resposta rápida, garantindo estabilidade.',
  },
  {
    icon: BarChart3,
    title: 'Escalabilidade total',
    description:
      'Aumente capacidade e recursos de forma dinâmica, sem comprometer performance ou custo operacional.',
  },
];

export function CloudSection() {
  return (
    <section id="cloud" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* TÍTULO */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6"
          >
            Infraestrutura flexível, segura e escalável
          </motion.h2>

          {/* TEXTO DESCRITIVO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-kolivo-gray mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Projetamos e gerenciamos ambientes cloud e on-premise sob medida,
            garantindo performance, segurança e governança contínua.
          </motion.p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {features.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 
                           hover:border-kolivo-accent hover:shadow-[0_0_25px_rgba(90,90,255,0.15)]
                           transition-all duration-300 hover:-translate-y-1 max-w-[480px] mx-auto"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-kolivo-accent/10 mb-4">
                  <Icon className="w-7 h-7 text-kolivo-accent" />
                </div>
                <h3 className="text-xl font-bold text-kolivo-primary mb-2">
                  {title}
                </h3>
                <p className="text-base text-kolivo-gray leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BOTÃO — estilo igual ao da RPA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white 
                         px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 
                         hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] hover:scale-105 flex justify-center 
                         w-fit mx-auto group"
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
