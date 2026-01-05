import { PopoverProps } from "@/types/ui";
import { forwardRef, useEffect, useRef, useState } from "react";

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ trigger, children, className = "" }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    // close Popover when clicking outside
    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleOutsideClick);
      }
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen]);
    return (
      <div className="relative inline-block" ref={containerRef}>
        {/* Trigger - inject the onClick handler */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {trigger}
        </div>
        {isOpen && (
          <div
            ref={ref}
            className={`absolute z-50 mt-2 min-w-[200px] rounded-lg border border-border 
              bg-background p-4 shadow-xl animate-in fade-in zoom-in duration-200
              origin-top-right right-0
              ${className}`}
            role="dialog"
          >
            {/* Optional Arrow */}
            <div className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 border-l border-t border-border bg-background" />

            <div className="relative z-10 text-foreground">{children}</div>
          </div>
        )}
      </div>
    );
  },
);
Popover.displayName = "Popover";
export { Popover };
