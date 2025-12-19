'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Server, Settings, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Server,    title: 'Arquitetura híbrida',  description: 'Desenhamos ambientes cloud e on-premise personalizados para o ritmo e as necessidades da sua operação.' },
  { icon: Settings,  title: 'Governança',           description: 'Implementamos processos inteligentes que monitoram, atualizam e otimizam sua infraestrutura de forma constante.' },
  { icon: Shield,    title: 'Segurança avançada',   description: 'Ambientes configurados com camadas de proteção, redundância e resposta rápida, garantindo estabilidade.' },
  { icon: BarChart3, title: 'Escalabilidade total', description: 'Aumente capacidade e recursos de forma dinâmica, sem comprometer performance ou custo operacional.' },
];

export function CloudSection() {
  return (
    <section id="cloud" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mantém desktop; no mobile a ordem segue como no seu layout atual */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">

          {/* COLUNA ESQUERDA — CARDS */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-gray-200 text-left
                             hover:border-kolivo-accent hover:shadow-[0_0_25px_rgba(90,90,255,0.15)]
                             transition-all duration-300 hover:-translate-y-1 max-w-[340px] mx-auto"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-kolivo-accent/10 mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-kolivo-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-kolivo-primary mb-2 line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-kolivo-gray leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BOTÃO SÓ NO MOBILE: aparece após os cards */}
            <div className="mt-8 flex justify-center lg:hidden">
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg
                           font-semibold rounded-lg transition-all duration-300
                           hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              >
                Modernize sua infraestrutura de TI
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* COLUNA DIREITA — TÍTULO, TEXTO E BOTÃO (botão só no desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-kolivo-primary mb-6">
              Infraestrutura flexível, <br className="hidden sm:block" />
              segura e escalável
            </h2>

            <p className="text-lg sm:text-xl text-kolivo-gray mb-10 max-w-md mx-auto lg:mx-0">
              Projetamos e gerenciamos ambientes cloud e on-premise sob medida,
              garantindo performance, segurança e governança contínua.
            </p>

            {/* BOTÃO SÓ NO DESKTOP */}
            <div className="hidden lg:flex">
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg
                           font-semibold rounded-lg transition-all duration-300
                           hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
                onClick={() => {
                  document
                    .getElementById('contato')
                    ?.scrollIntoView({ behavior: 'smooth' });
                 }}
              >
                Modernize sua infraestrutura de TI
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
