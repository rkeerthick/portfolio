"use client";

import { Reveal, StaggerReveal, StaggerItem } from "@/components/motion";

const projects = [
  {
    title: "LogLens",
    slug: "log-analyzer",
    wip: false,
    description:
      "A browser-based log analysis tool that processes files entirely client-side for privacy. Supports JSON, Apache, Nginx, and plain-text logs with visual dashboards and an AI-powered chat interface (Claude, Gemini, Grok, Ollama).",
    tags: ["React 19", "TypeScript", "Vite", "Zustand", "Recharts", "Tailwind CSS", "Anthropic SDK"],
    github: "https://github.com/rkeerthick/log-analyzer",
    live: "https://log-analyzer-three-lac.vercel.app/",
    highlight: "Multi-provider AI chat — no data leaves the browser",
  },
  {
    title: "Shop Editor",
    slug: "shop-editor",
    wip: false,
    description:
      "A free, self-hostable e-commerce platform inspired by Shopify. Drag-and-drop storefront builder, product & order management, Stripe payments, and Cloudinary image uploads — no subscription fees.",
    tags: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js", "Cloudinary", "Zustand", "dnd-kit", "shadcn/ui"],
    github: "https://github.com/rkeerthick/shop-editor",
    live: "https://shop-editor.vercel.app",
    highlight: "Open-source Shopify alternative — fully self-hostable, MIT licensed",
  },
  {
    title: "AI Code Review",
    slug: "ai-code-review",
    wip: true,
    description:
      "An AI-powered code review tool that surfaces issues, suggests improvements, and enforces best practices automatically. Built as a TypeScript monorepo deployed across Vercel and Fly.io.",
    tags: ["TypeScript", "Turborepo", "pnpm", "Vercel", "Fly.io", "GitHub Actions"],
    github: "https://github.com/rkeerthick/ai-code-review",
    live: null,
    highlight: "Monorepo architecture with CI/CD via GitHub Actions",
  },
];

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            Projects
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}>
            Things I've built
          </h2>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <article
                className="group relative flex flex-col rounded-2xl border p-6 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 0 1px var(--accent), 0 0 24px var(--accent-glow)" }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    {project.wip && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-mono"
                        style={{ background: "rgba(251,191,36,0.12)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.25)" }}
                      >
                        In progress
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 ml-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="transition-colors hover:opacity-70"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <GitHubIcon />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="transition-colors hover:opacity-70"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <ArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {project.highlight && (
                  <p className="text-xs font-mono mb-4 px-2 py-1.5 rounded"
                    style={{ color: "var(--accent)", background: "var(--accent-glow)" }}>
                    ✦ {project.highlight}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t"
                  style={{ borderColor: "var(--border)" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        color: "var(--text-secondary)",
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
