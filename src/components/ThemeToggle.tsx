'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import icons
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun), { ssr: false });
const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon), { ssr: false });

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="hover:opacity-80">
                <Sun size={18} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:opacity-80"
        >
            {theme === 'dark' ? <Sun size={18} className='text-yellow-500 dark:text-yellow-300' /> : <Moon size={18} />}
        </button>
    );
} 