'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [lights, setLights] = useState<
    { id: number; x: number; y: number; color: string; delay: number }[]
  >([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Inicializa os 3 focos em posições aleatórias
    setLights([
      {
        id: 1,
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        color: 'rgba(90, 90, 255, 0.3)',
        delay: 0,
      },
      {
        id: 2,
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        color: 'rgba(50, 50, 132, 0.25)',
        delay: 2.5,
      },
      {
        id: 3,
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        color: 'rgba(255, 255, 255, 0.12)',
        delay: 5,
      },
    ]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kolivo-primary">
      {/* Fundo animado com focos de luz */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-accent/10 via-transparent to-kolivo-blue/15" />

        {lights.map((light) => (
          <LightPulse
            key={light.id}
            color={light.color}
            delay={light.delay}
            size={280}
            blur={100}
          />
        ))}

        {/* Linhas animadas (fluxos de ITOps) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full opacity-[0.1]"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,300 C200,350 400,250 600,300 C700,320 800,280 800,280"
            stroke="#5a5aff"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            d="M0,350 C200,400 400,300 600,350 C700,370 800,330 800,330"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: 1,
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Operações inteligentes</span>
            <span className="block text-kolivo-accent">Negócios em fluxo</span>
          </motion.h1>

          {/* Parágrafo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            A Kolivo une pessoas, tecnologia e processos para construir
            operações de TI mais inteligentes, automatizadas e colaborativas.
          </motion.p>

          {/* Botão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] hover:scale-105 flex justify-center w-fit mx-auto"
              onClick={() => {
                document
                  .getElementById('contato')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fale com um especialista
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Mesmo componente LightPulse usado na IntroLogo
 */
function LightPulse({
  color,
  delay,
  size,
  blur,
}: {
  color: string;
  delay: number;
  size: number;
  blur: number;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Atualiza a posição das luzes suavemente a cada ciclo
  useEffect(() => {
    const setRandomPos = () => {
      setPos({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
      });
    };

    setRandomPos();
    const interval = setInterval(setRandomPos, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        background: color,
        width: `${size}px`,
        height: `${size}px`,
        filter: `blur(${blur}px)`,
        left: `calc(50% + ${pos.x}px)`,
        top: `calc(50% + ${pos.y}px)`,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}
