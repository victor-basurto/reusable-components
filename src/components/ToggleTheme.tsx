"use client";
import { useTheme } from "@/store/theme-context-provider";
import { useState, useEffect } from "react";
import { Icon } from "./abstract/Icon";
import { Button } from "./ui/Button";

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
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="flex items-center gap-2 transition-all duration-300"
      >
        {theme === "light" ? (
          <>
            <Icon name="moon" className="inline w-4 h-4 mr-1" /> Dark
          </>
        ) : (
          <>
            <Icon name="sun" className="inline w-4 h-4 mr-1" /> Light
          </>
        )}
      </Button>
    );
  }

  // after hydration, show the actual theme-dependent content
  return (
    // TODO: replace with button component to proper styling
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2 transition-all duration-300"
    >
      {theme === "light" ? (
        <>
          <Icon name="moon" className="inline w-4 h-4 mr-1" /> Dark
        </>
      ) : (
        <>
          <Icon name="sun" className="inline w-4 h-4 mr-1" /> Light
        </>
      )}
    </Button>
  );
}
