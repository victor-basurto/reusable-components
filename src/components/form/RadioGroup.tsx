import { cn } from "@/lib/utils";
import { RadioGroupProps } from "@/types/form";
import { Label } from "./Label";
import React from "react";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label ?? <Label className="text-base mb-1">{label}</Label>}
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          return (
            <div key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={value === option.value}
                className={cn(
                  "h-4 w-4 border-border text-primary focus:ring-primary accent-primary",
                  "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                )}
                onChange={() => onChange(option.value)}
              />
              <Label htmlFor={id} className="font-normal cursor-pointer">
                {option.label}
              </Label>
            </div>
          );
        })}
      </div>
      {error && <p className="text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
};
