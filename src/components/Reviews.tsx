import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Amazing telehealth platform! The AI symptom checker is incredibly accurate.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "The video consultation feature is seamless. Best healthcare experience ever!",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Davis",
    rating: 4,
    text: "Very convenient for managing family healthcare needs. Highly recommended!",
    image: "/placeholder.svg"
  },
  {
    name: "David Wilson",
    rating: 5,
    text: "Professional doctors and excellent emergency care support.",
    image: "/placeholder.svg"
  }
];

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,126,189,0.1)_0%,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium inline-block text-purpleMain mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold gradient-text mb-4"
          >
            What Our Users Say
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="min-w-full px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="glass-effect p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{review.name}</h4>
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-neonSilver/80">{review.text}</p>
                    <MessageCircle className="w-8 h-8 text-purpleMain/50 mt-4" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-purpleMain" : "bg-purpleMain/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};