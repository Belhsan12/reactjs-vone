import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import ProgressBar from './ProgressBar';
import Badge from './Badge';
import { Clock, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({
    course,
    delay = 0,
    ...props
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            {...props}
        >
            <Card className="flex flex-col h-full overflow-hidden relative group">
                <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-5 flex flex-col flex-1">
                    <Badge variant="info" className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-blue-500/80 text-white backdrop-blur-sm dark:bg-blue-800/80 border-none">{course.level}</Badge>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
                        <Link to={`/dashboard/courses/${course.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            {course.title}
                        </Link>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">By <span className="font-medium text-indigo-600 dark:text-indigo-400">{course.instructor}</span></p>

                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                        <span className="flex items-center gap-1"><Clock className="size-4 text-purple-500" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><BarChart2 className="size-4 text-emerald-500" /> {course.progress}% Completed</span>
                    </div>

                    <ProgressBar progress={course.progress} className="mb-4" />

                    <Link
                        to={`/dashboard/courses/${course.id}`}
                        className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md shadow-indigo-500/20 active:scale-98"
                    >
                        {course.progress > 0 ? 'Continue Course' : 'Start Course'}
                    </Link>
                </div>
            </Card>
        </motion.div>
    );
}
