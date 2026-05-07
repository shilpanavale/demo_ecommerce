export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Stories", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  { value: "3.8x", label: "average conversion lift" },
  { value: "42%", label: "faster launch cycles" },
  { value: "99.9%", label: "checkout uptime" },
] as const;

export const features = [
  {
    title: "Adaptive storefront builder",
    description:
      "Compose product stories, bundles, and campaign pages with responsive sections that stay on brand.",
    icon: "layers",
  },
  {
    title: "Intent-aware merchandising",
    description:
      "Surface offers, recommendations, and availability signals based on shopper behavior in real time.",
    icon: "spark",
  },
  {
    title: "Premium checkout flows",
    description:
      "Reduce friction with accelerated payments, accessible forms, localized shipping, and fraud checks.",
    icon: "bag",
  },
  {
    title: "Growth command center",
    description:
      "Track margin, retention, attribution, and lifecycle campaigns from one polished analytics workspace.",
    icon: "chart",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The site finally feels as premium as our product. Our mobile conversion rate moved immediately after launch.",
    author: "Maya Singh",
    role: "Founder, Vella Home",
  },
  {
    quote:
      "We replaced a stack of plugins with one fast storefront experience. The team ships campaigns in hours now.",
    author: "Jon Bell",
    role: "VP Ecommerce, Northline",
  },
  {
    quote:
      "Every detail is thoughtful: motion, checkout clarity, performance, and accessibility. It feels custom-built.",
    author: "Ari Okafor",
    role: "Creative Director, Chroma Goods",
  },
] as const;

export const plans = [
  {
    name: "Launch",
    price: "$49",
    description: "For new teams building a polished commerce presence.",
    features: ["Visual storefront builder", "2 team seats", "Core analytics", "Email support"],
  },
  {
    name: "Scale",
    price: "$149",
    description: "For growing brands that need conversion tooling and automations.",
    features: [
      "Advanced merchandising",
      "10 team seats",
      "Lifecycle campaigns",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established retailers with complex operations.",
    features: ["Multi-market controls", "Dedicated success", "SLA support", "Custom integrations"],
  },
] as const;

export const faqItems = [
  {
    question: "Can the landing page support real ecommerce integrations?",
    answer:
      "Yes. The component structure keeps content, layout, and actions separate so checkout, CMS, or analytics integrations can be wired in cleanly.",
  },
  {
    question: "Does the design work on mobile and tablet?",
    answer:
      "Every section uses responsive grids, flexible spacing, and accessible navigation patterns for desktop, tablet, and mobile screens.",
  },
] as const;
