// import React from "react";
// ================================================
// Theme Context Types
// ================================================
/**
 * Possible values for the application theme
 * */
export type Theme = "light" | "dark";
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
export const DEFAULT_THEME: Theme = "light";
