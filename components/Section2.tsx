"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRegLightbulb } from "react-icons/fa";

const MissionSection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: "some" }}
          >
            <h2 className="text-4xl font-bold text-black mb-8">
              About <span className="text-yellow-500">ASHRA</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Our mission is to provide essential support and resources to orphanages and impoverished families across South Asia,
              ensuring that vulnerable children receive the care and opportunities they deserve. We are dedicated to raising awareness
              about the challenges and corrupt practices affecting low-income infrastructure.
            </p>
            <ul className="space-y-8 text-gray-700">
              <li className="flex items-center space-x-4">
                <FaUsers className="text-yellow-500 text-2xl" />
                <span>Foster cultural and social awareness, celebrating South Asian heritage.</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaRegLightbulb className="text-yellow-500 text-2xl" />
                <span>Empower communities with educational resources and support.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: "some" }}
            className="relative w-full h-72 lg:h-96"
          >
            <img
              src="/StandardImage.png"
              alt="Mission Image"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;