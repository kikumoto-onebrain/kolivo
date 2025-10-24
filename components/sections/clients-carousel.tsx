'use client';

import { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

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
  const [speed, setSpeed] = useState('25s'); // desktop padrão

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) setSpeed('12s'); // mobile
      else if (width < 1024) setSpeed('18s'); // tablet
      else setSpeed('25s'); // desktop
    };

    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-kolivo-primary mb-12">
          Empresas que confiam no nosso ecossistema
        </h2>

        <div className="relative overflow-hidden">
          {/* Faixa com duas cópias lado a lado */}
          <div className="marquee__track" style={{ animationDuration: speed }}>
            <ul className="marquee__group" aria-hidden="false">
              {clients.map((client, i) => (
                <li key={`g1-${i}`} className="marquee__item">
                  <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <Building2 className="w-10 sm:w-12 h-10 sm:h-12 text-kolivo-gray" />
                    <span className="text-sm font-semibold text-kolivo-gray">{client}</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="marquee__group" aria-hidden="true">
              {clients.map((client, i) => (
                <li key={`g2-${i}`} className="marquee__item">
                  <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <Building2 className="w-10 sm:w-12 h-10 sm:h-12 text-kolivo-gray" />
                    <span className="text-sm font-semibold text-kolivo-gray">{client}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 🔧 CSS otimizado */}
      <style jsx>{`
        .marquee__track {
          display: flex;
          width: max-content;
          animation: marqueeScroll linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .marquee__group {
          display: flex;
          gap: 4rem; /* espaçamento padronizado */
          margin: 0;
          padding: 0;
          list-style: none;
          flex: none;
        }

        .marquee__item {
          flex: none;
          width: 11rem; /* equilíbrio entre logo e espaçamento */
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .marquee__item:hover {
          filter: grayscale(0%);
        }

        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (min-width: 640px) {
          .marquee__item {
            width: 12rem;
            height: 6rem;
          }
        }
      `}</style>
    </section>
  );
}
