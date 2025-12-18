"use client";
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
  const dialogRoot = document.getElementById("dialog");

  if (!dialogRoot) {
    console.error("The portal root element with id `dialog` was not found");
    return null;
  }

  return createPortal(
    <dialog id="dialog-element" ref={dialog} className="your-css-class">
      <h2>{title}</h2>
      {description}
      <form method="dialog" id="dialog-actions">
        {modalActions}
      </form>
    </dialog>,
    dialogRoot,
  );
});

export default Dialog;
