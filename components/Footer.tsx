"use client";

const footerLinks = {
  Capabilities: [
    { label: "CNC Machining", href: "https://factorem.co/cnc-machining" },
    { label: "3D Printing", href: "https://factorem.co/3d-printing" },
    { label: "Sheet Metal", href: "https://factorem.co/sheet-metal" },
    { label: "Injection Molding", href: "https://factorem.co/injection-molding" },
    { label: "Surface Finishing", href: "https://factorem.co/surface-finishing" },
  ],
  Platform: [
    { label: "Get a Quote", href: "https://app.factorem.co/getquotenow" },
    { label: "Sign In", href: "https://app.factorem.co" },
    { label: "Parts Gallery", href: "https://factorem.co/parts-gallery" },
  ],
  Company: [
    { label: "About Us", href: "https://factorem.co/about" },
    { label: "Blog", href: "https://factorem.co/blog" },
    { label: "Partnerships", href: "https://factorem.co/partnerships" },
    { label: "Contact", href: "mailto:sales@factorem.co" },
  ],
};

export default function Footer() {
  return (
    <footer className="px-6 py-14 bg-bg-dark text-white/70">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand + addresses */}
          <div className="lg:col-span-2">
            <span className="text-xl font-bold text-white font-display mb-4 block tracking-wide">
              factorem
            </span>
            <p className="text-sm leading-relaxed mb-4">
              Custom Parts, Managed from Design to Delivery.
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1 font-mono">Singapore</p>
                <p>71 Ayer Rajah Crescent, #06-14, Singapore 139951</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1 font-mono">United States</p>
                <p>Colorado Springs, CO</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="px-2.5 py-1 rounded text-xs font-medium bg-white/10 text-[#C2782A] font-mono">
                ISO 9001
              </span>
              <a
                href="https://wa.me/6591880422"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                WhatsApp →
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-white mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/30">
          &copy; 2026 Factorem Pte. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
