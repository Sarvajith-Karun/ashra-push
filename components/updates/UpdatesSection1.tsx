"use client";

import React from 'react';
import { updates } from '@/data';
import { motion } from 'framer-motion';

const UpdatesSection1 = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 pt-20 flex flex-col items-center">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 'some' }}
      >
        <h2 className="text-5xl font-bold text-gray-800">Updates</h2>
      </motion.div>

      <motion.div
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        viewport={{ once: true, amount: 'some' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              className="relative bg-white border border-gray-200 p-6 rounded-lg overflow-hidden flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
              style={{ width: '100%' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 'some' }}
            >
              <motion.div
                className="relative w-full h-40 mb-4 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={update.image}
                  alt={update.description}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out"
                />
              </motion.div>
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-600">
                  {update.date}
                </h3>
                <p className="text-gray-600 transition-opacity duration-300 ease-in-out hover:opacity-80">
                  {update.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UpdatesSection1;