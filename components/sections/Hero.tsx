"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { VERTICALS } from "@/lib/content";

const HERO_VIDEO_URL =
  "https://factorem-s3-bucket-staging.s3.ap-southeast-1.amazonaws.com/Public/factorem-hero-vid_1762338451280.mp4";

function VerticalCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % VERTICALS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom">
      {VERTICALS.map((v, i) => (
        <motion.span
          key={v}
          initial={false}
          animate={{
            y: i === index ? 0 : i < index ? "-110%" : "110%",
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 text-gradient-tech whitespace-nowrap"
        >
          {v}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Gradient orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12,93,188,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-50px] left-[-50px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 65%)",
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
            {/* Industry vertical pills */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-2 mb-8"
            >
              {VERTICALS.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-primary/10 tracking-wide uppercase"
                >
                  {v}
                </span>
              ))}
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl md:text-[52px] font-extrabold leading-[1.1] tracking-tight text-dark mb-3"
            >
              Manufacturing for the
              <br />
              Hardest Problems
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl font-medium text-primary/80 mb-6"
            >
              Precision parts for <VerticalCycler />
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-muted leading-relaxed mb-10 max-w-xl"
            >
              When your physics demands sub-10-micron tolerances, exotic
              materials, and multi-process assemblies -- you need a manufacturing
              partner who understands what&apos;s at stake. Upload your CAD. We
              handle the rest.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <a
                href="https://app.factorem.co/getquotenow?source=homepage_hero"
                className="px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary-hover transition-all animate-cta-pulse cursor-pointer"
              >
                Start My Secure Quote
              </a>
              <a
                href="https://calendly.com/hardikdobariya/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-bg-alt text-dark font-semibold text-[15px] border border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
              >
                Talk to an Engineer
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border"
            >
              {[
                { icon: "shield", label: "ISO 9001 Certified" },
                { icon: "lock", label: "NDA + IP Protected" },
                { icon: "zap", label: "24hr Quoting" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">{badge.label}</span>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-dark/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
              </video>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-lg border border-border px-4 py-3"
            >
              <p className="text-2xl font-bold text-primary">300+</p>
              <p className="text-xs text-muted font-medium">
                Hard-tech teams served
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
