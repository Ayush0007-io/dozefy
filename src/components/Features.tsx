import { motion } from "framer-motion";
import { Zap, Rocket, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build and deploy your AI startup in minutes, not months.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security to keep your data safe and sound.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Rocket,
    title: "Scale Instantly",
    description: "Built to scale with your growing user base from day one.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI to automate and optimize.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
];

export const Features = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1)_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium inline-block text-primary mb-6"
          >
            Features
          </motion.span>
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-textSecondary">
            Powerful features to help you build faster
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
              <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-white p-3 rounded-xl inline-block mb-4 shadow-sm">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">
                  {feature.title}
                </h3>
                <p className="text-textSecondary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};