import React, { ButtonHTMLAttributes } from "react";
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
export type IconName =
  | "sun"
  | "moon"
  | "search"
  | "user"
  | "settings"
  | "home"
  | "close"
  | "minus"
  | "circleclose"
  | "circlecheck"
  | "trianglealert"
  | "info"
  | "loader";
export interface IconSelectorProps {
  name: IconName;
  className?: string;
}

/**
 * Button Types
 * */
// button variants
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "ghost" | "outline" | "danger";
export type ButtonVariantStyles = Record<ButtonVariant, string>;
export type ButtonSizeStyles = Record<ButtonSize, string>;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
}
/**
 * Tooltip Types
 * */
export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipPositionClasses = Record<TooltipPosition, string>;
export interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  children: React.ReactNode;
  delay?: number;
}
/**
 * Popover Types
 * */
export interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
/**
 * Toast Types
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
