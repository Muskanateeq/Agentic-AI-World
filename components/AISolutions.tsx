"use client";

import { motion } from "framer-motion";
import { Building2, Network, Shield } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
  },
  {
    icon: Network,
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
  },
  {
    icon: Shield,
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AISolutions() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            AI Solutions
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Transforming industries with intelligent agents
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.8)",
              }}
              className="bg-gray-900 p-6 transition-all duration-300 rounded-xl"
            >
              {/* Icon inside a white square with hover effect */}
              <div className="flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 mb-4 rounded-xl relative"
                  whileHover={{ y: 10, x: -5, rotate: 5 }} // Moves right-down slightly
                  transition={{ duration: 0.3 }}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">{solution.title}</h3>
              <p className="text-gray-400 text-center">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


