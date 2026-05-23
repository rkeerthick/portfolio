"use client";

import { useEffect, useState } from "react";

const THEMES = {
  dark: {
    "--background": "#0e0b09",
    "--surface": "#1a1512",
    "--border": "#2e2520",
    "--text-primary": "#f0ebe8",
    "--text-secondary": "#9a8880",
    "--accent": "#f97316",
    "--accent-glow": "rgba(249, 115, 22, 0.15)",
    "--nav-bg": "rgba(14, 11, 9, 0.85)",
  },
  light: {
    "--background": "#faf6f3",
    "--surface": "#ffffff",
    "--border": "#e8ddd8",
    "--text-primary": "#1a1008",
    "--text-secondary": "#7a6560",
    "--accent": "#ea6c0a",
    "--accent-glow": "rgba(234, 108, 10, 0.1)",
    "--nav-bg": "rgba(250, 246, 243, 0.85)",
  },
} as const;

function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement;
  Object.entries(THEMES[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initial = saved ?? preferred;
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-8 h-8 flex items-center justify-center rounded-lg border transition-all hover:opacity-75"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
        color: "var(--text-secondary)",
      }}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
