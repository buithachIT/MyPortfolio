'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function FooterSection() {
    return (
        <footer className="bg-white dark:bg-darkbg py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        &copy; {new Date().getFullYear()} Công Thạch. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <motion.a
                            href="https://github.com/buithachIT"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/buithach"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="mailto:buithachit@gmail.com"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        >
                            <Mail size={24} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 