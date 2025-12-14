import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Avatar from '../../components/Avatar';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import CourseCard from '../../components/CourseCard';
import { userProfile, progressStats } from '../../data/mockData';
import { Mail, BookOpen, Clock, Award, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
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
            <motion.h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-rose-500 to-amber-600 bg-clip-text text-transparent" variants={itemVariants}>
                My Profile
            </motion.h1>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                Manage your profile information and track your learning journey.
            </motion.p>

            {/* Profile Info Card */}
            <motion.div variants={itemVariants}>
                <Card className="p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <Avatar src={userProfile.avatar} alt={userProfile.name} size="xl" className="shadow-lg shadow-indigo-500/20" />
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{userProfile.name}</h2>
                        <p className="text-slate-600 dark:text-slate-300 flex items-center justify-center md:justify-start gap-2 mb-3">
                            <Mail className="size-5 text-indigo-500" /> {userProfile.email}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            {userProfile.bio}
                        </p>
                        <Button variant="secondary" size="sm">
                            <Edit className="size-4" />
                            Edit Profile
                        </Button>
                    </div>
                </Card>
            </motion.div>

            {/* Learning Statistics */}
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 bg-gradient-to-r from-indigo-500 to-emerald-600 bg-clip-text text-transparent">
                    Learning Statistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center p-6">
                        <BookOpen className="size-10 text-indigo-500 mx-auto mb-3" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">Courses Completed</p>
                        <p className="text-4xl font-bold text-slate-900 dark:text-slate-100 mt-2">{progressStats.coursesCompleted}</p>
                    </Card>
                    <Card className="text-center p-6">
                        <Clock className="size-10 text-purple-500 mx-auto mb-3" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">Hours Learned</p>
                        <p className="text-4xl font-bold text-slate-900 dark:text-slate-100 mt-2">{progressStats.hoursLearned}</p>
                    </Card>
                    <Card className="text-center p-6">
                        <Award className="size-10 text-amber-500 mx-auto mb-3" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">Certificates Earned</p>
                        <p className="text-4xl font-bold text-slate-900 dark:text-slate-100 mt-2">{userProfile.certificatesEarned}</p>
                    </Card>
                </div>
            </motion.div>

            {/* Skill Breakdown */}
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Skill Progress
                </h2>
                <Card className="p-6">
                    <div className="space-y-4">
                        {progressStats.skillBreakdown.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 text-base mb-1">
                                    <span>{skill.skill}</span>
                                    <span className="font-semibold">{skill.progress}%</span>
                                </div>
                                <ProgressBar progress={skill.progress} height="h-2.5" fillColor={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`} />
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* Enrolled Courses */}
            {userProfile.enrolledCourses.length > 0 && (
                <motion.div variants={itemVariants}>
                    <div className="flex items-center justify-between mb-6 mt-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                            Your Enrolled Courses
                        </h2>
                        <Link to="/dashboard/my-learning">
                            <Button variant="ghost" size="sm" className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                                View All
                            </Button>
                        </Link>
                    </div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" animate="visible" variants={containerVariants}>
                        {userProfile.enrolledCourses.map((course, index) => (
                            <CourseCard key={course.id} course={course} delay={index * 0.1} />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}
