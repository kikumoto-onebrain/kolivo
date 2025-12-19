'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckCircle2,
  Award,
  Clock,
  Target,
  Zap,
  Users,
  BarChart3,
  Brain,
  TrendingUp,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

export default function FrameworkHomePage() {
  return (
    <div className="bg-kolivo-primary text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-kolivo-primary via-kolivo-primary to-transparent" />
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-kolivo-accent/20 blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-kolivo-accent/15 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Descubra o Nível de{' '}
              <span className="text-[#5A5AFF]">Maturidade de Produtividade</span>{' '}
              da Sua Organização
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Identifique oportunidades de crescimento e receba recomendações
              personalizadas para acelerar sua jornada de produtividade digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex justify-center"
            >
              <Link href="/framework/quiz">
                <Button
                  size="lg"
                  className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
                >
                  Iniciar avaliação
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Cards HERO */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <InfoCard
                icon={<CheckCircle2 className="w-7 h-7 text-kolivo-accent" />}
                title="Avaliação Completa"
                description="18 perguntas estratégicas cobrindo 6 dimensões essenciais da produtividade digital"
              />
              <InfoCard
                icon={<Award className="w-7 h-7 text-kolivo-accent" />}
                title="Relatório Personalizado"
                description="Receba insights detalhados e um plano de ação customizado para sua organização"
              />
              <InfoCard
                icon={<Clock className="w-7 h-7 text-kolivo-accent" />}
                title="Rápido e Eficiente"
                description="Apenas 5-6 minutos para obter uma visão completa da sua produtividade digital"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - 6 DIMENSÕES */}
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
              6 Dimensões Avaliadas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              Nossa metodologia analisa os aspectos mais críticos da produtividade
              digital
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <DimensionCard
              icon={<Target className="w-7 h-7 text-kolivo-accent" />}
              title="Gestão de Serviços de TI (ITSM)"
              description="Avalia a maturidade dos processos de gerenciamento de serviços de tecnologia."
            />
            <DimensionCard
              icon={<Zap className="w-7 h-7 text-kolivo-accent" />}
              title="Automação e Otimização de Processos"
              description="Mede o nível de automação e otimização dos processos organizacionais."
            />
            <DimensionCard
              icon={<Users className="w-7 h-7 text-kolivo-accent" />}
              title="People Analytics"
              description="Avalia a capacidade de análise da jornada e performance dos colaboradores."
            />
            <DimensionCard
              icon={<BarChart3 className="w-7 h-7 text-kolivo-accent" />}
              title="Gestão de Ativos e Licenciamento"
              description="Mede a eficiência na gestão de ativos digitais e licenças de software."
            />
            <DimensionCard
              icon={<Brain className="w-7 h-7 text-kolivo-accent" />}
              title="Inovação e Inteligência Artificial"
              description="Avalia o uso de IA e tecnologias emergentes nos processos."
            />
            <DimensionCard
              icon={<TrendingUp className="w-7 h-7 text-kolivo-accent" />}
              title="Cultura e Liderança Digital"
              description="Mede a maturidade cultural e liderança na transformação digital."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - NÍVEIS */}
      <section className="py-20 sm:py-24 bg-[#070824]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              3 Níveis de Maturidade
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              Identifique onde sua organização está e para onde pode evoluir
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <MaturityCard
              tagLabel="Básico"
              tagClass="border-red-500/60 bg-red-500/10 text-red-300"
              description="Organização em estágio inicial de transformação digital, com processos manuais e pouca integração tecnológica."
              bullets={[
                'Processos predominantemente manuais',
                'Baixa integração entre sistemas',
                'Gestão reativa de problemas',
              ]}
            />
            <MaturityCard
              tagLabel="Intermediário"
              tagClass="border-yellow-500/60 bg-yellow-500/10 text-yellow-300"
              description="Organização com base digital estabelecida, mas com oportunidades de otimização e integração."
              bullets={[
                'Alguns processos automatizados',
                'Sistemas parcialmente integrados',
                'Gestão proativa em algumas áreas',
              ]}
            />
            <MaturityCard
              tagLabel="Avançado"
              tagClass="border-emerald-500/60 bg-emerald-500/10 text-emerald-300"
              description="Organização digitalmente madura com processos otimizados, alta integração e uso estratégico de dados."
              bullets={[
                'Processos altamente automatizados',
                'Sistemas totalmente integrados',
                'Gestão preditiva e estratégica',
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 - CTA */}
      <section className="py-20 sm:py-24 bg-kolivo-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold">
                Pronto para Descobrir Seu Potencial Digital?
              </h3>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Em apenas 5-6 minutos, receba insights valiosos para impulsionar
                sua produtividade digital.
              </p>

              <div className="mt-10 flex justify-center">
                <Link href="/framework/quiz">
                  <Button
                    size="lg"
                    className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
                  >
                    Iniciar Avaliação Gratuita
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- Components ---------- */

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function DimensionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.18)]">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function MaturityCard({
  tagLabel,
  tagClass,
  description,
  bullets,
}: {
  tagLabel: string;
  tagClass: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-semibold ${tagClass}`}
      >
        {tagLabel}
      </div>

      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>

      <ul className="mt-5 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-gray-200">
            <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
