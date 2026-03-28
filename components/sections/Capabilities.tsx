"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-16 md:py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 font-mono">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-display mb-4">
            One partner, every manufacturing method
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            CNC machining, 3D printing, sheet metal, injection molding — all managed
            through a single upload. No MOQs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 bg-white border border-border shadow-[0_2px_20px_rgba(26,35,50,0.03)] hover:shadow-[0_8px_24px_rgba(26,35,50,0.06)] transition-all"
              style={{ borderTopColor: "var(--color-accent)", borderTopWidth: "3px" }}
            >
              <h3 className="text-lg font-semibold text-dark font-display mb-2">
                {cap.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-4">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cap.materials.map((mat) => (
                  <span
                    key={mat}
                    className="px-2.5 py-0.5 text-xs rounded-md bg-accent-light text-accent/80 font-medium"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
