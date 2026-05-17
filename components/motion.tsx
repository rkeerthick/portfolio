"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/* ── Scroll reveal wrapper ── */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function Reveal({ children, className, delay = 0, variants = fadeUpVariants }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container for scroll reveal ── */
interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/* ── Single stagger child ── */
export function StaggerItem({ children, className }: StaggerRevealProps) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}

/* ── Scale-in stagger child ── */
export function ScaleItem({ children, className }: StaggerRevealProps) {
  return (
    <motion.div className={className} variants={scaleInVariants}>
      {children}
    </motion.div>
  );
}
