'use client';

import { Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const clients = [
  'Empresa A',
  'Empresa B',
  'Empresa C',
  'Empresa D',
  'Empresa E',
  'Empresa F',
  'Empresa G',
  'Empresa H',
];

export function ClientsCarousel() {
  const [speed, setSpeed] = useState('20s');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSpeed('6s'); // mais rápido no mobile
      } else if (window.innerWidth < 1024) {
        setSpeed('12s'); // intermediário em tablets
      } else {
        setSpeed('20s'); // padrão desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicamos várias vezes para um loop suave
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-kolivo-primary mb-12"
        >
          Empresas que confiam no nosso ecossistema
        </motion.h2>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 items-center animate-marquee will-change-transform"
            style={{
              animationDuration: speed,
            }}
          >
            {repeatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 sm:w-48 h-20 sm:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Building2 className="w-10 sm:w-12 h-10 sm:h-12 text-kolivo-gray" />
                  <span className="text-sm font-semibold text-kolivo-gray">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animação CSS suave e contínua */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
}
