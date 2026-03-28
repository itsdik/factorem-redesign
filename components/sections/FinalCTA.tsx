"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="px-6 py-16 md:py-24 bg-bg-dark relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,93,188,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(12,93,188,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(12,93,188,0.15) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Manufacturing for the hardest problems
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
            Upload your CAD file and get a quote within 24 hours.
            Precision tolerances. Exotic materials. Full documentation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://app.factorem.co/getquotenow?source=homepage_cta"
              className="px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary-hover transition-all animate-cta-pulse cursor-pointer"
            >
              Start My Secure Quote
            </a>
            <a
              href="https://calendly.com/hardikdobariya/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-[15px] hover:bg-white/5 transition-all cursor-pointer"
            >
              Talk to an Engineer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
