import type { Question, PhoneCoverage } from '@/types/quiz';

// Question definitions
export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: 'What type of business do you run?',
    answerKey: 'industry',
    type: 'dropdown',
    options: [
      'HVAC / Plumbing / Electrical',
      'Medical / Dental',
      'Legal Services',
      'Home Services',
      'Salon / Spa',
      'Restaurant',
      'Auto Repair',
      'Real Estate',
      'Other',
    ],
  },
  {
    id: 2,
    questionText: 'How many calls does your business receive per week on average?',
    answerKey: 'callsPerWeek',
    type: 'slider',
    min: 10,
    max: 500,
    step: 5,
    tip: 'Include all inbound calls: new customers, existing customers, appointments, vendor calls.',
  },
  {
    id: 3,
    questionText: "What percentage of calls do you think you're currently answering?",
    answerKey: 'answerPercentage',
    type: 'slider',
    min: 20,
    max: 100,
    step: 5,
    suffix: '%',
    tip: "Most business owners estimate 80-90%. We'll compare your perception to industry data.",
  },
  {
    id: 4,
    questionText: 'How many people handle phone coverage during and after business hours?',
    answerKey: 'phoneCoverage',
    type: 'dropdown',
    options: ['Just me', '1 dedicated person', '2-3 people', '4+ people', 'Answering service'],
    tip: 'This helps us calculate your realistic answer rate based on industry benchmarks.',
  },
  {
    id: 5,
    questionText: "What's your average transaction or job value?",
    answerKey: 'jobValue',
    type: 'slider',
    min: 25,
    max: 25000,
    step: 25,
    prefix: '$',
    tip: 'Include your typical sale, service call, or project fee.',
  },
  {
    id: 6,
    questionText: "What's your close rate? (percentage of answered calls that become customers)",
    answerKey: 'closeRate',
    type: 'slider',
    min: 0,
    max: 100,
    step: 5,
    suffix: '%',
    tip: 'If you answer 10 calls from new potential customers, how many become paying customers?',
  },
  {
    id: 7,
    questionText: 'What are you currently spending per month on phone coverage?',
    answerKey: 'monthlySpending',
    type: 'slider',
    min: 0,
    max: 10000,
    step: 100,
    prefix: '$',
    tip: 'Include receptionist wages (phone portion), answering service fees, or $0 if owner handles calls.',
    optional: true,
  },
];

// Industry default values for job value and close rate
// Used to auto-populate Q5 (job value) and Q6 (close rate) when user selects industry
export const INDUSTRY_DEFAULTS: Record<string, { jobValue: number; closeRate: number }> = {
  'HVAC / Plumbing / Electrical': { jobValue: 450, closeRate: 35 },
  'Medical / Dental': { jobValue: 250, closeRate: 60 },
  'Legal Services': { jobValue: 1500, closeRate: 25 },
  'Home Services': { jobValue: 200, closeRate: 40 },
  'Salon / Spa': { jobValue: 85, closeRate: 55 },
  'Restaurant': { jobValue: 45, closeRate: 70 },
  'Auto Repair': { jobValue: 350, closeRate: 45 },
  'Real Estate': { jobValue: 8000, closeRate: 15 },
  'Other': { jobValue: 500, closeRate: 30 },
};

// Phone coverage blended answer rates
// Calculated as: (Business Hours Rate × 0.70) + (After Hours Rate × 0.30)
// This represents the realistic answer rate based on coverage type
export const COVERAGE_BLENDED_RATES: Record<PhoneCoverage, number> = {
  'Just me': 34.5, // 45% business × 0.70 + 10% after × 0.30 = 34.5%
  '1 dedicated person': 50.0, // 65% business × 0.70 + 15% after × 0.30 = 50.0%
  '2-3 people': 60.6, // 78% business × 0.70 + 20% after × 0.30 = 60.6%
  '4+ people': 69.1, // 88% business × 0.70 + 25% after × 0.30 = 69.1%
  'Answering service': 89.9, // 92% business × 0.70 + 85% after × 0.30 = 89.9%
};

// Number of work days per month
export const WORK_DAYS_PER_MONTH = 22;
