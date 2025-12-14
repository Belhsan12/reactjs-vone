import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import CourseCard from '../../components/CourseCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SectionTitle from '../../components/section-title'; // NEW
import { courses } from '../../data/mockData';
import { Search, Filter, X } from 'lucide-react';

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    const uniqueLevels = ['All', ...new Set(courses.map(c => c.level))];
    const uniqueCategories = ['All', ...new Set(courses.map(c => c.category))];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesSearch && matchesLevel && matchesCategory;
    });

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
            <SectionTitle // NEW
                title="All Courses"
                description="Explore our extensive library of courses and find your next learning adventure."
                className="text-center !max-w-full !mx-0 md:!text-left"
            />

            {/* Search and Filter */}
            <motion.div className="flex flex-col md:flex-row gap-4 mb-8" variants={itemVariants}>
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                    <Input
                        id="search"
                        type="text"
                        placeholder="Search by title or instructor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-white/70 dark:bg-slate-800/70 border-slate-300 dark:border-slate-700"
                    />
                </div>
                <Button
                    variant="secondary"
                    onClick={() => setIsFilterPanelOpen(prev => !prev)}
                    className="flex-shrink-0 bg-white/10 text-slate-200 border border-white/20 dark:bg-slate-800/30 dark:text-slate-100 dark:border-slate-700/50 hover:bg-white/20 dark:hover:bg-slate-700/40"
                >
                    <Filter className="size-5" />
                    {isFilterPanelOpen ? 'Hide Filters' : 'Show Filters'}
                </Button>
            </motion.div>

            {/* Filter Panel (Collapsible) */}
            <AnimatePresence> {/* NEW */}
                {isFilterPanelOpen && (
                    <motion.div
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mb-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Filters</h3>
                            <Button variant="ghost" size="sm" onClick={() => setIsFilterPanelOpen(false)} className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                                <X className="size-5" />
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="levelFilter" className='text-sm font-medium text-slate-700 dark:text-slate-300'>Level</label>
                                <select
                                    id="levelFilter"
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200 border-slate-300 dark:border-slate-700"
                                >
                                    {uniqueLevels.map(level => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="categoryFilter" className='text-sm font-medium text-slate-700 dark:text-slate-300'>Category</label>
                                <select
                                    id="categoryFilter"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200 border-slate-300 dark:border-slate-700"
                                >
                                    {uniqueCategories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> {/* NEW */}

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" variants={containerVariants}>
                    {filteredCourses.map((course, index) => (
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
                    <p className="text-xl font-medium mb-4">No courses found matching your criteria.</p>
                    <Button onClick={() => { setSearchTerm(''); setSelectedLevel('All'); setSelectedCategory('All'); }} className="mt-6">
                        Clear Filters
                    </Button>
                </motion.div>
            )}
        </motion.div>
    );
}
