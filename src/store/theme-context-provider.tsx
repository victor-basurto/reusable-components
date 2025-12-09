"use client";
import { ReactNode, useEffect, useState, useContext } from "react";
import { DEFAULT_THEME, Theme, ThemeContextType } from "@/types";
import { ThemeContext } from "./theme-context";

// use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}

// provider props
interface ThemeContextProviderProps {
  children: ReactNode;
}

// Helper function to get initial theme (runs synchronously)
function getInitialTheme(): Theme {
  // only run on client side
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const storedTheme = localStorage.getItem("theme") as Theme | null;

  if (storedTheme) {
    return storedTheme;
  }

  // check OS preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // initialize state with a function that only runs once
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  // apply theme to DOM (side effect only, no state updates)
  useEffect(() => {
    // apply the current theme class to the DOM
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]); // re-run whenever theme changes

  // toggle theme
  const handleToggleTheme = () => {
    console.log("toggletheme nowww..... ");
    setTheme((prevTheme: Theme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      // persist to localStorage
      localStorage.setItem("theme", newTheme);

      // NOTE: DOM update will happen in the effect above after state updates
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newTheme);

      return newTheme;
    });
  };

  // Create the context value
  const ctxValue: ThemeContextType = {
    theme,
    toggleTheme: handleToggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
