"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";

const projects = [
  {
    number: "01",
    title: "Git History Visualizer",
    description:
      "Interactive web app that transforms git repository history into explorable visualizations — commit DAG with pan/zoom, branch timelines, contributor analytics, file change explorer, and search by author, date, or path.",
    tags: ["React 18", "TypeScript", "Vite", "D3.js", "Zustand", "Node.js", "Express", "simple-git", "shadcn/ui"],
    github: "https://github.com/rkeerthick/git-history-visualizer",
    live: "https://git-history-visualizer-client.vercel.app/",
    wip: false,
  },
  {
    number: "03",
    title: "LogLens",
    description:
      "Browser-based log analysis tool that processes files entirely client-side. Supports JSON, Apache, Nginx & plain-text with visual dashboards and multi-provider AI chat — no data leaves the browser.",
    tags: ["React 19", "TypeScript", "Vite", "Zustand", "Recharts", "Anthropic SDK"],
    github: "https://github.com/rkeerthick/log-analyzer",
    live: "https://log-analyzer-three-lac.vercel.app/",
    wip: false,
  },
  {
    number: "04",
    title: "Shop Editor",
    description:
      "Free, self-hostable e-commerce platform. Drag-and-drop storefront builder, product & order management, Stripe payments, and Cloudinary uploads — no subscription fees, MIT licensed.",
    tags: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js", "Cloudinary", "dnd-kit"],
    github: "https://github.com/rkeerthick/shop-editor",
    live: "https://shop-editor.vercel.app",
    wip: false,
  },
  {
    number: "05",
    title: "AI Code Review",
    description:
      "AI-powered code review tool that surfaces issues, suggests improvements, and enforces best practices. TypeScript monorepo with CI/CD via GitHub Actions, deployed on Vercel and Fly.io.",
    tags: ["TypeScript", "Turborepo", "pnpm", "Vercel", "Fly.io", "GitHub Actions"],
    github: "https://github.com/rkeerthick/ai-code-review",
    live: null,
    wip: true,
  },
];

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

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
          <h2 className="text-3xl sm:text-4xl font-light mb-8" style={{ color: "var(--text-primary)" }}>
            Things I've built
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              className="group py-8 grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              {/* Number */}
              <span className="text-sm font-mono pt-1 hidden md:block" style={{ color: "var(--text-secondary)" }}>
                {project.number}
              </span>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  {project.wip && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>
                      In progress
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ color: "var(--text-secondary)", background: "var(--surface)", border: "1px solid var(--border)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-2 md:pt-1 shrink-0">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all hover:opacity-75"
                  style={{ color: "var(--text-secondary)", borderColor: "var(--border)", background: "var(--surface)" }}>
                  <GitHubIcon /> GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:opacity-75"
                    style={{ color: "#fff", background: "var(--accent)" }}>
                    <ArrowIcon /> Live demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
