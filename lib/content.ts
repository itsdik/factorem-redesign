// Content data layer -- single source of truth for all page copy

export const VERTICALS = [
  "Photonics",
  "Quantum",
  "Robotics",
  "Defense",
  "Aerospace",
];

export const stats = [
  { value: "300+", label: "Hard-Tech Teams Served" },
  { value: "$10M+", label: "Precision Parts Fulfilled" },
  { value: "150+", label: "Vetted Factories" },
  { value: "4.8\u2605", label: "Customer Rating" },
];

export const trustLogos = [
  { name: "KLA", width: 70 },
  { name: "Hyundai", width: 100 },
  { name: "Cubic", width: 80 },
  { name: "BeeX", width: 70 },
  { name: "Prism", width: 70 },
  { name: "NUS", width: 60 },
  { name: "NTU", width: 60 },
];

export const painPoints = [
  {
    icon: "target",
    title: "Tolerances that can't slip",
    description:
      "Optical mounts, quantum vacuum chambers, robotic actuators -- these parts have zero room for error. Most job shops don't understand what's at stake.",
  },
  {
    icon: "lock",
    title: "IP and ITAR sensitivity",
    description:
      "Your designs are classified, proprietary, or export-controlled. You need a partner who treats security as infrastructure, not an afterthought.",
  },
  {
    icon: "clock",
    title: "R&D timelines are brutal",
    description:
      "Grant deadlines, demo days, flight reviews. When you need 5 custom parts in 10 days, the answer can't be 'we'll get back to you next week.'",
  },
  {
    icon: "puzzle",
    title: "Multi-process complexity",
    description:
      "One assembly needs CNC titanium, SLS polymer, anodized aluminum, and press-fit inserts. Coordinating 4 vendors is a full-time job you don't have.",
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: "Upload Your CAD",
    description:
      "Drop your STEP, IGES, or STL file. We accept 30+ formats. All uploads are encrypted and NDA-protected.",
    detail: null,
  },
  {
    step: 2,
    title: "AI-Powered Quote + DFM",
    description:
      "Our Predictive Pricing Engine analyzes your part geometry against 10,000+ historical data points. Get manufacturability feedback tuned for your material and tolerance requirements.",
    detail: null,
  },
  {
    step: 3,
    title: "We Manage Everything",
    description:
      "This is where we're different. Your dedicated engineering team handles:",
    detail: [
      "Factory selection from 150+ vetted partners (material + process matched)",
      "Production monitoring with real-time milestone updates",
      "In-house quality inspection with CMM and optical measurement reports",
      "Material certifications (CoC, RoHS, REACH, DFARS where needed)",
      "Secure packaging and international logistics",
    ],
  },
  {
    step: 4,
    title: "Quality Inspected",
    description:
      "Every part goes through our quality inspection process. Dimensional reports, surface finish checks, and material verification -- before it ships. Critical-to-function dimensions get 100% inspection.",
    detail: null,
  },
  {
    step: 5,
    title: "Delivered to Your Lab",
    description:
      "DHL and FedEx international shipping with full tracking and customs documentation. Average delivery: 2-3 weeks from order.",
    detail: null,
  },
];

export const comparisonRows = [
  {
    metric: "Get a Quote",
    oldWay: "3-7 days of emails",
    factorem: "Within 24 hours, AI-powered",
  },
  {
    metric: "Tolerance Capability",
    oldWay: "Standard shop tolerances",
    factorem: "\u00B10.01mm CNC, \u00B10.05mm SLS",
  },
  {
    metric: "IP Security",
    oldWay: "Files shared via email",
    factorem: "Encrypted uploads + NDA + ITAR-aware",
  },
  {
    metric: "Multi-Process Assembly",
    oldWay: "You coordinate 4 vendors",
    factorem: "One order, one team, one shipment",
  },
  {
    metric: "Quality Documentation",
    oldWay: "Maybe a CoC if you ask",
    factorem: "CMM reports + material certs + photos",
  },
  {
    metric: "Logistics",
    oldWay: "You arrange shipping",
    factorem: "Door-to-door, export docs included",
  },
];

export const capabilities = [
  {
    title: "CNC Machining",
    description:
      "3 to 5-axis milling and turning. Tolerances to \u00B10.01mm. Ideal for optical mounts, actuator housings, and flight-critical structural parts.",
    materials: [
      "Aluminum 6061/7075",
      "Titanium Grade 5",
      "Invar 36",
      "PEEK",
      "Stainless 17-4PH",
    ],
  },
  {
    title: "3D Printing",
    description:
      "SLA, SLS, MJF, FDM, and DMLS. Rapid prototyping for quantum hardware enclosures, sensor housings, and conformal cooling channels.",
    materials: [
      "Nylon PA12",
      "Resin (SLA)",
      "Stainless Steel (DMLS)",
      "Aluminum (SLM)",
      "Inconel 718",
    ],
  },
  {
    title: "Sheet Metal",
    description:
      "Laser cutting, bending, welding, and finishing. From RF shielding enclosures to drone airframes and satellite brackets.",
    materials: [
      "Mild Steel",
      "Stainless Steel",
      "Aluminum 5052",
      "Copper",
      "Mu-Metal",
    ],
  },
  {
    title: "Injection Molding",
    description:
      "Prototype and production tooling. Bridge to mass production with T1 samples in weeks. Ideal for sensor covers and robotic grippers.",
    materials: ["ABS", "Polycarbonate", "PEEK", "Ultem", "Glass-filled Nylon"],
  },
  {
    title: "Finishing & Post-Processing",
    description:
      "Anodizing (Type II/III), black oxide, passivation, electropolishing, and precision surface finishes for optical and cleanroom applications.",
    materials: [
      "Hard Anodize Type III",
      "Chem Film (Alodine)",
      "Electropolish",
      "Bead Blast",
      "Passivation",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "We needed 12 custom optical mounts in Invar with sub-10-micron flatness. Factorem matched us to the right factory and delivered with full CMM reports in 18 days.",
    name: "Lead Optical Engineer",
    company: "Photonics R&D Lab",
    metric: "Sub-10\u00B5m flatness achieved",
  },
  {
    quote:
      "Our cryostat assembly needed titanium machined parts, 3D-printed polymer isolators, and anodized aluminum shields -- all in one order. Factorem handled the multi-process coordination so our team could focus on the physics.",
    name: "Hardware Lead",
    company: "Quantum Computing Startup",
    metric: "3 processes, 1 shipment",
  },
  {
    quote:
      "Factorem stepped in when our usual supplier couldn't deliver on time for a flight review. 98% on-time delivery across 200+ parts -- and they handled everything from quoting to shipping.",
    name: "Procurement Manager",
    company: "Defense Systems Integrator",
    metric: "98% on-time delivery",
  },
];

export const objections = [
  {
    question: "Can you handle ITAR-controlled parts?",
    answer:
      "We work with ITAR-aware supply chains and sign NDAs on request. All files are encrypted in transit and at rest. For classified projects, we can discuss specific requirements with your compliance team.",
  },
  {
    question: "We need tolerances tighter than \u00B10.01mm.",
    answer:
      "Our factory network includes precision grinding, EDM, and optical-grade machining partners. Tell us your CTF dimensions and we'll match you to the right capability -- or flag where a process change would improve yield.",
  },
  {
    question: "Aren't you just a middleman?",
    answer:
      "No. We're a managed manufacturing service. Our engineering team reviews every DFM, selects the factory, monitors production, inspects quality in-house, and ships to your door. We own the outcome.",
  },
  {
    question: "Our volumes are small and irregular.",
    answer:
      "That's exactly who we serve. No MOQs, no contracts. Most of our hard-tech customers start with 1-50 pieces per order. We're built for low-volume, high-mix production.",
  },
  {
    question: "What about IP protection?",
    answer:
      "All files are encrypted in transit and at rest. We sign NDAs on request. Our ISO 9001-certified process includes access controls and data handling procedures. Singapore's IP laws provide additional legal protection.",
  },
];

export const teamRoles = [
  {
    role: "Project Engineer",
    icon: "wrench",
    description:
      "Reviews your DFM, selects the right factory for your material and tolerance spec, and monitors production milestones.",
  },
  {
    role: "Quality Inspector",
    icon: "shield",
    description:
      "Performs CMM checks, optical measurement, surface inspection, and verifies material certifications against your requirements.",
  },
  {
    role: "Logistics Coordinator",
    icon: "globe",
    description:
      "Arranges international shipping with DHL/FedEx, manages customs documentation, and handles export compliance.",
  },
  {
    role: "Account Manager",
    icon: "headset",
    description:
      "Your single point of contact for status updates, engineering changes, and escalations. Available via email, WhatsApp, or call.",
  },
];
