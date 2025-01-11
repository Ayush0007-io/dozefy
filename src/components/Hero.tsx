import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-secondary/50 to-transparent overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1)_0%,transparent_50%)]" />
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 bg-white/80 backdrop-blur-sm text-primary rounded-full text-sm font-medium inline-block shadow-sm"
          >
            ✨ Your AI Startup Journey Starts Here
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary leading-[1.1] max-w-4xl mx-auto">
            Build your next{" "}
            <span className="text-primary">AI startup</span>{" "}
            faster than ever
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Launch your AI startup with our comprehensive toolkit. Everything you need to go from idea to launch in record time.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              View Demo
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-12"
          >
            <p className="text-sm text-textSecondary mb-4">Trusted by leading companies</p>
            <div className="flex justify-center items-center gap-8 grayscale opacity-50">
              {/* Add company logos here */}
              <div className="h-8">Company 1</div>
              <div className="h-8">Company 2</div>
              <div className="h-8">Company 3</div>
              <div className="h-8">Company 4</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};