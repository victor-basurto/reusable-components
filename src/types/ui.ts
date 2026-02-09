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
  | "check"
  | "chevrondown"
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
/**
 * Alert Types
 * */
export type AlertOption = "info" | "success" | "warning" | "error";
export interface AlertProps {
  variant?: AlertOption;
  title?: string;
  children: React.ReactNode;
  className?: string;
}
/**
 * Alert Dialog Types
 * */
export type AlertDialogVariant = "default" | "danger";
export interface AlertDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: AlertDialogVariant;
}
// ================================================
// UI Types
// ================================================
/**
 * Table Types
 * */
export interface TableProps {
  children: React.ReactNode;
  className?: string;
}
export interface TRowProps extends TableProps {
  selected?: boolean;
}
export type SortDirection = "asc" | "desc" | null;
export interface THeadProps extends TableProps {
  onClick?: () => void;
  sortDir?: SortDirection;
}

/**
 * DataTable Types
 * */
export interface DataTableColumn<T = object> {
  key: keyof T | string;
  label: React.ReactNode;
  sortable?: boolean;
  className?: string;
  headerClassName?: string;
  render?: (row: T) => React.ReactNode;
}

export interface DataTableSortConfig {
  key: string;
  dir: SortDirection;
}

export interface DataTableProps<T = object> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey: keyof T | ((row: T) => string);
  sortConfig?: DataTableSortConfig;
  onSort?: (key: string, dir: SortDirection) => void;
  selectable?: boolean;
  selectedIds?: Set<string>;
  onSelectionChange?: (ids: Set<string>) => void;
  className?: string;
  tableClassName?: string;
  emptyMessage?: React.ReactNode;
}

/**
 * Separator Types
 * */
export type SeparatorVariant = "horizontal" | "vertical";
export interface SeparatorProps {
  orientation?: SeparatorVariant;
  className?: string;
  label?: string;
  decorative?: boolean;
}
