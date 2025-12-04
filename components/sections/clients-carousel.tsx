'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const clients = [
  { src: '/localiza-logo.svg', alt: 'Localiza', w: 180, h: 40 },
  { src: '/itau-logo.svg', alt: 'Itaú', w: 60, h: 40 },
  { src: '/starrett-logo.svg', alt: 'Starrett', w: 180, h: 40 },
  { src: '/attivo-logo.svg', alt: 'Attivo', w: 140, h: 40 },
  { src: '/smart-asset.svg', alt: 'Smart Asset Control', w: 100, h: 40 },
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
                    <div className="flex items-center justify-center transition-opacity">
                      {/* Wrapper que limita o espaço, mas não força proporção */}
                      <div
                        className="logo-wrapper"
                        style={{
                          maxWidth: client.w,
                          maxHeight: client.h,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {/* next/image com width/height preserva proporção do SVG */}
                        <Image
                          src={client.src}
                          alt={client.alt}
                          width={client.w}
                          height={client.h}
                          style={{ objectFit: 'contain' }}
                          priority={false}
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
          width: 12rem;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: none;
          opacity: 0.95;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .marquee__item--last {
          margin-right: 4rem;
        }

        .marquee__item:hover {
          transform: translateY(-2px);
          opacity: 1;
        }

        .logo-wrapper {
          background: transparent;
          /* evita overflow se o SVG for maior; object-fit:contain cuida do resto */
        }

        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
