import { useRef, useState } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { motion } from "framer-motion";

export default function PlayMusicSection() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    const handleToggleMusic = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <section className="playmusic flex flex-col items-center justify-center py-8">
            <div className="mb-4 flex items-center gap-2">
                <FaMusic className="text-primary" />
                <span className="text-lg font-medium">{t.playmusic.question}</span>
            </div>
            <motion.button
                onClick={handleToggleMusic}
                className={`
                    mt-5 mb-10
                    flex items-center gap-3 px-8 py-3
                    text-lg font-bold rounded-full
                    shadow-md transition-all duration-300
                    border-2 border-primary
                    dark:border-darktextSecondary
                    dark:shadow-sm-darktextSecondary
                    ${playing
                        ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white'
                        : 'bg-primary text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-400'}
                    hover:scale-105 active:scale-95
                `}
                animate={playing ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                transition={playing ? { duration: 0.7, repeat: Infinity, ease: "easeInOut" } : {}}
            >
                <span className="text-xl">
                    {playing ? <FaPause /> : <FaPlay />}
                </span>
                <span>
                    {playing ? t.playmusic.pause : t.playmusic.play}
                </span>
            </motion.button>
            <audio ref={audioRef} src="/chill.mp3" loop />
        </section>
    );
} 