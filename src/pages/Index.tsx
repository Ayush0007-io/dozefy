import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000]">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Base mesh background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg-mesh.png')" }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8E44AD]/50 to-[#000000]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,68,173,0.1)_0%,transparent_50%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content wrapper with initial animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <Header />
        <div className="relative">
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" />
          
          {/* Main content */}
          <Hero />
          <Features />
          <FAQ />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;