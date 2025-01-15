import { motion } from "framer-motion";
import { Menu } from "lucide-react";
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

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

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
            className="text-2xl font-bold text-lavender hover:text-periwinkle transition-colors duration-300"
          >
            Dozefy
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {["Services", "Dashboard", "About Us", "Contact Us"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-lavender hover:text-periwinkle hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-lavender/20"
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-lavender hover:text-periwinkle hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-lavender/20"
            >
              Login
            </Button>
            <Button className="bg-lavender hover:bg-periwinkle text-black font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,192,255,0.3)]">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-lavender" />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <nav className="px-4 py-6 space-y-4 bg-black/90 backdrop-blur-lg rounded-lg mt-2 border border-lavender/10">
            {["Services", "Dashboard", "About Us", "Contact Us"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full text-lavender hover:text-periwinkle hover:bg-white/5 transition-colors justify-start"
              >
                {item}
              </Button>
            ))}
            <div className="pt-4 space-y-4 border-t border-lavender/10">
              <Button
                variant="ghost"
                className="w-full text-lavender hover:text-periwinkle hover:bg-white/5"
              >
                Login
              </Button>
              <Button className="w-full bg-lavender hover:bg-periwinkle text-black font-semibold">
                Register
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};