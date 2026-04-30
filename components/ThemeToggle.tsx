"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initial =
      (document.documentElement.dataset.theme as Theme) || "light";
    setTheme(initial);
  }, []);

  const toggle = () => {
    if (!theme) return;
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("keyfill-theme", next);
    } catch {
      // localStorage unavailable (privacy mode) — ignore
    }
    setTheme(next);
  };

  // During SSR / before hydration, default label to "Dark" so the layout doesn't shift.
  // suppressHydrationWarning keeps React from complaining when the actual theme is dark.
  const label = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      type="button"
      onClick={toggle}
      suppressHydrationWarning
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink border border-hairline px-3 py-[6px] cursor-pointer transition-colors hover:bg-onion focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      {label}
    </button>
  );
}
