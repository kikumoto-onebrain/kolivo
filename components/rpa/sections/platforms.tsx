'use client';

import { motion } from 'framer-motion';
import { Workflow, Plug, Layers, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Platforms() {
  const platforms = [
    {
      title: 'Plataformas RPA',
      icon: Workflow,
      items: ['BotCity', 'UiPath', 'Blue Prism', 'Microsoft Power Automate'],
    },
    {
      title: 'iPaaS',
      icon: Plug,
      items: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Talend', 'Apache Kafka'],
    },
    {
      title: 'API Gateway & Management',
      icon: Layers,
      items: ['Kong', 'Apigee', 'Azure API Management', 'WSO2'],
    },
    {
      title: 'ETL / ELT',
      icon: Database,
      items: ['Pentaho', 'Microsoft SSIS', 'Airbyte', 'Fivetran'],
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-kolivo-primary to-[#070824]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Ecossistema conectado: RPA + integrações
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Conectamos sistemas, eliminamos silos e criamos fluxos contínuos para visibilidade e automação em tempo real.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {platforms.map(({ title, icon: Icon, items }) => (
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <Button
            size="lg"
            className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
            onClick={() => {
              document
                .getElementById('contato')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Integre e automatize meus processos
          </Button>
        </motion.div>

      </div>
    </section>
  );
}