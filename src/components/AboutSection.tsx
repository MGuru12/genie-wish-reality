import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass-panel p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-gradient">GenieWish</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We're building a unified AI ecosystem for creators, teams, and
              businesses. Our mission is to make intelligent software accessible
              to everyone — tools that think with you, not just for you.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From floor plan generation to knowledge management, every product
              in the GenieWish suite is designed to amplify human potential
              through thoughtful AI integration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
