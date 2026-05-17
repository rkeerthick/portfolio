"use client";

import { useEffect, useState } from "react";

const THEMES = {
  dark: {
    "--background": "#0d0d0f",
    "--surface": "#16161a",
    "--border": "#2a2a35",
    "--text-primary": "#f0f0f5",
    "--text-secondary": "#9090a8",
    "--accent": "#7c6af7",
    "--accent-glow": "rgba(124, 106, 247, 0.15)",
    "--nav-bg": "rgba(13, 13, 15, 0.85)",
  },
  light: {
    "--background": "#f5f5f7",
    "--surface": "#ffffff",
    "--border": "#e2e2ea",
    "--text-primary": "#111118",
    "--text-secondary": "#636380",
    "--accent": "#6c5ff7",
    "--accent-glow": "rgba(108, 95, 247, 0.1)",
    "--nav-bg": "rgba(245, 245, 247, 0.85)",
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
