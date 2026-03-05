'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SERVICE_ID = 'service_7gblydj';
const TEMPLATE_ID = 'template_hbug1cp';
const PUBLIC_KEY = '13O_ZGPDK5-AjkGRr';

// Tipagem segura para o gtag no browser
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function CTA() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          source: 'RPA - CTA Section',
          page: typeof window !== 'undefined' ? window.location.href : '',
        },
        PUBLIC_KEY
      );

      // Conversão Google Ads após envio OK
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11171385452/VjYUCMPLxv8bEOyg984p',
        });
      }

      toast({
        title: 'Tudo certo!',
        description: 'Recebemos seus dados. Em breve falamos com você.',
      });

      setFormData({ name: '', email: '', company: '', phone: '' });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-24 bg-kolivo-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12">
          {/* Título/Texto */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Descubra o potencial de automação da sua empresa
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Nossa equipe analisa seus processos e identifica oportunidades reais
              de automação com RPA e integrações.
            </motion.p>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Nome"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white h-14"
              />

              <Input
                type="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white h-14"
              />

              <Input
                placeholder="Empresa"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white h-14"
              />

              <Input
                placeholder="Telefone"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white h-14"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-kolivo-accent hover:bg-kolivo-accent/90 h-14 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              >
                {isSubmitting ? 'Enviando...' : 'Fale com um especialista'}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Ao enviar, você concorda em ser contatado pela Kolivo para
                orientação sobre automação.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}