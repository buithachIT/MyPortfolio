"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiVitest,
  SiDocker,
  SiVuedotjs,
  SiMongodb,
  SiNestjs,
  SiAmazon,
  SiAntdesign,
  SiFramer,
  SiGraphql,
  SiWordpress,
  SiNginx,
  SiGithubactions,
  SiUbuntu,
  SiPython,
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

type Skill = { name: string; icon: ReactElement };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "React / Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Ant Design", icon: <SiAntdesign className="text-blue-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js / NestJS", icon: <SiNestjs className="text-red-600" /> },
      { name: "Python", icon: <SiPython /> },
      {
        name: "GraphQL / Apollo",
        icon: <SiGraphql className="text-pink-600" />,
      },
      {
        name: "PostgreSQL / MySQL",
        icon: <SiPostgresql className="text-blue-400" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      {
        name: "Prisma / Drizzle",
        icon: <SiPrisma className="text-emerald-500" />,
      },
      {
        name: "WordPress (Headless)",
        icon: <SiWordpress className="text-blue-500" />,
      },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions className="text-blue-400" />,
      },
      { name: "Linux / VPS", icon: <SiUbuntu className="text-orange-600" /> },
      { name: "Vitest / MSW", icon: <SiVitest className="text-yellow-500" /> },
      { name: "AWS / Vercel", icon: <SiAmazon className="text-orange-500" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="snap-start bg-[#f9fafb] dark:bg-darkbg py-20 px-6 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-darktext mb-12">
        My <span className="text-primary">Skills & Tools</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-5 text-gray-900 dark:text-gray-100">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 24,
                    mass: 0.6,
                  }}
                  className="transform-gpu bg-white dark:bg-darkbg border border-gray-200 dark:border-darktextSecondary rounded-lg p-4 text-center shadow hover:shadow-lg dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-shadow duration-200"
                  style={{ willChange: "transform" }}
                  role="listitem"
                  aria-label={skill.name}
                >
                  <div className="flex items-center justify-center text-2xl md:text-3xl mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        Always learning. Always growing. 🌱
      </p>
    </section>
  );
}
