"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { trustLogos } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="px-6 py-12 bg-bg-alt border-y border-border-light">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1200px] mx-auto"
      >
        <p className="text-center text-sm font-medium text-muted-light mb-8 uppercase tracking-wider font-mono">
          Trusted by 300+ engineering teams globally
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
          {trustLogos.map((logo) => (
            <div
              key={logo.name}
              className="text-lg font-bold text-muted-light tracking-wide font-display"
              style={{ minWidth: logo.width }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
