'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Cloud, Server, Shield, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Server,
    title: 'Arquitetura híbrida sob medida',
    description:
      'Desenhamos ambientes cloud e on-premise personalizados para o ritmo e as necessidades da sua operação — com performance e escalabilidade garantidas.',
  },
  {
    icon: Settings,
    title: 'Governança e automação contínuas',
    description:
      'Implementamos processos inteligentes que monitoram, atualizam e otimizam sua infraestrutura de forma constante — menos esforço, mais controle.',
  },
  {
    icon: Shield,
    title: 'Segurança e alta disponibilidade',
    description:
      'Ambientes configurados com camadas de proteção, redundância e resposta rápida — garantindo estabilidade mesmo em cenários críticos.',
  },
  {
    icon: BarChart3,
    title: 'Escalabilidade sem limites',
    description:
      'Cresça no seu tempo: aumente capacidade e recursos de forma dinâmica, sem comprometer performance ou custo operacional.',
  },
];

// Variantes de animação
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ['easeOut'] },
  },
};

export function CloudSection() {
  return (
    <section
      id="cloud"
      className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">

          {/* Coluna esquerda — Cards animados */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-kolivo-accent hover:shadow-[0_0_25px_rgba(90,90,255,0.15)] transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-kolivo-accent/10 mb-6">
                    <Icon className="w-8 h-8 text-kolivo-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-kolivo-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-kolivo-gray leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Coluna direita — Texto e botão */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
              Infraestrutura flexível, <br /> segura e escalável
            </h2>
            <p className="text-xl text-kolivo-gray mb-10 max-w-md">
              Projetamos e gerenciamos ambientes cloud e on-premise sob medida,
              garantindo performance, segurança e governança contínua.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="border-kolivo-accent text-kolivo-accent hover:bg-kolivo-accent hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg group"
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
