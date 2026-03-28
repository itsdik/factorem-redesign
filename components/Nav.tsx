"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#compare", label: "Why Factorem" },
  { href: "#testimonials", label: "Results" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border shadow-[0_1px_8px_rgba(11,17,32,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-dark tracking-wide">
            factorem
          </span>
          <span className="hidden sm:inline text-xs font-medium text-muted-light border-l border-border pl-2 ml-1">
            Hard-Tech Manufacturing
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-dark transition-colors cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.factorem.co"
            className="text-sm font-medium text-muted hover:text-dark transition-colors cursor-pointer"
          >
            Sign In
          </a>
          <a
            href="https://app.factorem.co/getquotenow?source=homepage"
            className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-all cursor-pointer"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-dark cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg border-b border-border px-6 py-4 space-y-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted hover:text-dark cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.factorem.co/getquotenow?source=homepage"
            className="block w-full text-center px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-all cursor-pointer"
          >
            Get Quote
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
