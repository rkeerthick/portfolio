"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-mono font-semibold tracking-wider transition-opacity hover:opacity-70"
          style={{ color: "var(--accent)" }}
          aria-label="Back to top"
        >
          KR.
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-1" role="list">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    background: isActive ? "var(--surface)" : "transparent",
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:rkeerthick1@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-85"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Hire me
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="w-5 h-0.5 rounded transition-all duration-200 origin-center"
              style={{
                background: "var(--text-primary)",
                transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="w-5 h-0.5 rounded transition-all duration-200"
              style={{
                background: "var(--text-primary)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-5 h-0.5 rounded transition-all duration-200 origin-center"
              style={{
                background: "var(--text-primary)",
                transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="sm:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{ background: "var(--nav-bg)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:rkeerthick1@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-3 py-3 rounded-lg text-sm font-medium text-center"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
