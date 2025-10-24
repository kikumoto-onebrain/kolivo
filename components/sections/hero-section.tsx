'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const words = ['fluxo', 'equilíbrio', 'transformação', 'escala'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Efeito de digitação
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const typingEffect = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kolivo-primary">
      {/* 🔵 Fundo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kolivo-accent/20 via-transparent to-kolivo-blue/20" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(90, 90, 255, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(50, 50, 132, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(90, 90, 255, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* 🔹 Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Operações inteligentes</span>
            <span className="block text-kolivo-accent">
              Negócios em{' '}
              <span className="border-r-2 border-kolivo-accent pr-1 animate-pulse">
                {displayedText}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            A Kolivo une pessoas, tecnologia e processos para construir
            operações de TI mais inteligentes, automatizadas e colaborativas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] hover:scale-105 group"
              onClick={() => {
                document
                  .getElementById('contato')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fale com um especialista
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* 🔽 Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
