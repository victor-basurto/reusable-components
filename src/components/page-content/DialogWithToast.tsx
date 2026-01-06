import { DialogHandle } from "@/types/ui";
import { useRef } from "react";
import { Button } from "../ui/Button";
import Dialog from "../ui/Dialog";
import { useToast } from "@/store/toast-context-provider";

export default function DialogWithToast() {
  const { addToast } = useToast();
  const dialog = useRef<DialogHandle>(null);
  const handleDialogOpen = () => {
    dialog.current?.open();
  };
  const handleConfirmAction = () => {
    console.log("Action Confirmed");
    // trigger the toast for user feedback
    addToast("Changes successfully published!", "warning");
  };

  const dialogActions = (
    <Button
      variant="danger"
      className="flex items-center gap-2 transition-all duration-300"
      size="sm"
      onClick={handleConfirmAction}
    >
      close
    </Button>
  );
  const dialogDesc = (
    <p>A toast will show up after the dialog has been closed</p>
  );
  return (
    <>
      <Dialog
        ref={dialog}
        title="Dialog with Toast"
        description={dialogDesc}
        modalActions={dialogActions}
      />
      <Button
        variant="outline"
        size="md"
        onClick={handleDialogOpen}
        className="flex items-center gap-2 transition-all duration-300"
      >
        open dialog w/ Toast
      </Button>
    </>
  );
}
