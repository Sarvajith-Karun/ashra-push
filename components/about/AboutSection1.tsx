"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { FaHeart, FaGlobe, FaBook } from "react-icons/fa";

export function AboutSection1() {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto py-12 flex flex-col md:flex-row items-center px-4 md:px-8">
        <motion.div
          className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            Our Story
            <span className="block w-16 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ASHRA is a female-led youth non-profit organization founded by Shriya, Anshi, and Sadhna on March 15th, 2024.
            What began as an idea on a living room couch has blossomed into a remarkable organization making a large impact.
          </p>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center space-x-4">
              <FaHeart className="text-yellow-500 text-2xl" />
              <span>Passionate about dance, our founders use their art to inspire change.</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaGlobe className="text-yellow-500 text-2xl" />
              <span>First-generation Americans with a deep understanding of cultural and educational gaps.</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaBook className="text-yellow-500 text-2xl" />
              <span>Committed to fostering a more inclusive world through awareness and education.</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-8">
            Join us on this journey and <strong className="text-yellow-500">BE THE HOPE</strong> you wish to see in the world!
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {["/StandardImage.png", "/StandardImage.png", "/StandardImage.png"].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <motion.img
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true, amount: 'some' }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}