import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out our platform",
    features: ["Basic AI features", "Up to 100 requests/month", "Community support", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Everything you need for a growing business",
    features: ["Advanced AI features", "Unlimited requests", "Priority support", "Custom integrations", "Advanced analytics", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: ["Custom AI models", "Dedicated support", "SLA guarantee", "Custom deployment", "Advanced security", "Custom training"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1)_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium inline-block text-primary mb-6"
          >
            Pricing
          </motion.span>
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-textSecondary">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-100 shadow-sm'} hover:shadow-md transition-all duration-300`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-textPrimary mb-2">
                  {plan.name}
                </h3>
                <p className="text-textSecondary mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-textSecondary">/month</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-textSecondary">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-white'} text-${plan.popular ? 'white' : 'primary'} border-2 border-primary/20 hover:border-primary/40`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};