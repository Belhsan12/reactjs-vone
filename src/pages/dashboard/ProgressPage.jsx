import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import { progressStats, userProfile } from '../../data/mockData';
import { BarChart, TrendingUp, Award, UserCheck, BookOpen, Clock } from 'lucide-react'; // Added BookOpen, Clock

export default function ProgressPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent" variants={itemVariants}>
                My Progress & Analytics
            </motion.h1>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                Track your learning journey, visualize your progress, and celebrate your achievements.
            </motion.p>

            {/* Key Metrics */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Card className="flex items-center gap-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-lg shadow-indigo-500/10 dark:shadow-indigo-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <BookOpen className="size-10 text-indigo-600 dark:text-indigo-400" />
                        <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Courses Completed</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{progressStats.coursesCompleted}</p>
                        </div>
                    </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Card className="flex items-center gap-4 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 dark:from-emerald-900/20 dark:to-blue-900/20 p-6 rounded-xl shadow-lg shadow-emerald-500/10 dark:shadow-emerald-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <Clock className="size-10 text-emerald-600 dark:text-emerald-400" />
                        <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Hours Learned</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{progressStats.hoursLearned}</p>
                        </div>
                    </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Card className="flex items-center gap-4 bg-gradient-to-br from-amber-500/10 to-rose-500/10 dark:from-amber-900/20 dark:to-rose-900/20 p-6 rounded-xl shadow-lg shadow-amber-500/10 dark:shadow-amber-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <Award className="size-10 text-amber-600 dark:text-amber-400" />
                        <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Certificates Earned</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{userProfile.certificatesEarned}</p>
                        </div>
                    </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Card className="flex items-center gap-4 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 dark:from-cyan-900/20 dark:to-sky-900/20 p-6 rounded-xl shadow-lg shadow-cyan-500/10 dark:shadow-cyan-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <UserCheck className="size-10 text-cyan-600 dark:text-cyan-400" />
                        <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Average Score</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{progressStats.averageScore}%</p>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>

            {/* Charts Placeholders */}
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Card className="p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Courses Completion Trend</h2>
                        <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
                            <BarChart className="size-16 opacity-50" />
                            <p className="ml-4">Chart Placeholder</p>
                        </div>
                    </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Card className="p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">Hours Spent per Month</h2>
                        <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
                            <TrendingUp className="size-16 opacity-50" />
                            <p className="ml-4">Chart Placeholder</p>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>

            {/* Skill Progress Overview */}
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    Skill Progress Overview
                </h2>
                <Card className="p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="space-y-4">
                        {progressStats.skillBreakdown.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 text-base mb-1">
                                    <span>{skill.skill}</span>
                                    <span className="font-semibold">{skill.progress}%</span>
                                </div>
                                <ProgressBar progress={skill.progress} height="h-3" rounded="rounded-full" fillColor={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`} />
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
}
