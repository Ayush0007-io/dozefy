import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is this AI Startup Kit?",
    answer: "Our AI Startup Kit is a comprehensive solution that helps you launch your AI-powered business quickly and efficiently. It includes everything you need to get started, from design templates to functional components."
  },
  {
    question: "Do I need coding experience?",
    answer: "No coding experience is required! Our platform is designed to be user-friendly and accessible to everyone, regardless of technical background."
  },
  {
    question: "Can I customize the templates?",
    answer: "Yes, absolutely! All our templates are fully customizable to match your brand identity and specific needs."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including documentation, video tutorials, and dedicated customer service to help you every step of the way."
  },
  {
    question: "Is it suitable for enterprise use?",
    answer: "Yes, our platform is scalable and suitable for businesses of all sizes, from startups to enterprise-level organizations."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1)_0%,transparent_50%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium inline-block text-primary mb-6"
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our platform
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <AccordionTrigger className="px-6 text-white hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};