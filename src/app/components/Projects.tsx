"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

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
      "Online store with a shopping cart, implemented on Redux Toolkit + Next.js",
    tech: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
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
    tech: ["React", "TypeScript", "Next.js", "Framer-Motion"],
    github: "https://github.com/DVfrontend/to-do",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#1C1C1C] px-4">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2a2a2a] rounded-2xl p-6 text-white shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="hover:text-gray-400"
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
