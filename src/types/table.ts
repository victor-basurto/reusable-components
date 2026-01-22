import React, { ButtonHTMLAttributes } from "react";
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
 * Separator Types
 * */
export type SeparatorVariant = "horizontal" | "vertical";
export interface SeparatorProps {
  orientation?: SeparatorVariant;
  className?: string;
  label?: string;
  decorative?: boolean;
}
