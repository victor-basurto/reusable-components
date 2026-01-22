import { cn } from "@/lib/utils";
import { SeparatorProps } from "@/types/ui";
import React from "react";

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  decorative = true,
  label,
  className,
}) => {
  // if its vertical, it wont support labels
  if (orientation === "vertical") {
    return (
      <div
        role={decorative ? "none" : "separator"}
        aria-orientation="vertical"
        className={cn("shrink-0 bg-border w-[1px] h-full", className)}
      />
    );
  }
  // horizontal with label
  if (label) {
    return (
      <div
        className={cn("relative flex items-center w-full my-4", className)}
        role={decorative ? "none" : "separator"}
      >
        <div className="flex-grow border-t border-border" />
        <span className="flex-shrink mx-4 text-[10px] font-bold tracking-widest text-foreground/50 uppercase select-none">
          {label}
        </span>
        <div className="flex-grow border-t border-border" />
      </div>
    );
  }
  // default horizontal separator
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation="horizontal"
      className={cn(
        "shrink-0 bg-border h-[1px] w-full my-4 border-border border-t",
        className,
      )}
    />
  );
};
