'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

import { QUESTIONS, DIMENSIONS, DimensionKey } from '@/lib/maturity/questions';
import { clampScore } from '@/lib/maturity/scoring';
import { loadAnswers, saveAnswers } from '@/lib/maturity/storage';

export default function QuizPage() {
  const router = useRouter();
  const total = QUESTIONS.length;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = loadAnswers();
    if (saved?.answers) setAnswers(saved.answers);
  }, []);

  useEffect(() => {
    saveAnswers({ answers });
  }, [answers]);

  const q = QUESTIONS[idx];

  const progress = useMemo(() => {
    const answeredCount = Object.keys(answers).length;
    return Math.round((answeredCount / total) * 100);
  }, [answers, total]);

  const currentValue = answers[q.id];

  function setAnswer(v: number) {
    setAnswers((prev) => ({ ...prev, [q.id]: clampScore(v) }));
  }

  function next() {
    if (!answers[q.id]) return;
    if (idx < total - 1) setIdx((p) => p + 1);
    else router.push('/framework/result');
  }

  function back() {
    if (idx > 0) setIdx((p) => p - 1);
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-kolivo-primary pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Progresso */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-300">
                  Pergunta {idx + 1} de {total}
                </p>
                <p className="text-gray-300">{progress}%</p>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-kolivo-accent transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Card da pergunta */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-kolivo-accent font-semibold mb-2">
                {DIMENSIONS[q.dimension as DimensionKey].label}
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {q.title}
              </h1>

              {q.helper ? (
                <p className="text-gray-300 mb-8">{q.helper}</p>
              ) : (
                <div className="mb-8" />
              )}

              {/* Opções */}
              <div className="grid grid-cols-1 gap-3">
                {q.options.map((o: { value: number; label: string }) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => setAnswer(o.value)}
                    className={[
                      'text-left px-5 py-4 rounded-xl border transition-colors',
                      currentValue === o.value
                        ? 'border-kolivo-accent bg-kolivo-accent/10 text-white'
                        : 'border-white/10 bg-white/5 text-gray-200 hover:bg-white/10',
                    ].join(' ')}
                  >
                    {o.label}
                  </button>
                ))}
              </div>

              {/* Navegação */}
              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={back}
                  disabled={idx === 0}
                  className="px-5 py-3 rounded-lg border border-white/15 text-white disabled:opacity-40"
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={next}
                  disabled={!answers[q.id]}
                  className="bg-kolivo-accent hover:bg-kolivo-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,90,255,0.5)] disabled:opacity-40"
                >
                  {idx === total - 1 ? 'Ver resultado' : 'Próxima'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
