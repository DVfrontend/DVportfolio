"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [stack, setStack] = useState<{ name: string; icon: string }[]>([]);

  useEffect(() => {
    fetch("/data/stack.json")
      .then((res) => res.json())
      .then((data) => setStack(data))
      .catch((err) => console.error("Failed to load stack.json", err));
  }, []);

  return (
    <section id="about" className="py-20 px-4 scroll-mt-20">
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
          responsive, and highly performant user interfaces...
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

          <div className="flex flex-wrap justify-center gap-6">
            {stack.map(({ name, icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={icon}
                  alt={name}
                  className="w-10 h-10"
                  width={40}
                  height={40}
                />
                <span className="text-sm sm:text-base">{name}</span>
              </motion.div>
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
