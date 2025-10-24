'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react';

export function IntroLogo() {
  const { scrollY } = useScroll();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) setShowIntro(false);
      else setShowIntro(true);
    };
    window.addEventListener('scroll', handleScroll);
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
      {/* Fundo animado com gradiente e linhas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-accent/15 via-transparent to-kolivo-blue/20" />

        {/* Círculos animados */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 25% 40%, rgba(90, 90, 255, 0.18) 0%, transparent 35%)',
              'radial-gradient(circle at 75% 60%, rgba(50, 50, 132, 0.18) 0%, transparent 35%)',
              'radial-gradient(circle at 25% 40%, rgba(90, 90, 255, 0.18) 0%, transparent 35%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Linhas animadas (fluxos) */}
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
      )}

      {/* Ícone ChevronsDown fixo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70 z-20">
        <ChevronsDown size={40} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}
