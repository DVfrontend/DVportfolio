"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/features/theme-toggle/ui/ThemeToggle";
import {
  Menu,
  X,
  User,
  Mail,
  FolderKanban,
} from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About", icon: <User size={16} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={16} /> },
    { href: "#projects", label: "Projects", icon: <FolderKanban size={16} /> },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1C1C1C] backdrop-blur-md border-b border-white/10 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <motion.h1
          className="text-xl sm:text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Daniel Vartanov
        </motion.h1>

        {/* Desktop menu */}
        <motion.ul
          className="hidden sm:flex gap-6 text-sm font-medium items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map(({ href, label, icon }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-1 hover:text-gray-300 transition"
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </motion.ul>

        {/* Mobile button */}
        <button
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden px-6 pb-4 flex flex-col gap-4 bg-[#1C1C1C]/95 text-sm text-white"
          >
            {navItems.map(({ href, label, icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-1 hover:text-gray-300 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
              
            ))}
            <li>
              <ThemeToggle />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};
