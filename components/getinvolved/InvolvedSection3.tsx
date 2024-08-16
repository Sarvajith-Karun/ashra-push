"use client"

import React from 'react';
import { FaUsers, FaHandsHelping, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InvolvedSection3 = () => {
  return (
    <section className="bg-white py-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 'some' }}
      >
        <h2 className="text-5xl font-bold text-black mb-16">Join Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 'some' }}
          >
            <FaUsers className="text-[#DAA520] text-6xl mb-6" />
            <h3 className="text-3xl font-semibold text-black mb-4">Dance Team</h3>
            <p className="text-lg text-black mb-6 px-4">
              The ASHRA dance team includes a group of dedicated highschoolers creating a fun and welcoming environment both within the team and outside the team. This group of youth learn both choreography and about our dedicated cause, while having a good time and making a difference one performance at a time. Want to join? Great! No experience needed, just a positive attitude and the willingness to learn. This team may also help with volunteer activities.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 'some' }}
          >
            <FaHandsHelping className="text-[#DAA520] text-6xl mb-6" />
            <h3 className="text-3xl font-semibold text-black mb-4">Volunteer Team</h3>
            <p className="text-lg text-black mb-6 px-4">
              The ASHRA volunteer team is made up of dedicated highschoolers striving to create tangible change and progress. The role of this team is shown in various ways, from helping teach culture classes to gaining donations at different events throughout Minnesota. This team also engages in extended volunteer opportunities by representing ASHRA during various organizations' food banking and grocery bagging events.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <h3 className="text-3xl font-semibold text-black mb-4">Interested in Joining?</h3>
          <p className="text-lg text-black mb-6">
            Fill out the form in our Linktree, and our team will reach out ASAP!
          </p>
          <a
            href="https://tr.ee/XnTazh5exc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg text-[#DAA520] hover:text-black transition-colors duration-300"
          >
            <FaLink className="mr-2" />
            Linktree
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InvolvedSection3;