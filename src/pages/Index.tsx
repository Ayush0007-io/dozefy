import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageScroller } from "@/components/ImageScroller";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000]">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-secondary to-[#000000]" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purpleMain/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lavenderBlue/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Header />
        <main className="relative">
          <Hero />
          <Features />
          <ImageScroller />
          <ScrollAnimation />
          <Benefits />
          <Reviews />
          <FAQ />
          <Footer />
        </main>
      </motion.div>
    </div>
  );
};

export default Index;