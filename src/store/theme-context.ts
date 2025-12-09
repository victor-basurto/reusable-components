"use client";
import { createContext } from "react";
import type { ThemeContextType, Theme } from "@/types/provider";

// create the default context
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light" as Theme,
  toggleTheme: () => {},
});
