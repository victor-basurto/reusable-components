import { TooltipPositionClasses, TooltipProps } from "@/types/ui";
import { forwardRef, useState } from "react";

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = "top", children, delay = 0 }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    // position mapping
    const positionClasses: TooltipPositionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };
    // arrow mapping
    const arrowClasses: TooltipPositionClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-800 border-x-transparent border-b-transparent",
      bottom:
        "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 border-x-transparent border-t-transparent",
      left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-800 border-y-transparent border-r-transparent",
      right:
        "right-full top-1/2 -translate-y-1/2 border-r-neutral-800 border-y-transparent border-l-transparent",
    };

    return (
      <div
        ref={ref}
        className="relative flex items-center w-fit"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <div
            role="tooltip"
            className={`absolute z-50 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-white shadow-md animate-in fade-in zoom-in duration-150 ${positionClasses[position]}`}
          >
            {content}
            {/* the arrow */}
            <div className={`absolute border-4 ${arrowClasses[position]}`} />
          </div>
        )}
      </div>
    );
  },
);
Tooltip.displayName = "Tooltip";
export { Tooltip };
