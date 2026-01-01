'use client';

interface MultiChoiceQuestionProps {
  question: string;
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

export function MultiChoiceQuestion({
  question,
  options,
  selectedValue,
  onSelect,
}: MultiChoiceQuestionProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-revaya-dark-gray mb-8">
        {question}
      </h2>
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedValue === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-200
                ${
                  isSelected
                    ? 'border-revaya-purple bg-revaya-purple bg-opacity-5'
                    : 'border-revaya-light-gray hover:border-revaya-purple hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center
                    ${isSelected ? 'border-revaya-purple' : 'border-revaya-light-gray'}
                  `}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-revaya-purple" />
                  )}
                </div>
                <span className={`font-medium ${isSelected ? 'text-revaya-purple' : 'text-revaya-dark-gray'}`}>
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
