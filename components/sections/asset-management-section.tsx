'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Database, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Database,
    title: 'Inventário automatizado',
    description:
      'Visão em tempo real dos ativos. Controle completo do parque tecnológico.',
  },
  {
    icon: TrendingDown,
    title: 'Gestão inteligente de custos',
    description:
      'Evite desperdícios e maximize ROI. Otimize investimentos e reduza gastos desnecessários.',
  },
];

export function AssetManagementSection() {
  return (
    <section id="gestao-ativos" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inverte a ordem apenas no mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto min-h-[70vh]">
          
          {/* Coluna direita — Cards */}
          <div className="flex-1 flex flex-col justify-center gap-8 w-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-10 bg-gradient-to-br from-kolivo-primary to-kolivo-blue rounded-2xl hover:shadow-[0_0_40px_rgba(90,90,255,0.3)] transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-kolivo-accent/20">
                      <Icon className="w-8 h-8 text-kolivo-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="mt-6 h-1 bg-kolivo-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                  />
                </motion.div>
              );
            })}

            {/* Botão — apenas no mobile, após os cards */}
            <div className="mt-10 flex justify-center lg:hidden">
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg 
                           font-semibold rounded-lg transition-all duration-300 
                           hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              >
                Simplifique sua gestão de ativos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Coluna esquerda — Título e texto */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
                Controle total do seu parque tecnológico
              </h2>
              <p className="text-xl text-kolivo-gray max-w-xl mx-auto lg:mx-0">
                Com o ITAM Kolivo, cada ativo é monitorado, otimizado e
                governado. Gestão inteligente que reduz custos e aumenta
                eficiência.
              </p>
            </motion.div>

            {/* Botão — apenas no desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex"
            >
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg 
                           font-semibold rounded-lg transition-all duration-300 
                           hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              >
                Simplifique sua gestão de ativos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
