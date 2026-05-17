"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  };
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Ambient glow — breathes */}
      <motion.div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "var(--accent)" }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0.12, 0.2, 0.12], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-8"
          style={{ borderColor: "var(--border)", color: "var(--text-secondary)", background: "var(--surface)" }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          Open to new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ color: "var(--text-primary)" }}
          {...item(0.15)}
        >
          Keerthick{" "}
          <motion.span
            style={{ color: "var(--accent)", display: "inline-block" }}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
          >
            Ravikumar
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl font-mono mb-4"
          style={{ color: "var(--text-secondary)" }}
          {...item(0.35)}
        >
          Fast by design.{" "}
          <span style={{ color: "var(--text-primary)" }}>Accessible by default.</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          {...item(0.45)}
        >
          Frontend engineer with 3 years of experience building performant,
          inclusive web experiences with React and Next.js.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          {...item(0.55)}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 hover:scale-[1.03]"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            View projects
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-lg font-medium border transition-all hover:scale-[1.03]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--surface)" }}
          >
            About me
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border transition-all hover:scale-[1.03]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--surface)" }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-current opacity-30"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
