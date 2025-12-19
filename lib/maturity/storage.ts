import type { AnswersMap } from './scoring';

const KEY = 'kolivo_maturity_v1';

export function saveAnswers(payload: { answers: AnswersMap }) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(payload));
}

export function loadAnswers(): { answers: AnswersMap } | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearAnswers() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEY);
}
