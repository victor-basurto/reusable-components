import { cn } from "@/lib/utils";
import { CheckboxProps } from "@/types/form";
import React, { forwardRef, useEffect, useRef } from "react";
import { Label } from "./Label";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, helperText, error, indeterminate, className, id, ...props },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const combinedRef =
      (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    useEffect(() => {
      if (combinedRef.current) {
        combinedRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate, combinedRef]);
    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id={checkboxId}
            ref={combinedRef}
            className={cn(
              " h-4 w-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-background",
              " accent-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
              error && " border-red-500",
              className,
            )}
            {...props}
          />
          {label && (
            <Label htmlFor={checkboxId} className={error && " text-red-500"}>
              {label}
            </Label>
          )}
        </div>
        {error ? (
          <p className=" text-xs font-medium !text-red-500 animate-in fade-in slide-in-form-top-1">
            {error}
          </p>
        ) : helperText ? (
          <p className=" text-xs text-foreground/50">{helperText}</p>
        ) : null}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
