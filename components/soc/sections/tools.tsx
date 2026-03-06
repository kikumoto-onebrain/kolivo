'use client';

import { motion } from 'framer-motion';
import { Shield, Radar, Lock, DatabaseBackup } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Tools() {
  const blocks = [
    {
      icon: Shield,
      title: 'Frameworks e conformidade',
      items: ['ISO 27001', 'LGPD', 'NIST Cybersecurity Framework', 'CIS Controls', 'ERAMBA-GRC'],
    },
    {
      icon: Radar,
      title: 'SIEM',
      items: ['Wazuh', 'Splunk'],
    },
    {
      icon: Lock,
      title: 'EDR / Vulnerabilidades / Firewall',
      items: ['CrowdStrike', 'Kaspersky', 'BitDefender', 'Fortinet', 'Sonicwall', 'Sophos'],
    },
    {
      icon: DatabaseBackup,
      title: 'Segredos, criptografia e continuidade',
      items: ['LastPass', 'Keeper', 'AWS Secrets Manager', 'Veeam (Backup & Recovery)'],
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-kolivo-primary to-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Ferramentas e práticas de segurança
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Selecionamos e operamos stack de segurança conforme necessidade: detecção, resposta, controle de acesso,
            proteção de dados e continuidade.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {blocks.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-kolivo-accent/10">
                  <Icon className="w-5 h-5 text-kolivo-accent" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
            onClick={() =>
              document
                .getElementById('contato')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Estruture sua stack de segurança
          </Button>
        </div>

      </div>
    </section>
  );
}