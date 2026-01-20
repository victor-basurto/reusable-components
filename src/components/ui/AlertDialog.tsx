"use client";
import { cn } from "@/lib/utils";
import { AlertDialogProps } from "@/types/ui";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";

export const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  console.log("calling dialog");
  // only render on client to avoid SSR mismatch with Portals
  useEffect(() => {
    setMounted(true);
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isOpen]);
  if (!mounted || !props.isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* backdrop: uses fixed balck opacity regardless of theme */}
      <div
        className="absolute inset-0 bg-black/60 animate-in fade-in duration-200"
        onClick={props.onClose}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-lg p-6 shadow-2xl animate-in zoom-in-95 duration-200 border",
          "bg-background text-foreground border-border",
        )}
      >
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className="mt-3 text-sm opacity-80 leading-relaxed">
          {props.description}
        </p>
        <div className="mt-8 flex jusitfy-end gap-3">
          <Button variant="outline" onClick={props.onClose}>
            {props.cancelLabel || "cancel"}
          </Button>
          <Button
            variant={props.variant === "danger" ? "danger" : "primary"}
            onClick={() => {
              props.onConfirm();
              props.onClose();
            }}
          >
            {props.confirmLabel || "confirm"}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
