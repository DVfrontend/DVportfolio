"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#1c1c1c] to-[#2c2c2c] px-4">
      <motion.img
        src="/DV.jpg"
        alt="Daniel's photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white mb-6 shadow-lg"
      />

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
        I am a Frontend Developer focused on building fast, adaptive, and modern
        user interfaces with React, TypeScript, and Tailwind CSS. I prioritize
        clean architecture, smooth user experience, and attention to visual
        detail to make products intuitive, engaging, and reliable.
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
          href="/resume.zip"
          download
          className="px-6 py-3 rounded-2xl border border-white text-white font-medium hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          My Development Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "REST API",
            "Vite",
          ].map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white text-sm sm:text-base"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
