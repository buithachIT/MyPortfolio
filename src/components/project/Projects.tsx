"use client";

import { projects } from "@/consts/project";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const GITHUB_PROFILE = {
  username: "buithachIT",
  name: "Bùi Công Thạch",
  avatar: "./chongcam.png",
  url: "https://github.com/buithachIT",
  bio: "Frontend Developer | Coding Enthusiast",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#e0e7ef] dark:from-darkbg dark:to-[#22223b] py-20 px-6"
    >
      w{" "}
      <div className="flex flex-col items-center mb-10">
        <Image
          src={GITHUB_PROFILE.avatar}
          alt={GITHUB_PROFILE.username}
          width={80}
          height={80}
          className="rounded-full border-4 border-primary shadow-lg mb-3"
        />
        <div className="text-lg font-semibold text-black dark:text-white">
          {GITHUB_PROFILE.name}{" "}
          <span className="text-primary">@{GITHUB_PROFILE.username}</span>
        </div>
        <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {GITHUB_PROFILE.bio}
        </div>
        <a
          href={GITHUB_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded hover:bg-primary transition text-sm font-medium shadow"
        >
          <FaGithub size={18} /> View GitHub
        </a>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-darktext mb-12">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Explore my latest projects showcasing modern web development
        technologies and creative solutions
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <motion.div
              className="relative bg-white dark:bg-darkbg rounded-2xl shadow-lg overflow-hidden group border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-colors hover:shadow-xl h-full"
              whileHover={{ scale: 1.015, y: -3 }}
              whileTap={{ scale: 0.99 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
                mass: 0.6,
              }}
            >
              <div className="h-48 w-full overflow-hidden bg-[#2563eb] flex items-center justify-center relative">
                {(idx === 0 || idx === 1) && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full shadow-lg">
                      FEATURED
                    </span>
                  </div>
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-contain w-full h-full"
                  draggable={false}
                  priority={idx === 0}
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.features && (
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-3 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/80 transition text-xs font-semibold shadow"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition text-xs font-semibold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
