import { cn } from "@/lib/utils";
import { ProgressProps } from "@/types/form";

export const Progress = ({ value, className, showValue }: ProgressProps) => {
  const isIndeterminate = value === undefined;
  const safeValue = Math.min(Math.max(value || 0, 0), 100);

  return (
    <div className="block w-full">
      <div
        className={cn(
          " relative h-2 w-full overflow-hidden rounded-full bg-border",
          className,
        )}
        role="progressbar"
      >
        <div
          className={cn(
            " h-full w-full bg-primary transition-transform duration-500",
            isIndeterminate
              ? " animate-progress-indeterminate origin-left"
              : "",
          )}
          style={{
            // translateX(-100%) = 0% progress
            // translateX(0%) = 100% progress
            transform: isIndeterminate
              ? undefined
              : `translateX(-${100 - safeValue}%)`,
          }}
        />
      </div>
      {showValue && !isIndeterminate && (
        <span className="mt-1 block text-right text-xs font-medium text-foreground/60">
          {safeValue}%
        </span>
      )}
    </div>
  );
};
