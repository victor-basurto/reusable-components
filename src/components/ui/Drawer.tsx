"use client";
import { DrawerProps } from "@/types/ui";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { Icon } from "../abstract/Icon";
export const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  placement = "right",
}: DrawerProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      // prevents scrolling background
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!mounted || !isOpen) return null;
  const portalRoot = document.getElementById("modal");
  if (!portalRoot) return null;
  const placementClasses = {
    right:
      "right-0 inset-y-0 h-full w-full max-w-sm border-l animate-in slide-in-from-right",
    left: "left-0 inset-y-0 h-full w-full max-w-sm border-r animate-in slide-in-from-left",
  };
  return createPortal(
    <div className="fixed inset-0 z-[200] flex">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      {/* Drawer panel */}
      <div
        className={`relative bg-background shadow-2xl duration-300 border-border p-6 flex flex-col ${placementClasses[placement]}`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="circleclose" className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>,
    portalRoot,
  );
};
