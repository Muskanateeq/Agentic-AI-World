"use client";

import { motion } from "framer-motion";
import { Brain, Cog, Code, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
  },
  {
    icon: Cog,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
  },
  {
    icon: Code,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Powered by Advanced AI
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Built on cutting-edge neural architectures
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.8)",
              }}
              className="bg-gray-900 p-6 transition-all duration-300 rounded-xl"
            >
              {/* Icon Background with Tilted Right-Down Hover Effect */}
              <div className="flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 mb-4 rounded-xl relative"
                  whileHover={{ y: 10, x: -5, rotate: 5 }} // Moves down + left & rotates slightly right
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


