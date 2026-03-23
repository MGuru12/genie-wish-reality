import { motion } from "framer-motion";
import { Brain, Users, Cloud, Puzzle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-First Architecture",
    description: "Every product is built with intelligence at its core, not bolted on as an afterthought.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work together seamlessly with live cursors, shared state, and instant sync.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Scalability",
    description: "Infrastructure that grows with you — from prototype to enterprise scale.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description: "Connect with the tools you already love through our unified API layer.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Built for the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The foundation that powers every GenieWish product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-panel-hover p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
