import { motion } from "framer-motion";
import { Shield, Heart, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "End-to-end encryption for all your medical data"
  },
  {
    icon: Heart,
    title: "Quality Care",
    description: "Access to top healthcare professionals"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock medical assistance"
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Manage healthcare for the whole family"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,126,189,0.1)_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold gradient-text mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neonSilver/80"
          >
            Experience the future of healthcare
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-3d glass-effect p-6 rounded-xl"
            >
              <div className="mb-4">
                <benefit.icon className="w-12 h-12 text-purpleMain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-neonSilver/80">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};