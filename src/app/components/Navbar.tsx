"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#1C1C1C]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <motion.h1
          className="text-xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          Daniel Vartanov Portfolio
        </motion.h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="#projects" className="hover:text-gray-300 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/Dani_Vartanov_CV.pdf"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
