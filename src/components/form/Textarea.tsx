import { TextareaProps } from "@/types/form";
import React, { forwardRef } from "react";
import { Label } from "./Label";
import { cn } from "@/lib/utils";

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textAreaId = id || generatedId;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <Label htmlFor={textAreaId}>{label}</Label>}
        <textarea
          id={textAreaId}
          ref={ref}
          className={cn(
            "flex min-h-[100px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && " border-red-500",
            className,
          )}
          {...props}
        >
          {error ? (
            <p className="text-xs text-red-500 font-medium">{error}</p>
          ) : helperText ? (
            <p className="text-xs text-foreground/50">{helperText}</p>
          ) : null}
        </textarea>
      </div>
    );
  },
);
TextArea.displayName = "TextArea";
