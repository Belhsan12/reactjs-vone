import React from 'react';
import { motion } from 'framer-motion';
import LandingNavbar from '../components/LandingNavbar';
import Footer from '../components/footer';
import LenisScroll from '../components/lenis-scroll';
import Button from '../components/Button';
import { Users, Lightbulb, HeartHandshake } from 'lucide-react';

const missionItems = [
    {
        icon: Lightbulb,
        title: 'Empower Learning',
        description: 'Provide accessible, high-quality education to learners worldwide, fostering continuous personal and professional growth.'
    },
    {
        icon: Users,
        title: 'Community & Collaboration',
        description: 'Build a supportive community where learners and instructors can connect, share knowledge, and collaborate on projects.'
    },
    {
        icon: HeartHandshake,
        title: 'Innovation & Excellence',
        description: 'Continuously innovate our platform and course content to deliver the most effective and engaging learning experiences.'
    },
];

export default function AboutPage() {
    return (
        <>
            <LenisScroll />
            <LandingNavbar />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-[520px] bg-indigo-500/30 dark:bg-indigo-700/20 blur-[100px]" />
                <div className="absolute rounded-full bottom-1/4 right-1/4 -translate-x-1/2 size-[520px] bg-purple-500/30 dark:bg-purple-700/20 blur-[100px]" />
            </div>
            <main className='px-4 relative z-10 min-h-screen pt-24 md:pt-32 pb-16'>
                <div className="container mx-auto max-w-7xl space-y-16">
                    <motion.section
                        className="text-center py-16 md:py-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                            About Our E-Learning Platform
                        </h1>
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                            We are dedicated to revolutionizing education, making high-quality learning accessible to everyone, everywhere. Our platform connects passionate instructors with eager learners, fostering a global community of knowledge and growth.
                        </p>
                        <Button size="lg" className="shadow-indigo-500/30">
                            Join Our Community
                        </Button>
                    </motion.section>

                    <motion.section
                        className="py-16 md:py-24 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 p-8 md:p-12 border border-slate-200 dark:border-slate-700"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent">
                            Our Mission
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {missionItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <item.icon className="size-12 text-indigo-500 dark:text-indigo-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        className="py-16 md:py-24 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-rose-600 bg-clip-text text-transparent">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                            With a diverse catalog of courses, expert instructors, and a flexible learning environment, we empower you to achieve your academic and career aspirations. Join thousands of satisfied learners today!
                        </p>
                        <Button size="lg" variant="outline">
                            Explore Courses
                        </Button>
                    </motion.section>
                </div>
            </main>
            <Footer />
        </>
    );
}
