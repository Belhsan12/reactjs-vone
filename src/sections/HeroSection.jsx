import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { PlayCircle, GraduationCap } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 overflow-hidden pt-24 md:pt-0 pb-16">
            {/* Background elements with blur */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-indigo-500/20 dark:bg-indigo-700/10 rounded-full blur-[150px]" />
                <div className="absolute top-1/4 right-1/4 size-[500px] bg-purple-500/20 dark:bg-purple-700/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 left-1/4 size-[400px] bg-emerald-500/20 dark:bg-emerald-700/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Learn Anything, Anytime, Anywhere
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                >
                    Empower your future with a vast library of expert-led courses. Start your learning journey today!
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                >
                    <Link to="/dashboard/courses">
                        <Button size="lg" className="shadow-indigo-500/30">
                            <GraduationCap className="size-5" />
                            Explore Courses
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="secondary" size="lg" className="hover:bg-white/20 dark:hover:bg-slate-700/50">
                            <PlayCircle className="size-5" />
                            Start Free Trial
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
