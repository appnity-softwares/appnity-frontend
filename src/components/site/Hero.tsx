import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Shield, Zap } from "lucide-react";

const floatingCards = [
  {
    Icon: BarChart3,
    label: "120k+ Users",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    position: "top-10 -right-4 lg:right-0",
    delay: 0,
  },
  {
    Icon: Zap,
    label: "99.9% Uptime",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    position: "bottom-16 -left-4 lg:left-0",
    delay: 0.15,
  },
  {
    Icon: MessageSquare,
    label: "50k+ Users",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    position: "bottom-40 -right-2 lg:right-4",
    delay: 0.3,
  },
  {
    Icon: Shield,
    label: "Enterprise Grade",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    position: "top-32 -left-6 lg:left-2",
    delay: 0.45,
  },
];

export const Hero = () => {
  return (
    <section id="top" className="relative flex flex-col items-center justify-center overflow-hidden pt-36 pb-20 md:pt-48 md:pb-24 noise">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-mesh" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 bg-gradient-radial blur-2xl" aria-hidden />

      {/* Floating Metric Cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {floatingCards.map(({ Icon, label, color, bg, border, position, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + delay }}
            className={`absolute hidden lg:flex items-center gap-3 rounded-xl border ${border} ${bg} bg-white/80 backdrop-blur-sm px-4 py-2.5 shadow-lg ${position}`}
          >
            <Icon size={18} className={color} />
            <span className="text-xs font-bold tracking-tight text-foreground whitespace-nowrap">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Floating Animated Graph Bars (decorative) */}
      <div className="pointer-events-none absolute right-[10%] top-1/3 hidden lg:flex flex-col items-end gap-1.5 opacity-20" aria-hidden>
        {[60, 85, 45, 92, 70].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: h }}
            transition={{ duration: 1, delay: 1 + i * 0.1, ease: "easeOut" }}
            className="w-2 rounded-full bg-primary"
            style={{ height: h }}
          />
        ))}
      </div>

      <div className="container-tight relative flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <span className="badge-dot">Your strategic technology partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl"
        >
          <span className="text-foreground">We build the software</span>
          <br />
          <span className="text-brand-gradient">that scales your business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          Forget technical debt and broken promises. We partner with ambitious founders 
          to ship bulletproof systems that turn complex ideas into measurable profit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Schedule a strategy call
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full hairline px-8 py-4 text-sm font-medium text-foreground hover:bg-surface-2 transition-colors"
          >
            Explore our systems
          </a>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
        >
          Trusted by founders across FinTech, HealthTech, and E-commerce
        </motion.p>
      </div>
    </section>
  );
};
