import React from "react";
// ================================================
// UI Types
// ================================================
/**
 * Dialog Types
 * */
export interface DialogProps {
  title: string;
  description: React.ReactElement;
  modalActions: React.ReactElement;
}
export interface DialogHandle {
  open: () => void;
}
