// import React from "react";
// ================================================
// Theme Context Types
// ================================================
import { IconName } from "./ui";
/**
 * Possible values for the application theme
 * */
export type Theme = "light" | "dark";
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
export const DEFAULT_THEME: Theme = "light";

/**
 * Toast Context Types
 * */
export type ToastType = "success" | "error" | "info" | "warning";
export type ToastBgStyles = Record<ToastType, string>;
export type ToastIconsRecord = Record<ToastType, IconName>;
export interface Toast {
  id: string;
  message: string;
  type?: ToastType;
}
export interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}
