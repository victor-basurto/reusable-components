"use client";
import { Theme, ThemeContextType } from "@/types";
import { ReactNode, useState } from "react";
import { ThemeContext } from "./theme-context";

// define Providers props since its not shared
interface ThemeContextProviderProps {
  children: ReactNode;
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // by default lets do "dark" theming
  const [theme, setTheme] = useState<Theme>("dark");

  // switch between "dark" and "light" theming
  const handleToggleTheme = () => {
    setTheme((prevTheme: Theme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("current theme: ", theme);
  };

  // create the context
  const ctxValue: ThemeContextType = {
    theme,
    toggleTheme: handleToggleTheme,
  };
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
