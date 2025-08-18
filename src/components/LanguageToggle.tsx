'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

// Dynamically import icons
const Globe = dynamic(() => import('lucide-react').then(mod => mod.Globe), { ssr: false });

export default function LanguageToggle() {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="hover:opacity-80">
                <Globe size={18} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setLanguage(language === 'vn' ? 'en' : 'vn')}
            className="hover:opacity-80 flex items-center gap-1"
        >
            <Globe size={18} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </button>
    );
} 