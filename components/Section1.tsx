"use client";

import React from "react";
import { motion } from "framer-motion";

const Section1: React.FC = () => {
  return (
    <section className="pt-16">
      <motion.section
        className="bg-cover bg-center h-[75vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/HeroBG.jpeg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: "some" }}
      >
        <motion.div
          className="text-center bg-white bg-opacity-75 p-6 sm:p-8 rounded-lg mx-4 sm:mx-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: "some" }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black mb-4">
            ASHRA: <span className="text-[#DAA520]">Be the Hope</span>
          </h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: "some" }}
          >
            Welcome to ASHRA, where our mission is to provide essential support and resources to orphanages and impoverished families across South Asia.
          </motion.p>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Section1;