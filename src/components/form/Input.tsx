import { InputProps } from "@/types/form";
import React, { forwardRef } from "react";
import { Label } from "./Label";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      prefixIcon,
      suffixIcon,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || React.useId();
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <Label htmlFor={inputId}>
            {label}
            {props.required && "*"}
          </Label>
        )}
        <div className="relative flex items-center">
          {prefixIcon && (
            <div className="absolute left-3 text-foreground/50 pointer-events-none">
              {prefixIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm 
              ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
              placeholder:text-foreground/40 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 
              disabled:cursor-not-allowed disabled:opacity-50
              ${prefixIcon ? "pl-10" : ""}
              ${suffixIcon ? "pr-10" : ""}
              ${error ? "border-red-500 focus-visible:ring-red-500" : ""}
              ${className}`}
            {...props}
          />
          {suffixIcon && (
            <div className="absolute right-3 text-foreground/50 pointer-events-none">
              {suffixIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-xs font-medium !text-red-500 animate-in fade-in slide-in-form-top-1">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-foreground/50">{helperText}</p>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";
