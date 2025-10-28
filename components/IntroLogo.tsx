'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react';

export function IntroLogo() {
  const [showIntro, setShowIntro] = useState(true);
  const [lights, setLights] = useState<
    { id: number; x: number; y: number; color: string; delay: number }[]
  >([]);

  useEffect(() => {
    // Gera luzes aleatórias no início
    const width = window.innerWidth;
    const height = window.innerHeight;

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

    // Exibe por 2 segundos, depois esconde
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-kolivo-primary z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Fundo com focos de luz */}
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

        {/* Linhas animadas */}
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
            animate={{ pathLength: [0, 1, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,350 C200,400 400,300 600,350 C700,370 800,330 800,330"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>

      {/* Logo central */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Image
          src="/kolivo.svg"
          alt="Kolivo Logo"
          width={180}
          height={60}
          priority
          className="w-40 sm:w-56 h-auto"
        />
      </motion.div>

      {/* Chevron inferior (opcional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70 z-20">
        <ChevronsDown size={40} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}

/* Luzes suaves pulsantes */
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
      animate={{ opacity: [0, 0.8, 0], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}
