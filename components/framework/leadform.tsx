'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
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

export function LeadForm({
  onSuccess,
  answers,
}: {
  onSuccess: () => void;
  answers: Record<string, number>;
}) {
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

          // 🔥 EXTRA: envia respostas do quiz
          answers: JSON.stringify(answers),
        },
        PUBLIC_KEY
      );

      // ✅ Dispara conversão Google Ads após envio bem-sucedido
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11171385452/VjYUCMPLxv8bEOyg984p',
        });
      }

      toast({
        title: 'Tudo certo!',
        description: 'Gerando seu resultado...',
      });

      onSuccess();
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
    <main className="min-h-screen bg-kolivo-primary flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Preencha os campos abaixo para receber o resultado da sua avaliação
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full bg-kolivo-accent h-14 text-lg"
            >
              {isSubmitting ? 'Enviando...' : 'Ver meu resultado'}
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}