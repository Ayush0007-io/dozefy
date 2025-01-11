import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#17124B,#0D0B30)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;