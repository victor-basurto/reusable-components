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
/**
 * Icon Types
 * */
export type IconName = "sun" | "moon" | "search" | "user" | "settings" | "home";
export interface IconSelectorProps {
  name: IconName;
  className?: string;
}

/**
 * Button Types
 * */
