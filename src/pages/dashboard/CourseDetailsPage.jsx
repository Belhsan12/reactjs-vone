import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import ProgressBar from '../../components/ProgressBar';
import Avatar from '../../components/Avatar';
import { courses, instructors } from '../../data/mockData';
import { PlayCircle, Clock, BarChart2, CheckCircle, Lock, User } from 'lucide-react';

export default function CourseDetailsPage() {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
            >
                <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
                <p className="text-lg">The course you are looking for does not exist or has been removed.</p>
                <Link to="/dashboard/courses">
                    <Button className="mt-6">Back to Courses</Button>
                </Link>
            </motion.div>
        );
    }

    const instructor = instructors.find(i => i.id === course.instructorId);

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
            {/* Course Header */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:w-2/3">
                        <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner shadow-slate-300/30 dark:shadow-slate-900/30">
                            <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                                <PlayCircle className="size-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {course.title}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300 text-lg mb-4">
                            {course.longDescription}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="flex items-center gap-1"><Clock className="size-4 text-purple-500" /> {course.duration}</span>
                            <span className="flex items-center gap-1"><BarChart2 className="size-4 text-emerald-500" /> {course.level}</span>
                            <Badge variant="info">{course.category}</Badge>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-4 p-4 lg:p-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 mt-6 lg:mt-0 lg:pl-8">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Instructor</h2>
                        <Link to={`/dashboard/instructors`} className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Avatar src={instructor?.avatar} alt={instructor?.name} size="lg" />
                            <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">{instructor?.name}</span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-center lg:text-left">{instructor?.bio.split('.')[0]}.</p>
                        <div className="w-full mt-4">
                            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-2">Your Progress</h3>
                            <ProgressBar progress={course.progress} className="mb-2" />
                            <p className="text-sm text-slate-600 dark:text-slate-400 text-right">{course.progress}% Completed</p>
                        </div>
                        <Link to={`/dashboard/courses/${course.id}/lesson/${course.lessons[0].id}`}>
                            <Button size="lg" className="w-full mt-6">
                                {course.progress > 0 ? 'Continue Course' : 'Start Course'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Lesson List */}
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent">
                    Course Content
                </h2>
                <Card className="p-0 overflow-hidden">
                    <ul className="divide-y divide-slate-200 dark:divide-slate-700">
                        {course.lessons.map((lesson, index) => (
                            <li key={lesson.id} className={`flex items-center justify-between p-4 md:p-5 group ${lesson.status === 'locked' ? 'bg-slate-50 dark:bg-slate-800/50 opacity-80' : 'hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors'}`}>
                                <Link
                                    to={lesson.status === 'completed' || lesson.status === 'active' ? `/dashboard/courses/${course.id}/lesson/${lesson.id}` : '#'}
                                    className={`flex items-center gap-4 flex-grow ${lesson.status === 'locked' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    <span className={`size-8 flex-shrink-0 rounded-full flex items-center justify-center 
                                        ${lesson.status === 'completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                        lesson.status === 'locked' ? 'bg-slate-100 text-slate-400 dark:bg-slate-700/50 dark:text-slate-500' :
                                        'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'}`}>
                                        {lesson.status === 'completed' ? <CheckCircle className="size-4" /> : <PlayCircle className="size-4" />}
                                    </span>
                                    <div>
                                        <p className={`font-medium text-lg ${lesson.status === 'locked' ? 'text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                                            {lesson.title}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 mt-1">
                                            <Clock className="size-4" /> {lesson.duration}
                                            {lesson.status === 'locked' && <Badge variant="warning" className="ml-2 text-xs">Locked</Badge>}
                                        </p>
                                    </div>
                                </Link>
                                {lesson.status === 'completed' && (
                                    <CheckCircle className="size-6 text-emerald-500 flex-shrink-0 ml-4" />
                                )}
                                {lesson.status === 'locked' && (
                                    <Lock className="size-6 text-slate-400 flex-shrink-0 ml-4" />
                                )}
                            </li>
                        ))}
                    </ul>
                </Card>
            </motion.div>
        </motion.div>
    );
}
