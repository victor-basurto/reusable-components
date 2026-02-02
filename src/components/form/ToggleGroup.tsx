// reusable-components\src\components\form\ToggleGroup.tsx
import React from "react";
import { ToggleGroupProps } from "@/types/form";

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  options,
  value,
  onChange,
  label,
  className = "",
  disabled = false,
}) => {
  const handleToggle = (optionValue: string) => {
    if (disabled) return;
    let newValue: string[];
    if (value.includes(optionValue)) {
      newValue = value.filter((v) => v !== optionValue);
    } else {
      newValue = [...value, optionValue];
    }
    onChange(newValue);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="text-sm font-medium text-gray-700 mb-1">{label}</span>
      )}
      <div className="flex gap-2 flex-wrap">
        {options.map((option) => {
          const isChecked = value.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              disabled={disabled || option.disabled}
              onClick={() => handleToggle(option.value)}
              className={`px-4 py-2 rounded transition-colors border
                ${isChecked ? "bg-primary text-white" : "bg-white text-gray-700 border-gray-300"}
                ${disabled || option.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"}
              `}
              aria-pressed={isChecked}
              aria-label={option.label}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleGroup;
