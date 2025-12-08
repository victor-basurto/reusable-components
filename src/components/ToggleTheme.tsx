"use client";
import { ThemeContext } from "@/store/theme-context";
import { ThemeContextType } from "@/types";
import { useContext, useEffect } from "react";

export default function ToggleTheme() {
  const themeCtx = useContext<ThemeContextType>(ThemeContext);

  // destructure theme context
  const { theme, toggleTheme } = themeCtx;

  /**
   * Use `useEffect` to apply the theme class to the `<body>` element.
   * This runs once after the initial render and again every time 'theme' changes
   * */
  useEffect(() => {
    const body = document.body;
    // remove the old theme classes to prevent conflicts
    body.classList.remove("light-theme", "dark-theme");
    // add new theme based on current state
    body.classList.add(`${theme}-theme`);
  }, [theme]);
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
