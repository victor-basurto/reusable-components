import React from "react";
import { cn } from "@/lib/utils";
import { TRowProps } from "@/types/ui";

export const TRow: React.FC<TRowProps> = ({
  children,
  className,
  selected,
}) => {
  return (
    <tr
      className={cn(
        "border-b border-border transition-colors hover:bg-primary/5 data-[state=selected]:bg-primary/10",
        selected && "bg-primary/5",
        className,
      )}
    >
      {children}
    </tr>
  );
};
