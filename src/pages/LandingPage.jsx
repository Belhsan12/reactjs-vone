import LenisScroll from "../components/lenis-scroll";
import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/footer";
import HeroSection from "../sections/HeroSection";
import ElearningOverviewSection from "../sections/ElearningOverviewSection";
import FeaturedCoursesSection from "../sections/FeaturedCoursesSection";

export default function LandingPage() {
    return (
        <>
            <LenisScroll />
            <LandingNavbar />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-[520px] bg-indigo-500/30 dark:bg-indigo-700/20 blur-[100px]" />
                <div className="absolute rounded-full bottom-1/4 right-1/4 -translate-x-1/2 size-[520px] bg-purple-500/30 dark:bg-purple-700/20 blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-[520px] bg-emerald-500/30 dark:bg-emerald-700/20 blur-[100px]" />
            </div>
            <main className='px-4 relative z-10'>
                <HeroSection />
                <ElearningOverviewSection />
                <FeaturedCoursesSection />
            </main>
            <Footer />
        </>
    );
}
