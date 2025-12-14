import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/section-title';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { courses } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCoursesSection() {
    // Display a subset of courses as featured
    const featuredCourses = courses.slice(0, 3);

    return (
        <section id="featured-courses" className="py-20 md:py-32 relative z-10">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Our Top-Rated Courses"
                    description="Discover popular courses designed by industry experts to help you achieve your goals. Start your journey with the best."
                />

                <motion.div
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {featuredCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} delay={index * 0.1} />
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Link to="/dashboard/courses">
                        <Button size="lg" variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-900">
                            View All Courses
                            <ArrowRight className="size-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
