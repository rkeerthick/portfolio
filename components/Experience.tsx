"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";

const experiences = [
  {
    company: "Divum Corporate Service Pvt. Ltd.",
    role: "Application Developer",
    location: "Bengaluru, India",
    period: "Jul 2023 – Present",
    current: true,
    project: "Amazon SmartBiz India",
    projectPeriod: "Dec 2023 – Present",
    tags: ["React.js", "Next.js", "Microfrontend", "Meridian UI", "Razorpay", "TypeScript"],
    highlights: [
      "Shipped 15+ production features for Amazon SmartBiz India, supporting 5,000+ active sellers daily",
      "Reduced LCP by 20% and TTI by 1.2s via SSR, dynamic imports, and strategic asset caching",
      "Designed 30+ modular, WCAG 2.1 AA-compliant components in a microfrontend environment",
      "Built a reusable component library cutting new-feature development time by 30%",
      "Integrated Razorpay gateway, increasing checkout conversion by 15%; mentored 5 peers",
    ],
  },
];

const education = {
  institution: "Karpagam College of Engineering",
  degree: "B.Tech in Information Technology",
  period: "2020 – 2024",
  grade: "CGPA: 8.75",
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Experience
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-light mb-12" style={{ color: "var(--text-primary)" }}>
            Where I've worked
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px" style={{ background: "var(--border)" }} />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 z-10"
                  style={{ background: "var(--background)", borderColor: "var(--accent)" }} />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                      {exp.company}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {exp.role} · {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {exp.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)" }}>
                        Current
                      </span>
                    )}
                    <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Featured project callout */}
                {exp.project && (
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <span style={{ color: "var(--text-secondary)" }}>Featured project:</span>
                    <span className="font-medium" style={{ color: "var(--accent)" }}>{exp.project}</span>
                    <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>({exp.projectPeriod})</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ color: "var(--text-secondary)", background: "var(--surface)", border: "1px solid var(--border)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education node */}
            <motion.div
              className="relative pl-10"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            >
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 z-10"
                style={{ background: "var(--background)", borderColor: "var(--border)" }} />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                    {education.institution}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {education.degree} · {education.grade}
                  </p>
                </div>
                <span className="text-xs font-mono shrink-0" style={{ color: "var(--text-secondary)" }}>
                  {education.period}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
