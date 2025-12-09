import type { DialogHandle, DialogProps } from "@/types/ui";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Dialog = forwardRef<DialogHandle, DialogProps>(function Dialog(
  { title, description, modalActions },
  ref,
) {
  // dialog placeholder for dialog properties
  const dialog = useRef<HTMLDialogElement>(null);
  // dialog `html` markup
  const dialogRoot = document.getElementById("dialog");
  // add custom/private method
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
    };
  });
  // throw error if there is no dialog present
  if (!dialogRoot) {
    console.error(
      "The portal root element with id `Dialog` was not found in the DOM",
    );
    return null;
  }
  // teletransport the dialog into the root markup
  return createPortal(
    <dialog id="dialog" ref={dialog}>
      <h2>{title}</h2>
      {description}
      <form method="dialog" id="dialog-actions">
        {/* `modalActions` are buttons, we still need to add content here to load form fields */}
        {modalActions}
      </form>
    </dialog>,
    dialogRoot,
  );
});
export default Dialog;
