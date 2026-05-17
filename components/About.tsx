"use client";

import { Reveal, StaggerReveal, StaggerItem, ScaleItem } from "@/components/motion";

const interests = ["Badminton", "Reading books", "Travelling"];

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "JavaScript", "HTML & CSS", "Accessibility (a11y)", "Web Performance",
];

export default function About() {
  return (
    <section id="about" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            About me
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <div>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ color: "var(--text-primary)" }}>
                Building the web that works for everyone.
              </h2>
            </Reveal>

            <StaggerReveal className="space-y-4 text-base leading-relaxed">
              <StaggerItem>
                <p style={{ color: "var(--text-secondary)" }}>
                  I'm a frontend engineer based in{" "}
                  <span style={{ color: "var(--text-primary)" }}>Bengaluru, India</span>,
                  with 3 years of experience crafting web experiences that are
                  both fast and accessible.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p style={{ color: "var(--text-secondary)" }}>
                  I care deeply about the details — the kind that make an
                  interface feel effortless. That means semantic HTML, meaningful
                  animations, and performance that doesn't apologise.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p style={{ color: "var(--text-secondary)" }}>
                  Away from the screen, you'll find me on a{" "}
                  <span style={{ color: "var(--text-primary)" }}>badminton court</span>,
                  buried in a{" "}
                  <span style={{ color: "var(--text-primary)" }}>good book</span>, or
                  planning the next{" "}
                  <span style={{ color: "var(--text-primary)" }}>trip</span>.
                </p>
              </StaggerItem>
            </StaggerReveal>

            {/* Interests */}
            <StaggerReveal className="flex flex-wrap gap-2 mt-8">
              {interests.map((item) => (
                <ScaleItem key={item}>
                  <span
                    className="px-3 py-1 rounded-full border text-sm"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                      background: "var(--surface)",
                    }}
                  >
                    {item}
                  </span>
                </ScaleItem>
              ))}
            </StaggerReveal>
          </div>

          {/* Right — stack */}
          <Reveal delay={0.1}>
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-mono mb-4" style={{ color: "var(--text-secondary)" }}>
                // tech I work with
              </p>
              <StaggerReveal className="grid grid-cols-2 gap-3">
                {stack.map((tech) => (
                  <StaggerItem key={tech}>
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-primary)" }}>
                      <span style={{ color: "var(--accent)" }}>▹</span>
                      {tech}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>

              <div className="mt-6 pt-6 border-t flex items-center gap-3"
                style={{ borderColor: "var(--border)" }}>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>3+</span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>Years experience</span>
                </div>
                <div className="w-px h-10 mx-2" style={{ background: "var(--border)" }} />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>React</span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>Primary framework</span>
                </div>
                <div className="w-px h-10 mx-2" style={{ background: "var(--border)" }} />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>BLR</span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>Bengaluru, India</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
