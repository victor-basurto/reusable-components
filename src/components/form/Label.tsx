import { cn } from "@/lib/utils";
import React from "react";

export const Label = ({
  className,
  children,
  htmlFor,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    htmlFor={htmlFor}
    className={cn(
      " text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </label>
);
