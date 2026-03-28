"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const HERO_VIDEO_URL =
  "https://factorem-s3-bucket-staging.s3.ap-southeast-1.amazonaws.com/Public/factorem-hero-vid_1762338451280.mp4";

export default function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Warm radial accents */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(194,120,42,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-50px] left-[-50px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27,58,92,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column -- copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Trust badges */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["ISO 9001 Certified", "IP Protected", "150+ Vetted Factories"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-accent-light text-accent border border-accent/15"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {badge}
                  </span>
                )
              )}
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.08] tracking-tight text-dark mb-6 font-display"
            >
              Custom Parts, Managed from{" "}
              <span className="text-accent">Design to Delivery</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl"
            >
              Upload your CAD. Get AI-powered DFM feedback and pricing in hours.
              Our engineering team manages production, quality inspection, and
              logistics -- end-to-end.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <a
                href="https://app.factorem.co/getquotenow?source=homepage_hero"
                className="px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-[15px] hover:bg-accent-hover transition-all animate-cta-pulse cursor-pointer"
              >
                Get Your Quote →
              </a>
              <a
                href="https://calendly.com/hardikdobariya/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-bg-alt text-dark font-semibold text-[15px] border border-border hover:border-accent/30 hover:bg-accent-light transition-all cursor-pointer"
              >
                Talk to an Engineer
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "300+", label: "Engineering teams" },
                { value: "$10M+", label: "Parts fulfilled" },
                { value: "24hrs", label: "Average quote time" },
                { value: "4.8★", label: "Customer rating" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-dark font-display">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-light font-mono uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column -- hero video */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-dark/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
              </video>
              {/* Subtle gradient overlay at edges */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
