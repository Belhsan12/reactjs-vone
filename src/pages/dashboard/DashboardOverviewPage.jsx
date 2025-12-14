import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import CourseCard from '../../components/CourseCard';
import { userProfile, courses, progressStats } from '../../data/mockData';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function DashboardOverviewPage() {
    const recentlyAccessedCourses = userProfile.enrolledCourses.slice(0, 2); // Show a couple of enrolled courses
    const popularCourses = courses.filter(c => !userProfile.enrolledCourses.some(ec => ec.id === c.id)).slice(0, 2);

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
            <motion.h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent" variants={itemVariants}>
                Welcome Back, {userProfile.name.split(' ')[0]}!
            </motion.h1>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                Continue your learning journey and explore new courses.
            </motion.p>

            {/* Quick Stats */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center gap-4">
                        <BookOpen className="size-10 opacity-70" />
                        <div>
                            <p className="text-sm opacity-90">Courses Enrolled</p>
                            <p className="text-3xl font-bold mt-1">{userProfile.enrolledCourses.length}</p>
                        </div>
                    </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Card className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white p-6 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-4">
                        <CheckCircle className="size-10 opacity-70" />
                        <div>
                            <p className="text-sm opacity-90">Courses Completed</p>
                            <p className="text-3xl font-bold mt-1">{userProfile.completedCourses}</p>
                        </div>
                    </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Card className="bg-gradient-to-br from-amber-500 to-rose-600 text-white p-6 rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-4">
                        <Clock className="size-10 opacity-70" />
                        <div>
                            <p className="text-sm opacity-90">Hours Spent</p>
                            <p className="text-3xl font-bold mt-1">{userProfile.hoursSpent}</p>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>

            {/* Recently Accessed Courses */}
            {recentlyAccessedCourses.length > 0 && (
                <motion.div variants={itemVariants}>
                    <div className="flex items-center justify-between mb-4 mt-8">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Continue Learning</h2>
                        <Link to="/dashboard/my-learning">
                            <Button variant="ghost" size="sm" className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                                View All
                            </Button>
                        </Link>
                    </div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
                        {recentlyAccessedCourses.map((course, index) => (
                            <CourseCard key={course.id} course={course} delay={index * 0.1} />
                        ))}
                    </motion.div>
                </motion.div>
            )}

            {/* Explore New Courses */}
            <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Explore New Courses</h2>
                    <Link to="/dashboard/courses">
                        <Button variant="ghost" size="sm" className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                            View All
                        </Button>
                    </Link>
                </div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
                    {popularCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} delay={index * 0.1} />
                    ))}
                </motion.div>
            </motion.div>

            {/* Overall Learning Progress */}
            <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 mt-8">Overall Progress</h2>
                <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-slate-600 dark:text-slate-400">Total Courses Completed: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{progressStats.coursesCompleted}</span> / {progressStats.totalCourses}</p>
                            <ProgressBar progress={Math.round((progressStats.coursesCompleted / progressStats.totalCourses) * 100)} className="mt-2 mb-6" />

                            <p className="text-slate-600 dark:text-slate-400">Total Hours Learned: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{progressStats.hoursLearned}</span></p>
                            <p className="text-slate-600 dark:text-slate-400 mt-2">Average Quiz Score: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{progressStats.averageScore}%</span></p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Skill Breakdown</h3>
                            <div className="space-y-3">
                                {progressStats.skillBreakdown.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center text-sm text-slate-700 dark:text-slate-300">
                                            <span>{skill.skill}</span>
                                            <span className="font-medium">{skill.progress}%</span>
                                        </div>
                                        <ProgressBar progress={skill.progress} height="h-2" fillColor={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`} className="mt-1" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
}
