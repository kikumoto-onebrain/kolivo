'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Link2,
  Zap,
  ShieldCheck,
  Clock,
  TrendingDown,
  CheckCircle2,
  Workflow,
  Layers,
  Plug,
  Database,
  BadgeCheck,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

const stats = [
  {
    icon: TrendingDown,
    title: '60%–80%',
    desc: 'redução no tempo de processos',
  },
  {
    icon: Clock,
    title: '24/7',
    desc: 'execução contínua com alta precisão',
  },
  {
    icon: BadgeCheck,
    title: '6–12 meses',
    desc: 'ROI típico em projetos bem escolhidos',
  },
];

const valueCards = [
  {
    icon: Bot,
    title: 'Automação robótica',
    desc: 'Bots executam tarefas repetitivas com consistência e velocidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Menos erros e retrabalho',
    desc: 'Processos baseados em regras reduzem falhas humanas e aumentam controle.',
  },
  {
    icon: Link2,
    title: 'Integrações fluidas',
    desc: 'Conecte sistemas legados e plataformas modernas para criar fluxo contínuo.',
  },
  {
    icon: Zap,
    title: 'Produtividade real',
    desc: 'Libere seu time para atividades estratégicas e decisões com mais impacto.',
  },
];

const useCases = [
  {
    title: 'Financeiro',
    bullets: ['Processamento de faturas', 'Reconciliação financeira', 'Validações e conciliações'],
  },
  {
    title: 'Operações',
    bullets: ['Entrada de dados', 'Geração de relatórios', 'Atualização de cadastros e transações'],
  },
  {
    title: 'Atendimento',
    bullets: ['Automação de e-mails', 'Triagem e encaminhamento', 'Chatbots e respostas a FAQs'],
  },
  {
    title: 'TI',
    bullets: ['Monitoramento de rotinas', 'Execução de tarefas operacionais', 'Apoio a atualizações e checklists'],
  },
];

const platforms = [
  { title: 'Plataformas RPA', icon: Workflow, items: ['BotCity', 'UiPath', 'Blue Prism', 'Microsoft Power Automate'] },
  { title: 'iPaaS', icon: Plug, items: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Talend', 'Apache Kafka'] },
  { title: 'API Gateway & Management', icon: Layers, items: ['Kong', 'Apigee', 'Azure API Management', 'WSO2'] },
  { title: 'ETL / ELT', icon: Database, items: ['Pentaho', 'Microsoft SSIS', 'Airbyte', 'Fivetran'] },
];

const faq = [
  {
    q: 'O que é RPA (Robotic Process Automation)?',
    a: 'RPA é o uso de bots de software para executar tarefas digitais repetitivas, baseadas em regras, em sistemas e aplicações como se fossem um usuário humano.',
  },
  {
    q: 'Quais processos são os melhores candidatos para automação?',
    a: 'Tarefas repetitivas, com alto volume, baseadas em regras e suscetíveis a erro humano (ex.: lançamentos, validações, conciliações, relatórios e integrações).',
  },
  {
    q: 'RPA substitui pessoas?',
    a: 'O objetivo é reduzir tarefas operacionais e liberar pessoas para atividades estratégicas, atendimento, inovação e tomada de decisão.',
  },
  {
    q: 'Em quanto tempo consigo ver resultado?',
    a: 'Em projetos bem escolhidos, é comum alcançar ROI em 6–12 meses, com ganhos já perceptíveis nas primeiras automações.',
  },
];

export default function RPAClientPage() {
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
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Automação de processos com<span className="text-[#5A5AFF]">RPA</span> para empresas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Automatize tarefas repetitivas, reduza erros humanos e libere sua equipe para atividades estratégicas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
                onClick={() => {
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solicitar diagnóstico
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {stats.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                    <Icon className="w-7 h-7 text-kolivo-accent" />
                  </div>
                  <div className="text-2xl font-bold">{title}</div>
                  <p className="mt-2 text-gray-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
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
              Automação que cria eficiência de ponta a ponta
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              RPA elimina tarefas manuais, melhora a qualidade operacional e acelera fluxos críticos com previsibilidade.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valueCards.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-kolivo-accent/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(90,90,255,0.18)]"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                  <Icon className="w-7 h-7 text-kolivo-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Acelerar com RPA
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* USE CASES */}
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
              Casos de uso de alto impacto
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              Processos repetitivos e baseados em regras são ideais para automação. Começamos pelo que gera resultado mais rápido.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {useCases.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">{c.title}</h3>
                <ul className="space-y-3">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTED VS UNASSISTED */}
      <section className="py-20 sm:py-24 bg-kolivo-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold">Automação assistida ou não assistida</h3>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Projetamos bots para trabalhar junto com pessoas (assistida) ou operar end-to-end sem intervenção (não assistida).
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="inline-flex items-center gap-2 text-kolivo-accent font-semibold">
                  <Bot className="w-5 h-5" />
                  Automação assistida
                </div>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Bots atuam em segundo plano e são ativados por ações humanas, acelerando tarefas sem mudar o modo de trabalho.
                </p>
                <ul className="mt-5 space-y-3">
                  {['Atendimento e backoffice', 'Operações com validação humana', 'Apoio a times de suporte'].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="inline-flex items-center gap-2 text-kolivo-accent font-semibold">
                  <Workflow className="w-5 h-5" />
                  Automação não assistida
                </div>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Bots executam processos completos de forma agendada ou por gatilhos, sem intervenção humana.
                </p>
                <ul className="mt-5 space-y-3">
                  {['Processos financeiros recorrentes', 'Integração de sistemas legados', 'Relatórios e rotinas operacionais'].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
                onClick={() => {
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quero automatizar processos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS / INTEGRATIONS */}
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
              Ecossistema conectado: RPA + integrações
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300"
            >
              Conectamos sistemas heterogêneos, eliminamos silos e criamos fluxos contínuos para visibilidade e automação em tempo real.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {platforms.map(({ title, icon: Icon, items }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 sm:py-24 bg-[#070824]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold">Como a Kolivo implementa RPA</h2>
              <p className="mt-4 text-lg text-gray-300">
                Começamos com análise detalhada, priorizamos o que dá retorno e implantamos com governança e monitoramento.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Plug,
                  title: '1) Diagnóstico de processos',
                  desc: 'Mapeamos tarefas repetitivas, baseadas em regras e suscetíveis a erro humano.',
                },
                {
                  icon: Layers,
                  title: '2) Priorização por impacto',
                  desc: 'Avaliamos frequência, volume e ganho potencial para selecionar o melhor backlog.',
                },
                {
                  icon: Bot,
                  title: '3) Desenvolvimento dos bots',
                  desc: 'Construímos automações com rastreabilidade, segurança e integração aos fluxos existentes.',
                },
                {
                  icon: ShieldCheck,
                  title: '4) Implantação e governança',
                  desc: 'Operação monitorada, logs, métricas e melhoria contínua para garantir estabilidade.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kolivo-accent/10 mb-4">
                    <Icon className="w-6 h-6 text-kolivo-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="py-20 sm:py-24 bg-kolivo-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold">Quer automatizar processos com RPA?</h3>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Solicite um diagnóstico e receba recomendações práticas para reduzir tempo, erros e retrabalho com automação e integrações.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/5511996456724" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] group"
                >
                  Falar no WhatsApp
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Link href="/framework/quiz" className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-lg"
                >
                  Fazer avaliação gratuita
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              Tempo médio de avaliação: 5–6 minutos. Diagnóstico direcionado para seu cenário.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-kolivo-primary to-[#070824]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Perguntas frequentes</h2>
            <div className="mt-10 space-y-4">
              {faq.map((f) => (
                <div key={f.q} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-kolivo-accent mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">{f.q}</h3>
                      <p className="mt-2 text-gray-300 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}