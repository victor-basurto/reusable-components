"use client";
import { useToast } from "@/store/toast-context-provider";
import type { DialogHandle, DialogProps } from "@/types/ui";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

const Dialog = forwardRef<DialogHandle, DialogProps>(function Dialog(
  { title, description, modalActions },
  ref,
) {
  const { addToast } = useToast();
  const dialog = useRef<HTMLDialogElement>(null);
  // create a state to store the portal target
  const [mounted, setMounted] = useState(false);
  // set mounted to true once the component is in the browser
  useEffect(() => {
    setMounted(true);
  }, []);
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current?.showModal();
    },
  }));

  if (!mounted) return null;
  const dialogRoot = document.getElementById("modal");

  if (!dialogRoot) {
    addToast(
      "The portal root element with id `dialog` was not found",
      "warning",
    );
    return null;
  }

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm
        fixed inset-0 m-auto
        w-full max-w-md rounded-xl border border-border 
        bg-background p-6 shadow-2xl
        open:animate-in open:zoom-in-95 open:fade-in duration-200"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
          {title}
        </h2>
        <div className="text-sm text-foreground/80 leading-relaxed">
          {description}
        </div>
        <form
          method="dialog"
          id="dialog-actions"
          className="flex justify-end gap-3 mt-4"
        >
          {modalActions}
        </form>
      </div>
    </dialog>,
    dialogRoot,
  );
});

export default Dialog;
