'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/localiza-logo.svg', alt: 'Localiza' },
  { src: '/itau-logo.svg', alt: 'Itaú' },
  { src: '/starret-logo.svg', alt: 'Starrett' },
  { src: '/attivo-logo.svg', alt: 'Attivo' },
  // Se quiser repetir até preencher espaço, pode duplicar itens aqui.
];

export function ClientsCarousel() {

  const [speed, setSpeed] = useState('25s');

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) setSpeed('18s');
      else if (width < 1024) setSpeed('18s');
      else setSpeed('25s');
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
          <div className="marquee__track" style={{ animationDuration: speed }}>
            {[0, 1].map((groupIndex) => (
              <ul key={groupIndex} className="marquee__group">
                {clients.map((client, i) => (
                  <li
                    key={`${groupIndex}-${i}`}
                    className={`marquee__item ${
                      i === clients.length - 1 ? 'marquee__item--last' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                      {/* Usando next/image para SVGs - se preferir, troque por <img src={client.src} ... /> */}
                      <div className="w-28 h-12 flex items-center justify-center">
                        <Image
                          src={client.src}
                          alt={client.alt}
                          width={180}
                          height={60}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

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
          gap: 4rem;
          margin: 0;
          padding: 0;
          list-style: none;
          flex: none;
        }

        .marquee__item {
          flex: none;
          width: 11rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%);
          transition: filter 0.3s ease, opacity 0.3s ease;
        }

        .marquee__item--last {
          margin-right: 4rem;
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
