"use client";

import React from "react";
import { motion } from "framer-motion";
import { activities } from "@/data";

const Section3: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <motion.div
        className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: "some" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-16">
          Our Activities
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          viewport={{ once: true, amount: "all" }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div
                className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: "some" }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="rounded-full object-cover w-full h-full"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                {activity.title}
              </h3>
              <p className="text-lg text-black">{activity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section3;