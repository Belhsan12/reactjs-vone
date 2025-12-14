import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import { instructors } from '../../data/mockData';
import { Star, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InstructorsPage() {
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
            <motion.h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent" variants={itemVariants}>
                Our Expert Instructors
            </motion.h1>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                Learn from the best in the industry. Our instructors are passionate about teaching and dedicated to your success.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
                {instructors.map((instructor, index) => (
                    <motion.div key={instructor.id} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                        <Card className="flex flex-col items-center text-center p-8">
                            <Avatar src={instructor.avatar} alt={instructor.name} size="xl" className="mb-4 shadow-md shadow-indigo-500/20" />
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                {instructor.name}
                            </h2>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{instructor.coursesTaught} Courses</p>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{instructor.bio}</p>
                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                <span className="flex items-center gap-1"><BookOpen className="size-4 text-emerald-500" /> {instructor.coursesTaught} Courses</span>
                                <span className="flex items-center gap-1"><Users className="size-4 text-purple-500" /> {instructor.studentsTaught} Students</span>
                                <span className="flex items-center gap-1"><Star className="size-4 text-amber-500 fill-amber-500" /> {instructor.rating}</span>
                            </div>
                            {/* Link to a hypothetical instructor profile page or their courses */}
                            <Link to={`/dashboard/courses?instructor=${instructor.id}`}>
                                <Button variant="outline" size="sm">
                                    View Courses
                                </Button>
                            </Link>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
