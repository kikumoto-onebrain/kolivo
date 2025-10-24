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
  const [speed, setSpeed] = useState('16s'); // desktop default

  // Velocidade adaptativa
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      if (w < 640) setSpeed('6s');        // mobile bem rápido
      else if (w < 1024) setSpeed('10s'); // tablet
      else setSpeed('16s');               // desktop
    };
    setByWidth();
    window.addEventListener('resize', setByWidth);
    return () => window.removeEventListener('resize', setByWidth);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-kolivo-primary mb-12">
          Empresas que confiam no nosso ecossistema
        </h2>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Faixa duplicada: duas cópias lado a lado */}
          <div
            className="marquee__track"
            style={{ animationDuration: speed }}
          >
            <ul className="marquee__group" aria-hidden="false">
              {clients.map((client, i) => (
                <li key={`g1-${i}`} className="marquee__item">
                  <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <Building2 className="w-10 sm:w-12 h-10 sm:h-12 text-kolivo-gray" />
                    <span className="text-sm font-semibold text-kolivo-gray">{client}</span>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="marquee__group" aria-hidden="true">
              {clients.map((client, i) => (
                <li key={`g2-${i}`} className="marquee__item">
                  <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <Building2 className="w-10 sm:w-12 h-10 sm:h-12 text-kolivo-gray" />
                    <span className="text-sm font-semibold text-kolivo-gray">{client}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CSS do marquee */}
      <style jsx>{`
        /* trilha contendo duas cópias lado a lado */
        .marquee__track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation-name: marqueeScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translate3d(0,0,0);
        }

        /* cada grupo (cópia) */
        .marquee__group {
          display: flex;
          gap: 3rem;           /* mesmo gap que você usava (12 = 3rem) */
          margin: 0;
          padding: 0;
          list-style: none;
          flex: none;          /* impede reflow e mantém largura fixa do grupo */
        }

        /* cada item (logo) */
        .marquee__item {
          flex: none;          /* largura do item não colapsa */
          width: 10rem;        /* ~w-40 */
          height: 5rem;        /* ~h-20 */
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }
        .marquee__item:hover {
          filter: grayscale(0%);
        }

        /* animação contínua de 0% a -50% (como temos 2 grupos, -50% casa perfeito) */
        @keyframes marqueeScroll {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        /* Responsivo refinado */
        @media (min-width: 640px) {
          .marquee__item { width: 12rem; height: 6rem; } /* ~w-48 h-24 */
        }
      `}</style>
    </section>
  );
}
