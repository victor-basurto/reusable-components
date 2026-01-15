// reusable-components\src\components\form\Toggle.tsx
import React from "react";
import { ToggleProps } from "@/types/form";
/**
 * Toggle component - a styled switch for boolean values.
 * Mimics the API of Checkbox/Switch, styled with Tailwind.
 */
export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  id,
}) => {
  const generatedId = React.useId();
  const toggleId = id || generatedId;

  return (
    <label
      htmlFor={toggleId}
      className={`flex items-center cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <div className="relative">
        <input
          id={toggleId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`block w-10 h-6 rounded-full transition-colors ${
            checked ? "bg-primary" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
      {label && <span className="ml-3 text-sm text-gray-700">{label}</span>}
    </label>
  );
};

export default Toggle;
