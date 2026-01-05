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
