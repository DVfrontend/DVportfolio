"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1C1C1C] text-white px-6 text-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold mb-4"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl mb-6"
      >
        Page not found
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg text-gray-400 mb-8 max-w-md"
      >
        You may have entered the wrong address or the page may have been removed
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
        >
          Return to home
        </Link>
      </motion.div>
    </div>
  );
}
