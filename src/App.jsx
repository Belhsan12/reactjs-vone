import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection'; // Renamed import
import ContactSection from './components/ContactSection';

export default function App() {
    return (
        <div className="App bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 min-h-screen text-white font-sans">
            <main>
                <HeroSection />
                <StatsSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <AchievementsSection />
                <ContactSection />
            </main>
        </div>
    );
}
