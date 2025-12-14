import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CourseCard from '../../components/CourseCard';
import Button from '../../components/Button';
import { userProfile } from '../../data/mockData';

export default function MyLearningPage() {
    const enrolledCourses = userProfile.enrolledCourses;

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
            <motion.h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-purple-500 to-rose-600 bg-clip-text text-transparent" variants={itemVariants}>
                My Learning
            </motion.h1>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                Here are the courses you are currently enrolled in and your progress.
            </motion.p>

            {enrolledCourses.length > 0 ? (
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" variants={containerVariants}>
                    {enrolledCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} delay={index * 0.05} />
                    ))}
                </motion.div>
            ) : (
                <motion.div 
                    className="text-center p-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-xl font-medium mb-4">You are not enrolled in any courses yet.</p>
                    <Link to="/dashboard/courses">
                        <Button>Explore Courses</Button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
}
