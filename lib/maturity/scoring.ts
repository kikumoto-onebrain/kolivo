import { DIMENSIONS, DimensionKey } from './questions';

export type AnswersMap = Record<string, number>; // qId -> 1..5

export function clampScore(value: number) {
  return Math.min(5, Math.max(1, value));
}

// média 1..5 por dimensão (3 perguntas)
export function scoreByDimension(answers: AnswersMap) {
  const bucket: Record<DimensionKey, number[]> = {
    itsm: [],
    automation: [],
    people: [],
    assets: [],
    ai: [],
    culture: [],
  };

  for (const [qid, v] of Object.entries(answers)) {
    // q1..q18 mapeiam conforme prefixo do arquivo questions.ts
    // A dimensão em si será calculada na página (vamos passar também)
    // Mas aqui assumimos que quem chama já agrupa; então este helper é opcional.
  }

  return bucket;
}

export function weightedOverallScore(dimScores: Record<DimensionKey, number>) {
  // dimScores: 1..5
  // score final 0..100
  const sum =
    Object.entries(dimScores).reduce((acc, [k, v]) => {
      const key = k as DimensionKey;
      return acc + v * DIMENSIONS[key].weight;
    }, 0) / 5;

  return Math.round(sum * 100);
}

export function maturityLabel(score0to100: number) {
  if (score0to100 <= 20) return { level: 'Inicial', desc: 'Operação ainda muito reativa e com baixa padronização.' };
  if (score0to100 <= 40) return { level: 'Básico', desc: 'Processos em construção, com padronização parcial.' };
  if (score0to100 <= 60) return { level: 'Intermediário', desc: 'Boa base, com oportunidades claras de automação e governança.' };
  if (score0to100 <= 80) return { level: 'Avançado', desc: 'Operação bem estruturada, orientada por dados e melhoria contínua.' };
  return { level: 'Excelência Digital', desc: 'Alta maturidade, operação inteligente, previsível e escalável.' };
}

// Sugestões simples de insights
export function buildInsights(dimScores: Record<DimensionKey, number>) {
  const entries = Object.entries(dimScores) as [DimensionKey, number][];
  const sortedAsc = [...entries].sort((a, b) => a[1] - b[1]);
  const sortedDesc = [...entries].sort((a, b) => b[1] - a[1]);

  const improvements = sortedAsc.slice(0, 2).map(([k, v]) => ({ key: k, score: v, label: DIMENSIONS[k].label }));
  const strengths = sortedDesc.slice(0, 2).map(([k, v]) => ({ key: k, score: v, label: DIMENSIONS[k].label }));

  return { improvements, strengths };
}
