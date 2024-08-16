"use client"

import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InvolvedSection2 = () => {
  return (
    <section className="bg-[#F8F8F8] py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 'some' }}
      >
        <h2 className="text-4xl font-bold text-black mb-12">Get In Touch with ASHRA</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 'some' }}
          >
            <FaInstagram className="text-[#DAA520] text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2">Follow Us on Instagram</h3>
            <a
              href="https://www.instagram.com/ashra.corp/?igsh=aTNxcmg2YzA3bTVx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#DAA520] hover:text-black transition-colors duration-300"
            >
              @ashra.corp
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 'some' }}
          >
            <FaEnvelope className="text-[#DAA520] text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2">Email Us</h3>
            <a
              href="mailto:ashracorporations@gmail.com"
              className="text-lg text-[#DAA520] hover:text-black transition-colors duration-300"
            >
              ashracorporations@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvolvedSection2;