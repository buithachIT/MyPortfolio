"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { getExperiences } from "@/utils/experience";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const experiences = getExperiences(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 snap-start"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {language === "vn" ? (
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              Kinh nghiệm{" "}
              <p className="text-blue-600 dark:text-blue-400 text-4xl md:text-5xl ml-2">
                làm việc
              </p>
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              My{" "}
              <p className="text-blue-600 dark:text-blue-400 text-4xl md:text-5xl ml-2">
                Experience
              </p>
            </h2>
          )}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.experience?.subtitle ||
              "My professional journey and achievements"}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${experience.color} shadow-lg z-10`}
                >
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.015, y: -3 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 24,
                      mass: 0.6,
                    }}
                    className="transform-gpu bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-200"
                    style={{ willChange: "transform" }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 rounded-xl ${experience.color} text-white`}
                        >
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.position}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {t.experience?.technologies || "Technologies:"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Award size={16} className="text-yellow-500" />
                        {t.experience?.achievements || "Key Achievements:"}
                      </h4>
                      <div className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <p
                            key={idx}
                            className="text-xs text-gray-600 dark:text-gray-400"
                          >
                            • {achievement}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>{t.experience?.workTogether || "Let's Work Together"}</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
