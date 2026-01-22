import React from "react";
import { cn } from "@/lib/utils";
import { THeadProps } from "@/types/table";

export const THead: React.FC<THeadProps> = ({
  children,
  className,
  onClick,
  sortDir,
}) => {
  return (
    <th
      onClick={onClick}
      className={cn(
        "h-12 px-4 text-left align-middle font-bold text-foreground/70 uppercase tracking-wider text-xs whitespace-nowrap",
        onClick && "cursor-pointer hover:text-primary transition-colors",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortDir === "asc" && <span className="text-primary">↑</span>}
        {sortDir === "desc" && <span className="text-primary">↓</span>}
      </div>
    </th>
  );
};
