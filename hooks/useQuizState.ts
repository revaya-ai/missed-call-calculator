'use client';

import { useState } from 'react';
import type { QuizAnswers } from '@/types/quiz';

const initialAnswers: QuizAnswers = {
  industry: null,
  callsPerWeek: 50,
  answerPercentage: 85,
  phoneCoverage: null,
  jobValue: 500,
  closeRate: 35,
  monthlySpending: 0,
  name: '',
  email: '',
  businessName: '',
};

export function useQuizState() {
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const updateAnswer = <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1));
  };

  const resetQuiz = () => {
    setAnswers(initialAnswers);
    setCurrentQuestion(0);
  };

  // Calculate progress percentage (0-100)
  // Contact form (question 8, index 7) should show 98%, not 100%
  const progress = currentQuestion === 7 ? 98 : ((currentQuestion + 1) / 8) * 100;

  return {
    answers,
    updateAnswer,
    currentQuestion,
    setCurrentQuestion,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    progress,
  };
}
