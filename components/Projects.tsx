"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";

const projects = [
  {
    number: "01",
    title: "LogLens",
    slug: "log-analyzer",
    wip: false,
    tagline: "Browser-native log intelligence",
    description:
      "Analyze log files entirely client-side for full privacy. Supports JSON, Apache, Nginx & plain-text with visual dashboards and multi-provider AI chat.",
    tags: ["React 19", "TypeScript", "Vite", "Zustand", "Recharts", "Anthropic SDK"],
    github: "https://github.com/rkeerthick/log-analyzer",
    live: "https://log-analyzer-three-lac.vercel.app/",
    highlight: "No data leaves the browser",
    accent: "#22d3ee",
    gradientA: "#0c4a6e",
    gradientB: "#0f766e",
    col: "md:col-span-1",
    horizontal: false,
  },
  {
    number: "02",
    title: "Shop Editor",
    slug: "shop-editor",
    wip: false,
    tagline: "Open-source e-commerce, your way",
    description:
      "A free, self-hostable Shopify alternative with a drag-and-drop storefront builder, product & order management, Stripe payments, and Cloudinary uploads — no subscription fees.",
    tags: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js", "Cloudinary", "dnd-kit"],
    github: "https://github.com/rkeerthick/shop-editor",
    live: "https://shop-editor.vercel.app",
    highlight: "MIT licensed · fully self-hostable",
    accent: "#a78bfa",
    gradientA: "#2e1065",
    gradientB: "#9d174d",
    col: "md:col-span-2",
    horizontal: false,
  },
  {
    number: "03",
    title: "AI Code Review",
    slug: "ai-code-review",
    wip: true,
    tagline: "Automated code review powered by AI",
    description:
      "Surfaces issues, suggests improvements, and enforces best practices automatically. TypeScript monorepo with CI/CD via GitHub Actions, deployed across Vercel and Fly.io.",
    tags: ["TypeScript", "Turborepo", "pnpm", "Vercel", "Fly.io", "GitHub Actions"],
    github: "https://github.com/rkeerthick/ai-code-review",
    live: null,
    highlight: "Monorepo architecture with CI/CD via GitHub Actions",
    accent: "#34d399",
    gradientA: "#022c22",
    gradientB: "#0c4a6e",
    col: "md:col-span-3",
    horizontal: true,
  },
];


function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Projects
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
            Things I've built
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              className={`card-shimmer relative overflow-hidden rounded-2xl border ${project.col} flex flex-col`}
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 z-10"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-xs font-mono" style={{ color: project.accent }}>{project.number}</span>
                      <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                        {project.title}
                      </h3>
                      {project.wip && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                          style={{ background: "rgba(251,191,36,0.12)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.25)" }}>
                          In progress
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium" style={{ color: project.accent }}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {project.highlight && (
                  <p className="text-xs font-mono px-2.5 py-1.5 rounded-lg mb-4 w-fit"
                    style={{ color: project.accent, background: `${project.accent}15`, border: `1px solid ${project.accent}25` }}>
                    ✦ {project.highlight}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ color: "var(--text-secondary)", background: "var(--background)", border: "1px solid var(--border)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                    style={{ color: "var(--text-secondary)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <GitHubIcon /> GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-85"
                      style={{ color: "#000", background: project.accent }}>
                      <ExternalIcon /> Live demo
                    </a>
                  )}
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute bottom-3 right-4 text-7xl font-black select-none pointer-events-none"
                style={{ color: `${project.accent}08`, lineHeight: 1 }}>
                {project.number}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
