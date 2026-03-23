import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-display text-xl font-bold text-gradient">
              GenieWish
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Building the future of intelligent software.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="mailto:hello@geniewish.space" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} GenieWish. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
