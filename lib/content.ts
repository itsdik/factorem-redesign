// Content data layer — single source of truth for all page copy

export const stats = [
  { value: "300+", label: "Engineering Teams Served" },
  { value: "$10M+", label: "Parts Fulfilled" },
  { value: "150+", label: "Vetted Factories" },
  { value: "4.8★", label: "Customer Rating" },
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
    icon: "mail",
    title: "5+ supplier emails per part",
    description: "Chasing quotes across fragmented networks wastes weeks of engineering time.",
  },
  {
    icon: "refresh",
    title: "No pricing consistency",
    description: "Same part, different day, wildly different quote. No data, no leverage.",
  },
  {
    icon: "clipboard",
    title: "Quality is a gamble",
    description: "No inspection reports, no material certs, no traceability until something fails.",
  },
  {
    icon: "truck",
    title: "Logistics on your shoulders",
    description: "You designed the part — now you're managing shipments, customs, and delays.",
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: "Upload Your CAD",
    description: "Drop your STEP, IGES, or STL file. We accept 30+ formats.",
    detail: null,
  },
  {
    step: 2,
    title: "AI-Powered Quote + DFM",
    description: "Our Predictive Pricing Engine analyzes your part geometry against 10,000+ historical data points.",
    detail: null,
  },
  {
    step: 3,
    title: "We Manage Everything",
    description: "This is where we're different. Your dedicated engineering team handles:",
    detail: [
      "Factory selection from 150+ vetted partners",
      "Production monitoring with real-time updates",
      "In-house quality inspection with CMM reports",
      "Material certifications (CoC, RoHS, REACH)",
      "Packaging and international logistics",
    ],
  },
  {
    step: 4,
    title: "Quality Inspected",
    description: "Every part goes through our quality inspection process. Dimensional reports, surface finish checks, and material verification — before it ships.",
    detail: null,
  },
  {
    step: 5,
    title: "Delivered to Your Door",
    description: "DHL and FedEx international shipping with full tracking. Average delivery: 2-3 weeks from order.",
    detail: null,
  },
];

export const comparisonRows = [
  { metric: "Get a Quote", oldWay: "3-7 days of emails", factorem: "Within 24 hours, AI-powered" },
  { metric: "Pricing Accuracy", oldWay: "±30% estimates", factorem: "95%+ accuracy from live data" },
  { metric: "IP Security", oldWay: "Files shared via email", factorem: "Encrypted uploads + NDA protection" },
  { metric: "Production Management", oldWay: "You manage the supplier", factorem: "We manage everything" },
  { metric: "Quality Assurance", oldWay: "Varies, often ad hoc", factorem: "100% inspection + certs" },
  { metric: "Logistics", oldWay: "You arrange shipping", factorem: "Door-to-door, fully tracked" },
];

export const capabilities = [
  {
    title: "CNC Machining",
    description: "3 to 5-axis milling and turning. Tolerances to ±0.01mm. Aluminum, steel, titanium, PEEK, and 50+ materials.",
    materials: ["Aluminum 6061/7075", "Stainless Steel 304/316", "Titanium Grade 5", "PEEK", "Delrin"],
  },
  {
    title: "3D Printing",
    description: "SLA, SLS, MJF, FDM, and DMLS. Prototypes in days. Production-grade polymers and metals.",
    materials: ["Nylon PA12", "Resin (SLA)", "Stainless Steel (DMLS)", "Aluminum (SLM)", "TPU"],
  },
  {
    title: "Sheet Metal",
    description: "Laser cutting, bending, welding, and finishing. From brackets to full enclosures.",
    materials: ["Mild Steel", "Stainless Steel", "Aluminum", "Copper", "Brass"],
  },
  {
    title: "Injection Molding",
    description: "Prototype and production tooling. Bridge to mass production with T1 samples in weeks.",
    materials: ["ABS", "Polycarbonate", "Nylon", "PP", "POM"],
  },
  {
    title: "Finishing & Post-Processing",
    description: "Anodizing, powder coating, plating, heat treatment, and custom surface finishes.",
    materials: ["Anodize Type II/III", "Powder Coat", "Nickel Plating", "Bead Blast", "Passivation"],
  },
];

export const testimonials = [
  {
    quote: "Factorem stepped in when our usual supplier couldn't deliver on time. 98% on-time delivery across 200+ parts — and they handled everything from quoting to shipping.",
    name: "Engineering Lead",
    company: "Defense R&D Lab",
    metric: "98% on-time delivery",
  },
  {
    quote: "We cut our procurement cycle from 6 weeks to 10 days. The instant quoting and managed production means our engineers spend time engineering, not chasing suppliers.",
    name: "Procurement Manager",
    company: "Robotics Startup",
    metric: "6 weeks → 10 days",
  },
  {
    quote: "The quality inspection reports and material certs gave us confidence we never had with our previous suppliers. Every part arrives with full documentation.",
    name: "Quality Director",
    company: "Precision Instruments Co.",
    metric: "100% documented parts",
  },
];

export const objections = [
  {
    question: "We're happy with our current suppliers.",
    answer: "Great — keep them. Most customers start with one project to compare. No contracts, no MOQs. Try us on a single part and see the difference in speed and documentation.",
  },
  {
    question: "Aren't you just a middleman?",
    answer: "No. We're a managed manufacturing service. Our engineering team reviews every DFM, selects the factory, monitors production, inspects quality in-house, and ships to your door. We own the outcome.",
  },
  {
    question: "Can you match China pricing?",
    answer: "Our prices include quality inspection, material certs, project management, and shipping. When you factor in the true cost of managing offshore suppliers yourself — rework, delays, travel — our total cost is often lower.",
  },
  {
    question: "My team isn't tech-savvy enough for a platform.",
    answer: "Upload a file and get a quote — that's it. No training needed. And you always have a direct line to our engineering team via email, WhatsApp, or phone.",
  },
  {
    question: "What about IP protection?",
    answer: "All files are encrypted in transit and at rest. We sign NDAs on request. Our ISO 9001-certified process includes access controls and data handling procedures. Singapore's IP laws provide additional legal protection.",
  },
];

export const teamRoles = [
  { role: "Project Engineer", icon: "wrench", description: "Reviews your DFM, selects the right factory, and monitors production milestones." },
  { role: "Quality Inspector", icon: "shield", description: "Performs dimensional checks, surface inspection, and verifies material certifications." },
  { role: "Logistics Coordinator", icon: "globe", description: "Arranges international shipping with DHL/FedEx and manages customs documentation." },
  { role: "Account Manager", icon: "headset", description: "Your single point of contact for status updates, changes, and escalations." },
];
