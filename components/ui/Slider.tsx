'use client';

import { useState, useEffect } from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  prefix?: string;
  suffix?: string;
  formatValue?: (value: number) => string;
}

export function Slider({
  min,
  max,
  value,
  onChange,
  step = 1,
  prefix = '',
  suffix = '',
  formatValue,
}: SliderProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setDisplayValue(newValue);
    onChange(newValue);
  };

  const formattedValue = formatValue ? formatValue(displayValue) : `${prefix}${displayValue.toLocaleString()}${suffix}`;

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <span className="text-3xl font-bold text-revaya-purple">{formattedValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={displayValue}
        onChange={handleChange}
        step={step}
        className="w-full h-2 bg-revaya-light-gray rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-6
          [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-revaya-teal
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:transition-all
          [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:w-6
          [&::-moz-range-thumb]:h-6
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-revaya-teal
          [&::-moz-range-thumb]:cursor-pointer
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:shadow-md
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:hover:scale-110"
      />
      <div className="flex justify-between mt-2 text-sm text-revaya-medium-gray">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}
