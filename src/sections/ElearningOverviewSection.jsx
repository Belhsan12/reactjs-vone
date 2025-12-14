import React from 'react';
import SectionTitle from '../components/section-title';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Zap } from 'lucide-react';

const features = [
    {
        icon: BookOpen,
        title: 'Vast Course Library',
        description: 'Explore thousands of courses on cutting-edge topics, from web development to data science and design.',
    },
    {
        icon: Users,
        title: 'Expert Instructors',
        description: 'Learn from industry leaders and passionate educators with real-world experience.',
    },
    {
        icon: Award,
        title: 'Earn Certificates',
        description: 'Gain verifiable certificates upon completion to showcase your new skills to employers.',
    },
    {
        icon: Zap,
        title: 'Flexible Learning',
        description: 'Learn at your own pace, on any device, with lifetime access to course materials.',
    },
];

export default function ElearningOverviewSection() {
    return (
        <section id="overview" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 mx-auto max-w-7xl mt-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 dark:opacity-5">
                <div className="absolute top-1/4 left-1/4 size-64 bg-indigo-400 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 size-64 bg-purple-400 blur-[100px] rounded-full" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Unlock Your Potential with Our E-Learning Platform"
                    description="Our platform is designed to make learning accessible, engaging, and effective. Discover a personalized learning path tailored to your goals."
                />

                <motion.div
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <feature.icon className="size-12 mx-auto mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
