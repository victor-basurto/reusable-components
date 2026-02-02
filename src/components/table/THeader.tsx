import { cn } from "@/lib/utils";
import { TableProps } from "@/types/ui";
import React from "react";

export const THeader: React.FC<TableProps> = ({ children, className }) => {
  return (
    <thead className={cn("[&_tr]:border-b bg-background/50", className)}>
      {children}
    </thead>
  );
};
