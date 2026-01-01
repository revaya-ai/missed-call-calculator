import type { QuizAnswers, CalculationResults, PhoneCoverage } from '@/types/quiz';
import { COVERAGE_BLENDED_RATES } from './constants';

/**
 * Calculate missed call ROI based on quiz answers
 *
 * Complete calculation flow:
 * 1. Convert weekly to monthly call volume
 * 2. Calculate realistic answer rate from blended rates
 * 3. Calculate both perceived and actual missed calls
 * 4. Apply 60% new business factor
 * 5. Calculate revenue loss
 * 6. Calculate AI recovery scenario (95% answer rate)
 * 7. Calculate cost per answered call (if applicable)
 */
export function calculateROI(answers: QuizAnswers): CalculationResults {
  // Validate required fields
  if (!answers.phoneCoverage || !answers.callsPerWeek || !answers.jobValue) {
    console.error('Missing required fields:', {
      phoneCoverage: answers.phoneCoverage,
      callsPerWeek: answers.callsPerWeek,
      jobValue: answers.jobValue
    });
    throw new Error('Missing required calculation fields');
  }

  // Validate numeric fields
  if (typeof answers.callsPerWeek !== 'number' || isNaN(answers.callsPerWeek)) {
    console.error('Invalid callsPerWeek:', answers.callsPerWeek);
    throw new Error('Invalid calls per week value');
  }

  if (typeof answers.answerPercentage !== 'number' || isNaN(answers.answerPercentage)) {
    console.error('Invalid answerPercentage:', answers.answerPercentage);
    throw new Error('Invalid answer percentage value');
  }

  if (typeof answers.jobValue !== 'number' || isNaN(answers.jobValue)) {
    console.error('Invalid jobValue:', answers.jobValue);
    throw new Error('Invalid job value');
  }

  if (typeof answers.closeRate !== 'number' || isNaN(answers.closeRate)) {
    console.error('Invalid closeRate:', answers.closeRate);
    throw new Error('Invalid close rate');
  }

  // Step 1: Convert weekly to monthly
  const monthlyCallVolume = answers.callsPerWeek * 4.33;

  // Step 2: Calculate realistic answer rate
  const realisticAnswerRate = COVERAGE_BLENDED_RATES[answers.phoneCoverage as PhoneCoverage];

  if (typeof realisticAnswerRate !== 'number' || isNaN(realisticAnswerRate)) {
    console.error('Invalid realisticAnswerRate for coverage:', answers.phoneCoverage, realisticAnswerRate);
    throw new Error('Invalid coverage type');
  }

  const realisticAnswerRateDecimal = realisticAnswerRate / 100;

  // Step 3: Calculate missed calls
  const actualMissedCallsMonthly = monthlyCallVolume * (1 - realisticAnswerRateDecimal);
  const actualMissedCallsWeekly = actualMissedCallsMonthly / 4.33;

  // Step 4: Calculate perception-based missed calls
  const perceivedAnswerRate = answers.answerPercentage;
  const perceivedAnswerRateDecimal = perceivedAnswerRate / 100;
  const perceivedMissedCallsMonthly = monthlyCallVolume * (1 - perceivedAnswerRateDecimal);
  const perceivedMissedCallsWeekly = perceivedMissedCallsMonthly / 4.33;

  // Step 5: Apply 60% new business factor
  const newBusinessFactor = 0.60;
  const newBusinessMissedMonthly = actualMissedCallsMonthly * newBusinessFactor;

  // Step 6: Calculate revenue loss
  const closeRate = answers.closeRate / 100;
  const lostCustomersMonthly = newBusinessMissedMonthly * closeRate;
  const lostRevenueMonthly = lostCustomersMonthly * answers.jobValue;
  const lostRevenueAnnual = lostRevenueMonthly * 12;

  // Step 7: Calculate AI recovery (95% answer rate)
  const aiAnswerRate = 0.95;
  const aiMissedCallsMonthly = monthlyCallVolume * (1 - aiAnswerRate);
  const aiMissedCallsWeekly = aiMissedCallsMonthly / 4.33;
  const aiNewBusinessMissed = aiMissedCallsMonthly * newBusinessFactor;
  const aiLostCustomers = aiNewBusinessMissed * closeRate;
  const aiLostRevenueMonthly = aiLostCustomers * answers.jobValue;
  const aiLostRevenueAnnual = aiLostRevenueMonthly * 12;
  const revenueRecoveredMonthly = lostRevenueMonthly - aiLostRevenueMonthly;
  const revenueRecoveredAnnual = lostRevenueAnnual - aiLostRevenueAnnual;

  // Step 8: Calculate cost per answered call (if applicable)
  let costPerAnsweredCall: number | null = null;
  if (answers.monthlySpending > 0) {
    const answeredCallsMonthly = monthlyCallVolume * realisticAnswerRateDecimal;
    costPerAnsweredCall = answers.monthlySpending / answeredCallsMonthly;
  }

  return {
    // Call volume
    monthlyCallVolume: Math.round(monthlyCallVolume * 10) / 10,

    // Perception vs Reality
    perceivedAnswerRate: Math.round(perceivedAnswerRate),
    realisticAnswerRate: Math.round(realisticAnswerRate * 10) / 10,
    perceivedMissedCallsWeekly: Math.round(perceivedMissedCallsWeekly * 10) / 10,
    perceivedMissedCallsMonthly: Math.round(perceivedMissedCallsMonthly),
    actualMissedCallsWeekly: Math.round(actualMissedCallsWeekly * 10) / 10,
    actualMissedCallsMonthly: Math.round(actualMissedCallsMonthly),

    // Revenue Loss
    newBusinessMissedMonthly: Math.round(newBusinessMissedMonthly * 10) / 10,
    lostCustomersMonthly: Math.round(lostCustomersMonthly * 10) / 10,
    lostRevenueMonthly: Math.round(lostRevenueMonthly),
    lostRevenueAnnual: Math.round(lostRevenueAnnual),

    // AI Recovery
    aiMissedCallsWeekly: Math.round(aiMissedCallsWeekly * 10) / 10,
    aiMissedCallsMonthly: Math.round(aiMissedCallsMonthly * 10) / 10,
    revenueRecoveredMonthly: Math.round(revenueRecoveredMonthly),
    revenueRecoveredAnnual: Math.round(revenueRecoveredAnnual),

    // Optional cost metric
    costPerAnsweredCall: costPerAnsweredCall !== null ? Math.round(costPerAnsweredCall * 100) / 100 : null,

    // Legacy fields (keep for backward compatibility)
    dailyMissedCalls: Math.round(actualMissedCallsWeekly / 7 * 10) / 10,
    monthlyMissedCalls: Math.round(actualMissedCallsMonthly),
    monthlyLostRevenue: Math.round(lostRevenueMonthly),
    annualLostRevenue: Math.round(lostRevenueAnnual),
    actualAnswerRate: Math.round(realisticAnswerRate),
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(num);
}
