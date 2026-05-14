export const mockData = {
  theme: {
    primary_color: "#3b82f6",
    secondary_color: "#1e40af",
    logo_url: "",
    site_name: "Appnity Softwares",
  },
  navigation: [
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Services", path: "/services" },
    { title: "Team", path: "/team" },
    { title: "Contact", path: "/contact" },
  ],
  team: [
    {
      id: "1",
      full_name: "Jatin Gupta",
      role: "Lead Systems Architect",
      bio: "Specializing in distributed systems and high-performance backend architecture. 8+ years of shipping enterprise-grade software.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
      social_links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "2",
      full_name: "Sarah Chen",
      role: "Senior Frontend Engineer",
      bio: "Expert in React, TypeScript, and crafting premium user experiences with radical performance optimization.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
      social_links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "3",
      full_name: "Michael Ross",
      role: "Product Designer",
      bio: "Bridging the gap between technical complexity and human-centered design. Focused on high-fidelity prototypes.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
      social_links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ],
  values: [
    {
      id: "1",
      icon: "Target",
      title: "Radical Transparency",
      description: "We don't hide behind 'discovery theater'. You get direct access to our progress and codebase.",
    },
    {
      id: "2",
      icon: "Zap",
      title: "High Precision",
      description: "Every line of code is written with intent. We build for long-term scalability and bulletproof stability.",
    },
    {
      id: "3",
      icon: "Heart",
      title: "Engineering Mastery",
      description: "We are a senior-only collective. No juniors, no account managers. Only engineers building for you.",
    },
  ],
  portfolios: [
    {
      id: "1",
      title: "KEC Educational Portal",
      slug: "kec-portal",
      category: "News Portal",
      industry: "Education",
      stack: "Go + React",
      description: "A high-traffic educational platform serving over 120k+ active users with real-time updates and secure application management.",
      project_url: "https://example.com",
      metrics: [
        { label: "Active Users", metric: "120k+" },
        { label: "Uptime", metric: "99.99%" },
      ],
      featured: true,
    },
    {
      id: "2",
      title: "Soulmate Matrimonial",
      slug: "soulmate",
      category: "Mobile Application",
      industry: "Social",
      stack: "React Native + Node",
      description: "A premium matrimonial matchmaking platform with AI-driven compatibility scoring and secure chat infrastructure.",
      project_url: "https://example.com",
      metrics: [
        { label: "Downloads", metric: "50k+" },
        { label: "Match Rate", metric: "45%" },
      ],
      featured: true,
    },
    {
      id: "3",
      title: "Luxe E-commerce",
      slug: "luxe-ecommerce",
      category: "Premium Showcase",
      industry: "Retail",
      stack: "Next.js + Shopify",
      description: "A high-end retail experience for a luxury brand, focusing on buttery-smooth transitions and high conversion rates.",
      project_url: "https://example.com",
      metrics: [
        { label: "Conversion", metric: "+25%" },
        { label: "Page Load", metric: "0.8s" },
      ],
      featured: false,
    },
  ],
  services: [
    {
      id: "1",
      title: "Full-Stack Engineering",
      description: "End-to-end development of complex web and mobile platforms using modern technology stacks.",
    },
    {
      id: "2",
      title: "Architectural Consulting",
      description: "Auditing and designing high-performance system architectures for scalability and security.",
    },
    {
      id: "3",
      title: "Product Design",
      description: "High-fidelity UX/UI design that prioritizes conversion, speed, and premium aesthetics.",
    },
  ],
  faqs: [
    {
      id: "1",
      question: "How long does a typical project take?",
      answer: "Most MVPs are shipped within 4-8 weeks. Complex enterprise systems can take 3-6 months.",
    },
    {
      id: "2",
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide 24/7 technical monitoring and ongoing maintenance to ensure your system evolves with your business.",
    },
  ],
  pricing: [
    {
      id: "1",
      name: "Product Sprint",
      price: "$5k",
      description: "For rapid prototyping and MVPs.",
      features: ["2-week sprint", "Core features", "UI/UX Design", "Deployment"],
    },
    {
      id: "2",
      name: "Enterprise Build",
      price: "Custom",
      description: "For complex, scalable systems.",
      features: ["Full architecture", "Unlimited features", "24/7 Support", "Security hardening"],
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Alex Rivera",
      role: "CEO, TechFlow",
      content: "Appnity didn't just build our app; they architected our future. Their precision is unmatched.",
    },
  ],
  capabilities: [
    { id: "1", title: "Web Platforms", description: "High-performance React/Next.js applications." },
    { id: "2", title: "Mobile Apps", description: "Cross-platform React Native solutions." },
    { id: "3", title: "Cloud Infrastructure", description: "Secure and scalable AWS/Google Cloud setups." },
  ],
  process: [
    { step: "01", title: "Blueprint", description: "Architecture and technical planning." },
    { step: "02", title: "Build", description: "Iterative development and testing." },
    { step: "03", title: "Ship", description: "Cloud deployment and hardening." },
  ],
};
