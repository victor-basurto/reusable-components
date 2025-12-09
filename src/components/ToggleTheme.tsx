"use client";
import { useTheme } from "@/store/theme-context-provider";
import { useState, useEffect } from "react";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // wait until after client-side hydration to show theme-dependent content
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // during SSR and initial hydration, render a placeholder that matches
  // what the server would render (neutral content)
  if (!mounted) {
    return (
      <button className="theme-btn" onClick={toggleTheme}>
        Theme
      </button>
    );
  }

  // after hydration, show the actual theme-dependent content
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
