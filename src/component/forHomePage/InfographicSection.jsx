import React from "react";
import { motion } from "framer-motion";

const InfographicSection = () => {
  return (
    <div className="py-12 bg-white px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-semibold text-center mb-6">Carbon Cycle Infographic</h2>
      <div className="flex justify-center">
        <motion.svg
          width="400"
          height="400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Example of animated GHG circles */}
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            fill="green"
            animate={{ cx: 300 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="300"
            cy="100"
            r="50"
            fill="blue"
            animate={{ cx: 100 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default InfographicSection;
