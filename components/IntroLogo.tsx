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
      {/* Fundo animado com piscas suaves */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fundo base com leve gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-accent/10 via-transparent to-kolivo-blue/15" />

        {/* Focos de luz pulsantes */}
        <div className="absolute inset-0">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[500px] h-[500px] rounded-full blur-[160px]"
              style={{
                background:
                  i === 0
                    ? 'rgba(90, 90, 255, 0.25)'
                    : i === 1
                    ? 'rgba(50, 50, 132, 0.25)'
                    : 'rgba(255, 255, 255, 0.15)',
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [
                  Math.random() * window.innerWidth - window.innerWidth / 2,
                  Math.random() * window.innerWidth - window.innerWidth / 2,
                ],
                y: [
                  Math.random() * window.innerHeight - window.innerHeight / 2,
                  Math.random() * window.innerHeight - window.innerHeight / 2,
                ],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 2.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

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

      {/* Ícone ChevronsDown */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70 z-20">
        <ChevronsDown size={40} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}
