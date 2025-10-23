'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-kolivo-primary border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Kolivo</h3>
            <p className="text-gray-400 leading-relaxed">
              Transformamos operações complexas em ecossistemas vivos. Juntos em
              fluxo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'ITOps',
                'RPA',
                'Security Assessment',
                'SOC',
                'NOC',
                'Cloud & On-Premise',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-kolivo-accent transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-kolivo-accent" />
                <span>contato@kolivo.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-kolivo-accent" />
                <span>+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-kolivo-accent" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kolivo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-kolivo-accent transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-kolivo-accent transition-colors text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Kolivo',
            description:
              'A Kolivo une pessoas, tecnologia e processos para construir operações de TI mais inteligentes, automatizadas e colaborativas.',
            url: 'https://kolivo.com.br',
            logo: 'https://kolivo.com.br/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+55-11-1234-5678',
              contactType: 'Customer Service',
              areaServed: 'BR',
              availableLanguage: 'Portuguese',
            },
            sameAs: [
              'https://www.linkedin.com/company/kolivo',
              'https://twitter.com/kolivo',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'São Paulo',
              addressCountry: 'BR',
            },
          }),
        }}
      />
    </footer>
  );
}
