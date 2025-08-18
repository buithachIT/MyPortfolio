'use client';

import { motion } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiNodedotjs,
    SiPostgresql, SiMysql, SiFirebase, SiPrisma, SiVitest, SiPostman, SiGit, SiGithub, SiDocker, SiVercel,
    SiVuedotjs,
    SiMongodb,
    SiExpress,
    SiNestjs,
    SiPython,
    SiAmazon,

} from 'react-icons/si';

import type { ReactElement } from "react";

const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 }
};

type Skill = { name: string; icon: ReactElement };

const groups: { title: string; items: Skill[] }[] = [
    {
        title: 'Frontend',
        items: [
            { name: 'HTML5', icon: <SiHtml5 /> },
            { name: 'CSS3', icon: <SiCss3 /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'React', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'VueJs', icon: <SiVuedotjs /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },

        ]
    },
    {
        title: 'Backend',
        items: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Nest.js', icon: <SiNestjs /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'Prisma ORM', icon: <SiPrisma /> },
        ]
    },
    {
        title: 'Tools & DevOps',
        items: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Vitest / Jest', icon: <SiVitest /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Vercel', icon: <SiVercel /> },
            { name: 'AWS', icon: <SiAmazon className="text-orange-500" /> }
        ]
    }
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
                                    whileHover={{ y: -4, scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white dark:bg-darkbg border border-gray-200 dark:border-darktextSecondary rounded-lg p-4 text-center shadow hover:shadow-lg dark:hover:shadow-darktextSecondary transition"
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
