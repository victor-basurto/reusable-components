import React from "react";
import { cn } from "@/lib/utils";
import { TableProps } from "@/types/table";

export const TCell: React.FC<TableProps> = ({ children, className }) => {
  return (
    <td className={cn("p-4 align-middle text-foreground", className)}>
      {children}
    </td>
  );
};
