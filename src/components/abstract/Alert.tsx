import { cn } from "@/lib/utils";
import { AlertOption, AlertProps, IconName } from "@/types/ui";
import React from "react";
import { Icon } from "./Icon";

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  className,
}) => {
  const variants: Record<AlertOption, string> = {
    info: "bg-primary/10 text-primary border-primary/20",
    success: "bg-green-500/10 text-green-600 border-green-500/20",
    warning: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
    error: "bg-red-500/10 text-red-600 border-red-500/20",
  };
  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg border",
        variants[variant],
        className,
      )}
      role="alert"
    >
      <Icon name={variant as IconName} className="w-5 h-5 shrink-0" />
      <div>
        {title && (
          <h5 className={"font-semibold leading-none mb-1"}>{title}</h5>
        )}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
};
