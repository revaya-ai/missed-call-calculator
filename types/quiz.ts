// Quiz Types for Missed Call ROI Calculator

export type IndustryType =
  | 'HVAC / Plumbing / Electrical'
  | 'Roofing / Construction'
  | 'Legal Services'
  | 'Medical / Dental Practice'
  | 'Home Services (cleaning, landscaping, pest control)'
  | 'Other Service Business';

export type PhoneCoverage =
  | 'Just me'
  | '1 dedicated person'
  | '2-3 people'
  | '4+ people'
  | 'Answering service';

export interface QuizAnswers {
  industry: IndustryType | null;
  callsPerWeek: number; // Slider: 10-500
  answerPercentage: number; // Slider: 0-100
  phoneCoverage: PhoneCoverage | null;
  jobValue: number; // Slider: $25-$25,000
  closeRate: number; // Slider: 0-100
  monthlySpending: number; // Slider: $0-$10,000 (optional, can be skipped)
  name: string;
  email: string;
  businessName?: string;
}

export interface CalculationResults {
  // Call volume
  monthlyCallVolume: number;

  // Perception vs Reality
  perceivedAnswerRate: number;
  realisticAnswerRate: number;
  perceivedMissedCallsWeekly: number;
  perceivedMissedCallsMonthly: number;
  actualMissedCallsWeekly: number;
  actualMissedCallsMonthly: number;

  // Revenue Loss
  newBusinessMissedMonthly: number;
  lostCustomersMonthly: number;
  lostRevenueMonthly: number;
  lostRevenueAnnual: number;

  // AI Recovery
  aiMissedCallsWeekly: number;
  aiMissedCallsMonthly: number;
  revenueRecoveredMonthly: number;
  revenueRecoveredAnnual: number;

  // Optional cost metric
  costPerAnsweredCall: number | null;

  // Legacy fields (keep for backward compatibility)
  dailyMissedCalls: number;
  monthlyMissedCalls: number;
  monthlyLostRevenue: number;
  annualLostRevenue: number;
  actualAnswerRate: number;
}

export interface Question {
  id: number;
  questionText: string;
  answerKey: keyof QuizAnswers;
  type: 'dropdown' | 'slider';
  tip?: string;
  // For dropdowns
  options?: string[];
  // For sliders
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  formatValue?: (value: number) => string;
  optional?: boolean;
}

export interface QuizSubmission extends QuizAnswers, CalculationResults {
  id?: string;
  created_at?: string;
}
