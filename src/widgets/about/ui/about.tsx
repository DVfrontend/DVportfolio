"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m a dedicated Frontend Developer focused on building clean,
          responsive, and highly performant user interfaces. With deep knowledge
          of modern technologies and frameworks, I turn complex ideas into
          elegant, functional solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold  mb-6">
            My Development Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML&CSS",
              "SCSS",
              "JavaScript",
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "REST API",
              "Vite",
              "Zustand",
              "TanStack Query",
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full backdrop-blur-sm border text-sm sm:text-base"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="https://www.upwork.com/freelancers/~0119dcccdfa3e27bc5?mp_source=share"
            className="inline-block px-6 py-3 bg-white text-[#1C1C1C] rounded-full font-medium tracking-wide"
          >
            Ready for challenging freelance projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
