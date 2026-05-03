"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaHandshake, FaFacebook } from "react-icons/fa";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="relative justify-between max-w-5xl mx-auto px-8 lg:px-0 py-16 flex flex-col md:flex-row items-center gap-20 md:gap-10 lg:gap-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3"
      >
        <Image
          src="/me.png"
          width={300}
          height={350}
          alt="Avatar"
          className="rounded-full border-4 border-primary shadow-lg hover:scale-105 transition-transform"
        />
        <h2 className="text-2xl font-bold mt-2 text-dark dark:text-darktext">
          {t.about.titleHighlight}
        </h2>
        <p className="text-primary font-semibold">Fullstack Developer</p>
        <div className="flex gap-3 mt-2">
          <a
            href="mailto:buithach.it@gmail.com"
            className="text-primary hover:underline"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/buithachIT"
            target="_blank"
            className="text-primary hover:underline"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.facebook.com/3110607TH/"
            target="_blank"
            className="text-primary hover:underline"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </motion.div>
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300"
      >
        <p>
          {t.about.description.split("\n").map((line, idx) => (
            <span key={idx} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded font-medium mt-4">
          <span className="flex-shrink-0">
            <FaHandshake className="text-base" />
          </span>
          <span>
            <strong>{language === "vn" ? "Kỹ năng mềm" : "Soft skills"}</strong>
            :{" "}
            {language === "vn"
              ? "Hòa đồng, Nhanh chóng thích nghi với môi trường mới."
              : "Sociable, adaptable to new environments."}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
