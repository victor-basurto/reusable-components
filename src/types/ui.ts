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
  | "logout"
  | "loader"
  | "email"
  | "atsign"
  | "mapPinHouse"
  | "building"
  | "binary"
  | "phone"
  | "lock";
export interface IconSelectorProps {
  name: IconName;
  className?: string;
}

/**
 * Button Types
 * */
// button variants
export type ButtonSize = "sm" | "md" | "lg" | "none";
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
 * Drawer Types
 * */
export type DrawerPlacement = "left" | "right";
export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  placement?: DrawerPlacement;
}
