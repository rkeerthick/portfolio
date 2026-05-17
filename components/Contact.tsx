"use client";

import { Reveal, StaggerReveal, StaggerItem } from "@/components/motion";

const links = [
  {
    label: "Email",
    value: "rkeerthick1@gmail.com",
    href: "mailto:rkeerthick1@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rkeerthick",
    href: "https://linkedin.com/in/rkeerthick",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/rkeerthick",
    href: "https://github.com/rkeerthick",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 97158 57535",
    href: "tel:+919715857535",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="h-px mb-12" style={{ background: "var(--border)" }} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <p className="text-sm font-mono tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}>
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
                style={{ color: "var(--text-primary)" }}>
                Let's build something great together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I'm currently open to new opportunities. Whether it's a full-time role,
                a freelance project, or just a chat about frontend — my inbox is always open.
              </p>
            </Reveal>
          </div>

          {/* Right — links */}
          <StaggerReveal className="flex flex-col gap-4">
            {links.map(({ label, value, href, icon }) => (
              <StaggerItem key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                    style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                  >
                    {icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-mono uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--text-secondary)" }}>
                      {label}
                    </span>
                    <span className="text-sm font-medium truncate group-hover:underline"
                      style={{ color: "var(--text-primary)" }}>
                      {value}
                    </span>
                  </div>
                  <svg
                    className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                  >
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        {/* Bottom bar */}
        <Reveal delay={0.1}>
          <div
            className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            <span>© {new Date().getFullYear()} Keerthick Ravikumar. All rights reserved.</span>
            <span className="font-mono">Built with Next.js · Tailwind CSS · ♥</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
