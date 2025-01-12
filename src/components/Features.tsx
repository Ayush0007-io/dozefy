import { motion } from "framer-motion";
import { Stethoscope, Video, Hospital, FileText, Ambulance, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Symptom Checker",
    description: "Advanced AI-powered symptom analysis with integrated video consultation capabilities.",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Hospital,
    title: "Unified Healthcare Network",
    description: "Seamlessly book appointments across our network of hospitals and clinics.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: FileText,
    title: "Medical Reports",
    description: "Access and manage all your medical records in one secure platform.",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    description: "24/7 emergency response system with real-time ambulance tracking.",
    gradient: "from-red-500/20 to-orange-500/20"
  },
];

export const Features = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,68,173,0.1)_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-2 glass-effect rounded-full text-sm font-medium inline-block text-primary mb-6"
          >
            Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Advanced Healthcare Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Next-generation healthcare at your fingertips
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group perspective"
            >
              <div className="relative transform transition-all duration-1000 preserve-3d hover:rotate-y-180">
                <div className="glass-effect p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-xl">
                  <motion.div 
                    className="bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl inline-block mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};