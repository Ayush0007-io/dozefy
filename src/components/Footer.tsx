import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1)_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">AI Startup Kit</h3>
            <p className="text-gray-400">
              Build your next AI startup faster than ever with our comprehensive toolkit.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Documentation", "Guides"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "License"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2024 AI Startup Kit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};