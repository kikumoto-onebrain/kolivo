'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowRightCircle, Server, Settings, Shield, BarChart3 } from 'lucide-react';
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

export function CloudSection() {
  const [current, setCurrent] = useState(0);

  // Troca automática de slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 6000); // muda a cada 6 segundos
    return () => clearInterval(interval);
  }, []);

  // Variantes de animação
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section id="cloud" className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">

          {/* Coluna esquerda — Slider de cards */}
          <div className="relative flex-1 flex justify-center items-center min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="p-10 bg-white rounded-2xl border border-gray-200 shadow-md max-w-md text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-kolivo-accent/10">
                    {(() => {
                      const Icon = features[current].icon;
                      return <Icon className="w-10 h-10 text-kolivo-accent" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-kolivo-primary mb-4">
                  {features[current].title}
                </h3>
                <p className="text-lg text-kolivo-gray leading-relaxed">
                  {features[current].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controles manuais */}
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + features.length) % features.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-kolivo-accent hover:text-kolivo-primary transition"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % features.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-kolivo-accent hover:text-kolivo-primary transition"
            >
              <ArrowRightCircle className="w-6 h-6" />
            </button>

            {/* Dots indicadores */}
            <div className="absolute bottom-0 flex justify-center gap-2 mt-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-kolivo-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

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
