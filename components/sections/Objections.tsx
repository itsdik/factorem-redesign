"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { objections } from "@/lib/content";

export default function Objections() {
  return (
    <section className="px-6 py-16 md:py-24 bg-bg-alt">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 font-mono">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Questions we hear from hard-tech teams
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Straight answers for engineering and procurement leads.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {objections.map((obj) => (
            <motion.div
              key={obj.question}
              variants={staggerItem}
              className="rounded-2xl p-6 bg-white border border-border shadow-[0_2px_20px_rgba(11,17,32,0.03)]"
            >
              <h3 className="text-base font-semibold text-dark mb-2">
                &ldquo;{obj.question}&rdquo;
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {obj.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
