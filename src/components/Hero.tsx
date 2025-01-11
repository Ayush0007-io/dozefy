import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium inline-block">
            Introducing AI Startup Kit
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary leading-tight">
            Build your next AI startup faster than ever
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Launch your AI startup with our comprehensive toolkit. Everything you need to go from idea to launch in record time.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};