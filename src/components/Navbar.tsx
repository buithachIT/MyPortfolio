'use client';

import { Search, Volume2, Rss, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <header className="sticky min-h-20 bg-[#a3d9ff] dark:bg-dusk-gradient w-full top-0 z-50 md:pr-40 md:pl-40 mx-auto pb-15 flex items-center justify-between px-6 md:py-2 snap-start">
            <Link href="/" className="text-xl font-bold select-none flex items-center gap-2">
                <span className="text-blue-500">Công</span>
                <span className="text-blue-500">Thạch</span>
            </Link>

            <nav className="hidden md:flex gap-6 text-md font-medium text-black dark:text-white">
                <Link
                    href="/"
                    className={`hover:text-primary transition ${pathname === '/' ? 'text-primary' : ''}`}
                >
                    {t.nav.home}
                </Link>
                <Link
                    href="/projects"
                    className={`hover:text-primary transition ${pathname === '/projects' ? 'text-primary' : ''}`}
                >
                    {t.nav.projects}
                </Link>
                <Link
                    href="/contact"
                    className={`hover:text-primary transition ${pathname === '/contact' ? 'text-primary' : ''}`}
                >
                    {t.nav.contact}
                </Link>
            </nav>

            <div className="flex items-center gap-4 text-black dark:text-white">
                <LanguageToggle />
                <ThemeToggle />
                <a

                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block"
                >
                    <Image
                        src="/chongcam.png"
                        alt="Avatar"
                        width={36}
                        height={36}
                        className="rounded-full border-2 border-primary shadow hover:scale-105 transition-transform"
                        priority
                    />
                </a>
                <button
                    className="md:hidden hover:opacity-80"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-[#a3d9ff] dark:bg-dusk-gradient md:hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            <Link
                                href="/"
                                className={`text-lg font-medium hover:text-primary transition ${pathname === '/' ? 'text-primary' : 'text-black dark:text-white'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.home}
                            </Link>
                            <Link
                                href="/projects"
                                className={`text-lg font-medium hover:text-primary transition ${pathname === '/projects' ? 'text-primary' : 'text-black dark:text-white'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.projects}
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-lg font-medium hover:text-primary transition ${pathname === '/contact' ? 'text-primary' : 'text-black dark:text-white'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.contact}
                            </Link>
                            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button className="hover:opacity-80"><Search size={20} /></button>
                                <button className="hover:opacity-80"><Volume2 size={20} /></button>
                                <LanguageToggle />
                                <button className="hover:opacity-80"><Rss size={20} /></button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
} 