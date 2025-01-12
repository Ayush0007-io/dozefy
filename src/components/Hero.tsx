import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 mt-header overflow-hidden">
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
              background: `rgba(155, 126, 189, ${Math.random() * 0.5 + 0.5})`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-courier text-h1 font-bold leading-tight max-w-2xl gradient-text neon-glow"
          >
            Advanced AI-Based 
            <span className="text-primary neon-glow block mt-2">Telehealth</span>
            Platform
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-body text-warmGray font-courier max-w-xl"
          >
            Experience the future of healthcare with our AI-powered telehealth solutions. 
            Seamless integration of advanced technology with personalized care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 group font-courier"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purpleMain/20 to-primary/20 rounded-2xl glass-effect">
            {/* Add your hero image here */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 w-full py-12 lg:static"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-h3 font-bold font-courier text-primary neon-glow">100K+</h3>
              <p className="text-warmGray font-courier">Active Users</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-h3 font-bold font-courier text-primary neon-glow">50+</h3>
              <p className="text-warmGray font-courier">Healthcare Partners</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-h3 font-bold font-courier text-primary neon-glow">99%</h3>
              <p className="text-warmGray font-courier">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};