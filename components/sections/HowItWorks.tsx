"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { workflowSteps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 md:py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 font-mono">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            From CAD file to delivered part -- we manage every step
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Upload once. We handle factory selection, production, inspection, and
            shipping. You focus on the engineering.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {workflowSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className={`rounded-2xl p-6 md:p-8 bg-white border border-border shadow-[0_2px_20px_rgba(11,17,32,0.03)] ${
                step.step === 3 ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary font-mono">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                  {step.detail && (
                    <ul className="mt-4 space-y-2">
                      {step.detail.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[15px] text-muted"
                        >
                          <svg
                            className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.3 4L6 11.3 2.7 8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
            href="https://app.factorem.co/getquotenow?source=homepage_workflow"
            className="inline-block px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary-hover transition-all animate-cta-pulse cursor-pointer"
          >
            Start My Secure Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
