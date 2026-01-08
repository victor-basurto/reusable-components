"use client";

import { cn } from "@/lib/utils";
import { SelectProps } from "@/types/form";
import { useEffect, useId, useRef, useState } from "react";
import { Label } from "./Label";
import { Button } from "../ui/Button";
import { Icon } from "../abstract/Icon";

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  helperText,
  className,
  disabled,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectId = useId();
  const selectedOption = options.find((opt) => opt.value === value);

  // close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      className={cn("flex flex-col gap-1.5 w-full", className)}
      ref={containerRef}
    >
      {label && <Label htmlFor={selectId}>{label}</Label>}
      <div className="relative">
        <Button
          id={selectId}
          type="button"
          variant="outline"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full justify-between font-normal",
            !selectedOption && "text-foreground/50",
            error && "border-red-500 focus-visible:ring-red-500",
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <Icon
            name="chevrondown"
            className={cn(
              "ml-2 h-4 w-4 opacity-50 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </Button>
        {isOpen && (
          <div className="absolute z-50 mt-2 min-w-full rounded-md border border-border bg-background p-1 shadow-lg animate-in fade-in zoom-in-95">
            <ul className="max-h-60 overflow-auto py-1">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "relative flex w-full cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none transition-colors",
                    "hover:bg-primary/10 hover:text-primary",
                    value === option.value &&
                      "bg-primary/10 text-primary font-medium",
                  )}
                >
                  {option.label}
                  {value === option.value && (
                    <Icon name="check" className="ml-auto h-4 w-4" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error ? (
        <p className="text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-foreground/50">{helperText}</p>
      ) : null}
    </div>
  );
};
