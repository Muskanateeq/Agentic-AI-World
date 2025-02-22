"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Network, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal Intelligence",
    description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: Network,
    title: "Cognitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NeuralCapabilities() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Neural Capabilities
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Powered by next-generation artificial intelligence
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {capabilities.map((capability, index) => (
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
                  <capability.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">{capability.title}</h3>
              <p className="text-gray-400 text-center">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


