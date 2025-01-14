import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const ImageScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Our Work
        </motion.h2>

        {[1, 2, 3].map((index) => (
          <section
            key={index}
            className="scroll-section mb-32 opacity-0 translate-y-20 transition-all duration-1000 ease-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="group perspective">
                <motion.div
                  initial={{ scale: 0.9, rotateY: -15 }}
                  whileInView={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative transform transition-all duration-700 preserve-3d hover:scale-105"
                >
                  <div className="glass-effect rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={`/placeholder.svg`}
                      alt={`Project ${index} Original`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="group perspective">
                <motion.div
                  initial={{ scale: 0.9, rotateY: 15 }}
                  whileInView={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative transform transition-all duration-700 preserve-3d hover:scale-105"
                >
                  <div className="glass-effect rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={`/placeholder.svg`}
                      alt={`Project ${index} Background Removed`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};