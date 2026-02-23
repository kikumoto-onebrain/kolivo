'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from 'recharts';

import {
  BarChart3,
  Radar as RadarIcon,
  AlertTriangle,
  CheckCircle2,
  Users,
  Package,
  Brain,
  Shield,
  Settings,
  TrendingUp,
  Calendar,
  Target,
  CheckCircle,
  Lightbulb,
  Download,
} from 'lucide-react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

import { DIMENSIONS, DimensionKey, QUESTIONS } from '@/lib/maturity/questions';
import {
  buildInsights,
  maturityLabel,
  weightedOverallScore,
} from '@/lib/maturity/scoring';
import { clearAnswers, loadAnswers } from '@/lib/maturity/storage';

type DimScores = Record<DimensionKey, number>;

function computeDimensionScores(answers: Record<string, number>): DimScores {
  const sums: Record<DimensionKey, { sum: number; count: number }> = {
    itsm: { sum: 0, count: 0 },
    automation: { sum: 0, count: 0 },
    people: { sum: 0, count: 0 },
    assets: { sum: 0, count: 0 },
    ai: { sum: 0, count: 0 },
    culture: { sum: 0, count: 0 },
  };

  for (const q of QUESTIONS) {
    const v = answers[q.id];
    if (!v) continue;
    sums[q.dimension].sum += v;
    sums[q.dimension].count += 1;
  }

  const out = {} as DimScores;
  (Object.keys(sums) as DimensionKey[]).forEach((k) => {
    const { sum, count } = sums[k];
    out[k] = count ? Number((sum / count).toFixed(2)) : 0;
  });

  return out;
}

function dimensionIcon(key: DimensionKey) {
  switch (key) {
    case 'people':
      return Users;
    case 'assets':
      return Package;
    case 'ai':
      return Brain;
    case 'itsm':
      return Settings;
    case 'automation':
      return TrendingUp;
    case 'culture':
      return Shield;
    default:
      return Settings;
  }
}

function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <div className="mt-4">
      <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#5A5AFF] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

type InsightItem = {
  key: DimensionKey;
  label: string;
  score: number;
};

function InsightRow({
  item,
  index,
  variant,
}: {
  item: InsightItem;
  index: number;
  variant: 'improvement' | 'strength';
}) {
  const Icon = dimensionIcon(item.key);
  const scoreText = `${item.score.toFixed(1)}/5.0`;

  const isImprovement = variant === 'improvement';

  const wrapper = isImprovement
    ? 'bg-red-500/8 border-red-400/15'
    : 'bg-emerald-500/8 border-emerald-300/15';

  const scoreColor = isImprovement ? 'text-red-200' : 'text-emerald-200';

  const badge = isImprovement
    ? {
        text: `#${index + 1} Prioridade`,
        cls: 'border-red-400/40 bg-red-400/10 text-red-200',
      }
    : {
        text: 'Destaque',
        cls: 'border-emerald-300/40 bg-emerald-300/10 text-emerald-200',
      };

  return (
    <div className={['rounded-2xl border p-6', 'backdrop-blur-sm', wrapper].join(' ')}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
            <Icon className="text-[#5A5AFF]" />
          </div>

          <div>
            <p className="font-semibold text-lg text-white">{item.label}</p>
            <p className="mt-1 text-white">
              Pontuação:{' '}
              <span className={['font-semibold', scoreColor].join(' ')}>
                {scoreText}
              </span>
            </p>
          </div>
        </div>

        <span className={['px-4 py-2 rounded-full text-sm font-semibold border', badge.cls].join(' ')}>
          {badge.text}
        </span>
      </div>

      <ProgressBar value={item.score} />
    </div>
  );
}

export default function ResultPage() {
  const router = useRouter(); // ✅ ADICIONADO
  const [answers, setAnswers] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const saved = loadAnswers();

    // 🔒 PROTEÇÃO
    if (!saved?.answers || Object.keys(saved.answers).length === 0) {
      router.push('/framework/quiz');
      return;
    }

    setAnswers(saved.answers);
  }, [router]);

  const { overall, label, bars, radar, insights, dimScores, overall5, max5, min5 } =
    useMemo(() => {
      const dimScores = answers ? computeDimensionScores(answers) : null;

      if (!dimScores) {
        return {
          overall: 0,
          label: maturityLabel(0),
          bars: [],
          radar: [],
          insights: { improvements: [], strengths: [] },
          dimScores: null as any,
          overall5: 0,
          max5: 0,
          min5: 0,
        };
      }

      const overall = weightedOverallScore(dimScores);
      const label = maturityLabel(overall);

      const values = Object.values(dimScores);
      const avg = values.reduce((a, b) => a + b, 0) / values.length;

      const overall5 = Number(avg.toFixed(1));

      const bars = Object.keys(dimScores).map((k: any) => ({
        name: DIMENSIONS[k].label,
        score: dimScores[k],
      }));

      const radar = Object.keys(dimScores).map((k: any) => ({
        dimension: DIMENSIONS[k].label,
        score: dimScores[k],
      }));

      const insights = buildInsights(dimScores);

      return { overall, label, bars, radar, insights, dimScores, overall5, max5: 0, min5: 0 };
    }, [answers]);

  // ✅ evita flash
  if (!answers) return null;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-kolivo-primary pt-24">
        {!answers ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Nenhuma avaliação encontrada
            </h1>
            <Link
              href="/framework/quiz"
              className="inline-flex items-center justify-center bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
            >
              Iniciar avaliação
            </Link>
          </div>
        ) : (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Resultado da Avaliação
                </h1>
                <p className="text-gray-300 text-lg">
                  Pontuação geral e maturidade por dimensão.
                </p>
              </div>

              {/* Score geral */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-gray-300 mb-2">Pontuação geral</p>
                  <div className="text-5xl font-bold text-white">
                    {overall5.toFixed(1)}
                    <span className="text-2xl font-semibold text-gray-300">/5.0</span>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-gray-300 mb-2">Classificação</p>
                  <div className="text-3xl font-bold text-white">{label.level}</div>
                  <p className="text-gray-300 mt-3">{label.desc}</p>
                </div>
              </div>

              {/* Gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {/* Barras */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#5A5AFF]" />
                    Pontuação por Dimensão
                  </h2>

                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={bars}>
                        <XAxis dataKey="name" hide />
                        <YAxis
                          domain={[0, 5]}
                          ticks={[1, 2, 3, 4, 5]}
                          tick={{ fill: '#cbd5e1' }}
                          axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
                          tickLine={{ stroke: 'rgba(255,255,255,0.15)' }}
                        />
                        <Tooltip
                          cursor={{ fill: 'rgba(90,90,255,0.12)' }}
                          contentStyle={{
                            background: 'rgba(24, 24, 40, 0.95)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 12,
                            color: '#fff',
                          }}
                          labelStyle={{ color: '#cbd5e1' }}
                          formatter={(value: any) => [
                            Number(value).toFixed(2),
                            'Pontuação',
                          ]}
                        />
                        <Bar
                          dataKey="score"
                          fill="#5A5AFF"
                          radius={[10, 10, 10, 10]}
                          activeBar={{ fill: 'rgba(90,90,255,0.65)' }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="text-gray-400 text-sm mt-3">Escala: 1 a 5</p>
                </div>

                {/* Radar */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <RadarIcon className="w-5 h-5 text-[#5A5AFF]" />
                    Radar de Maturidade
                  </h2>

                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radar} outerRadius="80%">
                        <PolarGrid
                          stroke="rgba(255,255,255,0.12)"
                          gridType="polygon"
                        />

                        <PolarAngleAxis
                          dataKey="dimension"
                          tick={{ fill: '#cbd5e1', fontSize: 12 }}
                          dy={10}
                        />

                        <PolarRadiusAxis
                          domain={[0, 5]}
                          tick={false}
                          axisLine={false}
                        />

                        <Tooltip
                          cursor={false}
                          contentStyle={{
                            background: 'rgba(24, 24, 40, 0.95)',
                            border: '1px solid rgba(255,255,255,0.15)' ,
                            borderRadius: 12,
                            color: '#fff',
                          }}
                          labelStyle={{ color: '#cbd5e1' }}
                          formatter={(value: any) => [
                            Number(value).toFixed(2),
                            'Pontuação',
                          ]}
                        />

                        <Radar
                          name="Maturidade"
                          dataKey="score"
                          stroke="#5A5AFF"
                          fill="#5A5AFF"
                          fillOpacity={0.22}
                          strokeWidth={2}
                          dot={{
                            r: 4,
                            fill: '#5A5AFF',
                            stroke: '#ffffff',
                            strokeWidth: 1,
                            fillOpacity: 0.95,
                          }}
                          activeDot={{
                            r: 6,
                            fill: '#5A5AFF',
                            stroke: '#ffffff',
                            strokeWidth: 1,
                          }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="text-gray-400 text-sm mt-3">Escala: 1 a 5</p>
                </div>
              </div>

              {/* Insights / Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {/* Oportunidades */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="mt-0.5">
                      <AlertTriangle className="w-6 h-6 text-[#5A5AFF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Oportunidades de Melhoria
                      </h3>
                      <p className="text-gray-300">
                        Dimensões com maior potencial de evolução
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {insights.improvements.slice(0, 2).map((i, idx) => (
                      <InsightRow
                        key={i.key}
                        item={i as any}
                        index={idx}
                        variant="improvement"
                      />
                    ))}
                  </div>
                </div>

                {/* Pontos fortes */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-6 h-6 text-[#5A5AFF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Pontos Fortes
                      </h3>
                      <p className="text-gray-300">
                        Dimensões com melhor desempenho atual
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {insights.strengths.slice(0, 2).map((i, idx) => (
                      <InsightRow
                        key={i.key}
                        item={i as any}
                        index={idx}
                        variant="strength"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Plano e Serviços (coluna) */}
              <div className="space-y-6 mb-10">
                {/* Plano de Ação */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-0.5 text-[#5A5AFF]">➜</div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Plano de Ação Estratégico
                      </h3>
                      <p className="text-gray-300">
                        Roadmap personalizado baseado nas suas prioridades
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {insights.improvements.slice(0, 3).map((it: any) => {
                      const Icon = dimensionIcon(it.key as DimensionKey);
                      const impact = impactLabel(it.score);

                      return (
                        <div
                          key={it.key}
                          className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-[#5A5AFF]/35 transition"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-full">
                              <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-[#5A5AFF]" />
                                </div>
                                <h4 className="text-white font-semibold text-lg">
                                  {roadmapTitle(it.key as DimensionKey)}
                                </h4>
                              </div>

                              <p className="text-gray-300 mt-2">
                                {roadmapDesc(it.key as DimensionKey)}
                              </p>

                              <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-300">
                                <span className="inline-flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-[#5A5AFF]" />
                                  Timeline:{' '}
                                  <span className="font-semibold">
                                    {roadmapTimeline(it.key as DimensionKey)}
                                  </span>
                                </span>

                                <span className="inline-flex items-center gap-2">
                                  <Target className="w-4 h-4 text-[#5A5AFF]" />
                                  Impacto:{' '}
                                  <span className="font-semibold">{impact}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Serviços Especializados Recomendados */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  {(() => {
                    const model = servicesFromMatrix(label.level, dimScores);
                    return (
                      <>
                        <div className="flex items-start gap-3 mb-2">
                          <div className="mt-0.5">
                            <Brain className="w-6 h-6 text-[#5A5AFF]" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-xl">
                              Serviços Especializados Recomendados
                            </h3>
                            <p className="text-gray-300">
                              Recomendações baseadas no seu nível atual e dimensões críticas
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {model.items.map((txt) => (
                            <div
                              key={txt}
                              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-3 hover:border-[#5A5AFF]/35 transition"
                            >
                              <CheckCircle className="w-5 h-5 text-[#5A5AFF]" />
                              <p className="text-gray-200 font-semibold">{txt}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#5A5AFF]/25 bg-[#5A5AFF]/8 p-6">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <Lightbulb className="w-6 h-6 text-[#5A5AFF]" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg">
                                {model.nextTitle}
                              </h4>
                              <p className="text-gray-300 mt-1">
                                {model.nextDesc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* CTA */}
              <div className="p-10 bg-gradient-to-br from-[#5A5AFF]/20 to-white/5 border border-[#5A5AFF]/30 rounded-2xl text-center">
                <h3 className="text-white font-bold text-3xl mb-4">
                  Acelere Sua Transformação Digital
                </h3>

                <p className="text-gray-300 max-w-3xl mx-auto mb-10">
                  Nossa equipe de especialistas tem mais de{' '}
                  <span className="font-semibold text-white">
                    10 anos de experiência
                  </span>{' '}
                  ajudando organizações a implementar as recomendações deste framework
                  e acelerar sua jornada digital.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://kolivo.com.br/#contato"
                    className="inline-flex items-center justify-center bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)]"
                  >
                    Fale com um especialista
                  </a>

                  <button
                    type="button"
                    onClick={async () => {
  try {
    if (!dimScores) return;

    const model = servicesFromMatrix(label.level, dimScores);

    const payload = {
      overall,
      level: label.level,
      desc: label.desc,
      dimScores: Object.fromEntries(
        (Object.keys(dimScores) as DimensionKey[]).map((k) => [
          DIMENSIONS[k].label,
          dimScores[k],
        ])
      ),
      improvements: insights.improvements.slice(0, 3).map((i: any) => ({
        label: i.label,
        score: i.score,
      })),
      strengths: insights.strengths.slice(0, 3).map((i: any) => ({
        label: i.label,
        score: i.score,
      })),
      services: model.items,
    };

    const res = await fetch('/api/framework/report', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

if (!res.ok) {
  const txt = await res.text();
  console.error('PDF error:', res.status, txt);
  alert(`Falha ao gerar PDF (${res.status}). Veja o console.`);
  return;
}

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/pdf')) {
      const txt = await res.text().catch(() => '');
      console.error('Resposta não é PDF:', contentType, txt);
      alert('A API não retornou um PDF. Veja o console.');
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    // download normal
    const a = document.createElement('a');
    a.href = url;
    a.download = 'relatorio-kolivo.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();

    // fallback (alguns Safari/iOS podem bloquear download via click programático)
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 2000);
  } catch (err) {
    console.error(err);
    alert('Erro inesperado ao gerar o PDF. Veja o console.');
  }
}}

                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                  >
                    <Download className="w-5 h-5" />
                    Baixe o relatório em PDF
                  </button>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      clearAnswers();
                      window.location.href = '/framework/quiz';
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Fazer nova avaliação
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
