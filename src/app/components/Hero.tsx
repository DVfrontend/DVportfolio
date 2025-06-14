"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#1c1c1c] to-[#2c2c2c] px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
      >
        Hi, I&apos;m Daniel
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        I am a Frontend developer who creates responsive, fast and modern
        interfaces using React, TypeScript and Tailwind. I strive to make
        products convenient, beautiful and alive
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          Watch Projects
        </a>
        <a
          href="/Resume_Package.zip"
          download
          className="px-6 py-3 rounded-2xl border border-white text-white font-medium hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
