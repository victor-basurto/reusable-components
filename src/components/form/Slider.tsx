// reusable-components\src\components\form\Slider.tsx
import React from "react";
import { SliderProps } from "@/types/form";

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  disabled = false,
  className = "",
  id,
}) => {
  const generatedId = React.useId();
  const sliderId = id || generatedId;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={sliderId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        <input
          type="range"
          id={sliderId}
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`
            w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
            dark:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        />
        <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[2rem] text-center">
          {value}
        </span>
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Slider;
