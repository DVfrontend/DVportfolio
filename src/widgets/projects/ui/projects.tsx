"use client";

import { Project } from "@/entities/project/model/project";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects: Project[] = [
  {
    title: "Filmaxis",
    description:
      "Film portal with a catalog of films, trailers and animation. Framer Motion used",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind", "Next.js"],
    github: "https://github.com/DVfrontend/filmaxis-next.js",
  },
  {
    title: "Snaplet",
    description:
      "Online store with a shopping cart, implemented on Zustand + Next.js",
    tech: ["Next.js", "Zustand", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/DVfrontend/snaplet-next.js",
  },
  {
    title: "Forecast",
    description: "Weather Forecast App with OpenWeather API",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/DVfrontend/forecast-vite",
  },
  {
    title: "To-Do",
    description:
      "A modern, minimalist ToDo app built with React and TypeScript, featuring animations and local storage support.",
    tech: ["React", "TypeScript", "Next.js", "Framer Motion"],
    github: "https://github.com/DVfrontend/to-do",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2a2a2a] rounded-2xl p-6 text-white shadow-md hover:shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
