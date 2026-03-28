"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { painPoints } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  mail: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  refresh: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6" />
      <path d="M2.5 22v-6h6" />
      <path d="M2.5 11.5a10 10 0 0 1 18.8-4.3" />
      <path d="M21.5 12.5a10 10 0 0 1-18.8 4.2" />
    </svg>
  ),
  clipboard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  truck: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h1" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
};

export default function TheProblem() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 font-mono">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-display mb-4">
            Managing manufacturing shouldn&apos;t mean<br className="hidden md:block" />
            managing 5 suppliers
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Engineers spend 40% of their procurement time on non-engineering tasks —
            chasing quotes, managing suppliers, and coordinating logistics.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              className="rounded-2xl p-6 bg-white border border-border shadow-[0_2px_20px_rgba(26,35,50,0.03)] hover:shadow-[0_8px_24px_rgba(26,35,50,0.06)] transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-4">
                {iconMap[point.icon]}
              </div>
              <h3 className="text-lg font-semibold text-dark font-display mb-2">
                {point.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
