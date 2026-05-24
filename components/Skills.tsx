"use client";

import { Reveal, StaggerReveal, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SASS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux Toolkit", "TanStack Query", "MobX", "Tailwind CSS", "D3.js", "shadcn/ui", "Express"],
  },
  {
    category: "Architecture & Scale",
    skills: ["Microfrontends", "SSR / SSG", "Module Federation", "Code-Splitting", "Caching Strategy"],
  },
  {
    category: "Design Systems & Accessibility",
    skills: ["Meridian UI", "Component Library Architecture", "WCAG 2.1 AA", "ARIA", "Semantic HTML"],
  },
  {
    category: "Performance",
    skills: ["Core Web Vitals", "LCP / TTI / CLS / INP", "Lighthouse", "Bundle Optimization", "Lazy Loading"],
  },
  {
    category: "Testing & Code Quality",
    skills: ["Jest", "Vitest", "React Testing Library", "ESLint", "Prettier", "Code Reviews"],
  },
  {
    category: "Analytics & Integrations",
    skills: ["Mixpanel", "Google Analytics", "Meta Pixel", "A/B Testing", "Razorpay", "Pinelabs", "Google OAuth 2.0", "GitHub REST API"],
  },
  {
    category: "Cloud & Tooling",
    skills: ["CI/CD Pipelines", "Firebase", "Railway", "Vite", "Node.js", "Git", "Jira", "Postman", "VS Code"],
  },
];

const stats = [
  { value: "15+", label: "Features shipped" },
  { value: "5k+", label: "Active sellers" },
  { value: "−20%", label: "LCP improvement" },
  { value: "30%", label: "Faster dev velocity" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            Skills
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}>
            What I work with
          </h2>
        </Reveal>

        <StaggerReveal className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <div
                className="rounded-2xl border p-6 h-full"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <p className="text-xs font-mono tracking-wider uppercase mb-4"
                  style={{ color: "var(--accent)" }}>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{
                        color: "var(--text-primary)",
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Impact numbers */}
        <Reveal delay={0.1}>
          <div
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border p-6"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center text-center gap-1"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-2xl sm:text-3xl font-bold tabular-nums"
                  style={{ color: "var(--accent)" }}>
                  {value}
                </span>
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
