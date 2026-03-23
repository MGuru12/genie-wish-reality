import { motion } from "framer-motion";
import { Layers, BookOpen, Sparkles, Zap, Globe } from "lucide-react";

const products = [
  {
    name: "PlanAI",
    description: "AI-powered floor plan designer with 2D & 3D generation.",
    features: ["Smart layout generation", "Real-time editing", "3D visualization"],
    icon: Layers,
    url: "https://planai.geniewish.space",
    cta: "Open PlanAI",
    live: true,
  },
  {
    name: "Ondoc",
    description: "AI-driven knowledgebase platform for internal & external documentation.",
    features: ["Live AI knowledge retrieval", "Collaboration", "Smart indexing"],
    icon: BookOpen,
    url: "https://ondoc.geniewish.space",
    cta: "Open Ondoc",
    live: true,
  },
  {
    name: "SynthAI",
    description: "Next-gen AI content synthesis and creative automation.",
    icon: Sparkles,
    live: false,
  },
  {
    name: "FlowX",
    description: "Intelligent workflow automation for modern teams.",
    icon: Zap,
    live: false,
  },
  {
    name: "NexusAPI",
    description: "Unified API gateway for AI-powered integrations.",
    icon: Globe,
    live: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A growing ecosystem of AI-powered tools designed for the future.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              className={`glass-panel-hover p-8 flex flex-col relative overflow-hidden group ${
                !product.live ? "opacity-70" : ""
              }`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {product.live && product.features && (
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {product.live ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow text-center text-sm mt-auto inline-block"
                  >
                    {product.cta}
                  </a>
                ) : (
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-muted-foreground text-sm font-medium neu-inset">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
