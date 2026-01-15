import { cn } from "@/lib/utils";
import { SwitchProps } from "@/types/form";
import React from "react";
import { Button } from "../ui/Button";
import { Label } from "./Label";

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  label,
  disabled,
  className,
  id,
}) => {
  const generatedId = React.useId();
  const switchId = id || generatedId;
  return (
    <div className={cn(" flex items-center gap-3", className)}>
      <Button
        id={switchId}
        type="button"
        role="switch"
        variant="ghost"
        size="none"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        // override button style to create the switch track
        className={cn(
          " relative h-2 w-10 shrink-0 cursor-pointer rounded-full transition-colors duration-200 border-2 border-transparent bg-gray-200",
          checked
            ? " bg-primary hover:opacity-90"
            : " bg-border hover:bg-border/80",
          " focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        )}
      >
        <span
          className={cn(
            " pointer-events-none block h-3 w-3 rounded-full bg-white shadow-sm transition-transform duration-200",
            checked ? " translate-x-5" : " -translate-x-4",
          )}
        />
      </Button>
      {label && (
        <Label
          htmlFor={switchId} // Browser handles the click link to the button
          className={cn(disabled && " opacity-50 cursor-not-allowed")}
        >
          {label}
        </Label>
      )}
    </div>
  );
};
