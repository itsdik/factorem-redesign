"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { comparisonRows } from "@/lib/content";

export default function ComparisonTable() {
  return (
    <section id="compare" className="px-6 py-16 md:py-24">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 font-mono">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-display mb-4">
            Your current process vs. with Factorem
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Side-by-side — no spin, just facts.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-border overflow-hidden shadow-[0_2px_20px_rgba(26,35,50,0.03)]"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-bg-alt border-b border-border">
            <div className="p-4 text-sm font-semibold text-muted-light uppercase tracking-wider font-mono">
              Metric
            </div>
            <div className="p-4 text-sm font-semibold text-muted-light uppercase tracking-wider text-center font-mono">
              Old Way
            </div>
            <div className="p-4 text-sm font-semibold text-accent uppercase tracking-wider text-center font-mono">
              With Factorem
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.metric}
              variants={staggerItem}
              className={`grid grid-cols-3 ${
                i < comparisonRows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 font-medium text-dark text-sm">
                {row.metric}
              </div>
              <div className="p-4 text-sm text-muted text-center">
                {row.oldWay}
              </div>
              <div className="p-4 text-sm text-accent font-medium text-center bg-accent-light/50">
                {row.factorem}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://app.factorem.co/getquotenow?source=homepage_comparison"
            className="inline-block px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-[15px] hover:bg-accent-hover transition-all cursor-pointer"
          >
            Try It on Your Next Part →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
