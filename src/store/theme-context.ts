"use client";
import { createContext } from "react";
import type { ThemeContextType, Theme } from "@/types";

// create the default context
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark" as Theme,
  toggleTheme: () => {},
});
