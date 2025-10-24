'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react';

export function IntroLogo() {
  const { scrollY } = useScroll();
  const [showIntro, setShowIntro] = useState(true);
  const [lights, setLights] = useState<
    { id: number; x: number; y: number; color: string; delay: number }[]
  >([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowIntro(window.scrollY <= 120);
    };
    window.addEventListener('scroll', handleScroll);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 3 luzes com posições iniciais diferentes
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = useTransform(scrollY, [0, 150], [1, 0.4]);
  const y = useTransform(scrollY, [0, 150], ['0vh', '-35vh']);
  const opacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-kolivo-primary z-[9999] overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      {/* Fundo com focos de luz sincronizados */}
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

      {/* Logo central */}
      {showIntro && (
        <motion.div
          style={{ scale, y }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          className="relative z-10 will-change-transform"
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
      )}

      {/* Ícone ChevronsDown */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70 z-20">
        <ChevronsDown size={40} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}

/**
 * Componente interno para um foco de luz com posição e animação independentes
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

  // Gera nova posição apenas quando o ciclo termina
  useEffect(() => {
    const setRandomPos = () => {
      setPos({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
      });
    };

    setRandomPos();

    const interval = setInterval(setRandomPos, 6000); // só move após o fade-out
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
