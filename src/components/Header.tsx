import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text neon-glow"
          >
            Dozefy
          </motion.div>

          <nav className="hidden md:flex items-center space-x-4">
            {["Services", "Dashboard", "About Us", "Contact Us"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-white hover:text-primary hover:bg-white/10 transition-colors"
              >
                {item}
              </Button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-primary hover:bg-white/10"
            >
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/80">Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg"
        >
          <nav className="px-4 py-6 space-y-4">
            {["Services", "Dashboard", "About Us", "Contact Us"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full text-white hover:text-primary hover:bg-white/10 transition-colors"
              >
                {item}
              </Button>
            ))}
            <div className="pt-4 space-y-4">
              <Button
                variant="ghost"
                className="w-full text-white hover:text-primary hover:bg-white/10"
              >
                Login
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/80">
                Register
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};