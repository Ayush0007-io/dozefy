import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,68,173,0.2)_0%,rgba(0,0,0,0.8)_70%)]" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 5 + 2 + "px",
              height: Math.random() * 5 + 2 + "px",
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
              }, 0.5)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] max-w-4xl mx-auto gradient-text"
          >
            Advanced AI-Based 
            <span className="text-primary neon-glow"> Telehealth </span>
            Platform
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience the future of healthcare with our AI-powered telehealth solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-12"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">100K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">50+</h3>
                <p className="text-gray-400">Healthcare Partners</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">99%</h3>
                <p className="text-gray-400">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};