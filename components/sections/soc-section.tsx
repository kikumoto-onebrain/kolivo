'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Eye, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Eye,
    title: 'SOC 24/7',
    description: 'Detecção de ameaças em tempo real.',
  },
  {
    icon: Users,
    title: 'Gestão de identidade',
    description: 'Acesso seguro, monitorado e auditável.',
  },
  {
    icon: Activity,
    title: 'Dashboards e alertas',
    description: 'Indicadores claros para decisões ágeis.',
  },
];

export function SOCSection() {
  return (
    <section id="soc" className="py-32 bg-white">
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
              Visibilidade e controle total
            </h2>
            <p className="text-xl text-kolivo-gray max-w-3xl mx-auto">
              Proteja dados, acessos e operações com inteligência contínua.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group p-8 bg-gradient-to-br from-kolivo-primary to-kolivo-blue rounded-2xl hover:shadow-[0_0_40px_rgba(90,90,255,0.3)] transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-kolivo-accent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-kolivo-accent/20 mb-6">
                    <Icon className="w-8 h-8 text-kolivo-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300">{feature.description}</p>
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
              onClick={() => {
              document
                .getElementById('contato')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
              Fortaleça sua operação
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
