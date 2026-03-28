"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #0B1120 0%, #111827 50%, #0C2D57 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 font-mono">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by teams pushing the frontier
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="rounded-2xl p-6 bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-accent bg-accent/10 font-mono">
                  {t.metric}
                </span>
              </div>
              <blockquote className="text-white/90 text-[15px] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/50 text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://calendly.com/hardikdobariya/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 rounded-xl border border-accent/30 text-white font-semibold text-[15px] hover:bg-accent/10 transition-all cursor-pointer"
          >
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
