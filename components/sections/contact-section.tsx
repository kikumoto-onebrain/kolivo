'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// 💡 Mesmos serviços de antes
const services = [
  'ITOps',
  'RPA - Automação',
  'Assessment de Segurança',
  'SOC - Centro de Operações de Segurança',
  'NOC - Centro de Operações de Rede',
  'Infraestrutura Cloud & On-Premise',
  'Service Desk',
  'Gestão de Ativos (ITAM)',
  'Stress Test',
  'Field Service',
];

// 🔑 IDs DIRETO DO EMAILJS (igual ao outro projeto)
const SERVICE_ID = 'service_7gblydj';
const TEMPLATE_ID = 'template_hbug1cp';
const PUBLIC_KEY = '13O_ZGPDK5-AjkGRr';

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // 🔗 Esses nomes precisam bater com o template do EmailJS:
          // {{name}}, {{email}}, {{company}}, {{phone}}, {{service}}, {{message}}
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-32 bg-kolivo-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Vamos construir juntos o futuro da sua operação
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Nome"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-kolivo-accent focus:ring-kolivo-accent h-14 text-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-kolivo-accent focus:ring-kolivo-accent h-14 text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Empresa"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-kolivo-accent focus:ring-kolivo-accent h-14 text-lg"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-kolivo-accent focus:ring-kolivo-accent h-14 text-lg"
                />
              </div>
            </div>

            <div>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                required
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-kolivo-accent focus:ring-kolivo-accent h-14 text-lg">
                  <SelectValue placeholder="Serviço de interesse" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea
                placeholder="Mensagem"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-kolivo-accent focus:ring-kolivo-accent text-lg resize-none"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-kolivo-accent hover:bg-kolivo-accent/90 text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Fale com um especialista
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
