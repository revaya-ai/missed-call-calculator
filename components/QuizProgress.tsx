'use client';

interface QuizProgressProps {
  progress: number; // 0-100
  currentQuestion: number;
  totalQuestions: number;
}

export function QuizProgress({ progress, currentQuestion, totalQuestions }: QuizProgressProps) {
  // Don't show question number for contact form (question 8, index 7)
  const isContactForm = currentQuestion === 7;
  const displayQuestionNumber = isContactForm ? null : `Question ${currentQuestion + 1} of ${totalQuestions - 1}`;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        {displayQuestionNumber && (
          <span className="text-sm font-medium text-revaya-medium-gray">
            {displayQuestionNumber}
          </span>
        )}
        {!displayQuestionNumber && <span />}
        <span className="text-sm font-medium text-revaya-medium-gray">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-2 bg-revaya-light-gray rounded-full overflow-hidden">
        <div
          className="h-full bg-revaya-teal transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
