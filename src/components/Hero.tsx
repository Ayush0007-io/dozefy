import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 mt-header overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,198,255,0.2)_0%,rgba(0,0,0,0.8)_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="font-quicksand text-h1 font-bold leading-tight max-w-2xl bg-gradient-to-r from-lavender to-periwinkle bg-clip-text text-transparent">
            Advanced AI-driven healthcare
            <span className="text-mintGreen block mt-2">at an affordable price</span>
          </h1>
          
          <p className="text-body text-skyBlue/80 font-quicksand max-w-xl">
            Experience the future of healthcare with our AI-powered telehealth solutions. 
            Seamless integration of advanced technology with personalized care.
          </p>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-lavender hover:bg-periwinkle text-black font-semibold px-8 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,192,255,0.3)]"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-periwinkle/20 rounded-2xl border border-lavender/10 backdrop-blur-sm">
            {/* Add your hero image here */}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full py-12 lg:static">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-h3 font-bold font-quicksand text-mintGreen">100K+</h3>
              <p className="text-skyBlue/80 font-quicksand">Active Users</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-h3 font-bold font-quicksand text-mintGreen">50+</h3>
              <p className="text-skyBlue/80 font-quicksand">Healthcare Partners</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-h3 font-bold font-quicksand text-mintGreen">99%</h3>
              <p className="text-skyBlue/80 font-quicksand">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
