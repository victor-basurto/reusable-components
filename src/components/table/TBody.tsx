import React from "react";
import { cn } from "@/lib/utils";
import { TableProps } from "@/types/ui";

export const TBody: React.FC<TableProps> = ({ children, className }) => {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  );
};
