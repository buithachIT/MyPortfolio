'use client';


import HeroSection from '../../components/homeSections/hero.component';
import AboutSection from '../../components/homeSections/about.component';
import SkillsSection from '../../components/homeSections/skill.component';
import ExperienceSection from '../../components/homeSections/experience.component';
import FooterSection from '../../components/homeSections/footer.component';

export default function Hero() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <FooterSection />
        </div>
    );
}