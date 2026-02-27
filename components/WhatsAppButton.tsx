'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Tipagem segura para gtag no browser
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function WhatsAppButton() {
  const pathname = usePathname();

  const handleClick = () => {
    // Dispara conversão SOMENTE quando estiver em /framework (inclui /framework/quiz etc.)
    if (pathname?.startsWith('/framework')) {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11171385452/UuEYCL3ivf8bEOyg984p',
        });
      }
    }
  };

  return (
    <motion.a
      href="https://wa.me/5511996456724"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />

      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-500"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 10,
        }}
      />
    </motion.a>
  );
}