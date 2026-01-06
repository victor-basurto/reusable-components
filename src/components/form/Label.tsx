import { cn } from "@/lib/utils";
import React from "react";

export const Label = ({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </label>
);
