"use client";

import React from "react";
import { motion } from "framer-motion";

const Section4: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 flex items-center justify-center">
      <motion.div
        className="text-center max-w-xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: "all" }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-black mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: "some" }}
        >
          Join Us in Spreading Hope
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: "some" }}
        >
          Your generosity can make a difference. Support our mission to provide
          essential resources and opportunities to those in need.
        </motion.p>
        <motion.a
          href="mailto:ashracorporations@gmail.com"
          className="bg-[#DAA520] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-black hover:text-[#DAA520] transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: "some" }}
        >
          Donate Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Section4;