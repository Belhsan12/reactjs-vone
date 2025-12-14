import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { courses } from '../../data/mockData';
import { ChevronLeft, ChevronRight, BookOpen, Clock, FileText, CheckCircle, Lock } from 'lucide-react';

export default function LearningPage() {
    const { courseId, lessonId } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useState('');

    const course = courses.find(c => c.id === courseId);
    const lessonIndex = course?.lessons.findIndex(l => l.id === lessonId);
    const currentLesson = course?.lessons[lessonIndex];

    useEffect(() => {
        // Load notes from local storage (UI-only simulation)
        const savedNotes = localStorage.getItem(`notes-${courseId}-${lessonId}`);
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, [courseId, lessonId]);

    useEffect(() => {
        // Save notes to local storage on change
        localStorage.setItem(`notes-${courseId}-${lessonId}`, notes);
    }, [notes, courseId, lessonId]);

    if (!course || !currentLesson) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
            >
                <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
                <p className="text-lg">The lesson you are looking for does not exist.</p>
                <Link to={`/dashboard/courses/${courseId}`}>
                    <Button className="mt-6">Back to Course Details</Button>
                </Link>
            </motion.div>
        );
    }

    const nextLesson = course.lessons[lessonIndex + 1];
    const prevLesson = course.lessons[lessonIndex - 1];

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main Content Area: Video Player & Notes */}
            <div className="lg:col-span-2 space-y-6">
                <Card className="p-0 overflow-hidden">
                    {/* Video Player Placeholder */}
                    <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 text-xl font-medium rounded-t-xl">
                        <PlayCircle className="size-20 text-slate-400 dark:text-slate-500 opacity-60" />
                        <p className="ml-4">Video Player Placeholder: {currentLesson.title}</p>
                    </div>
                    <div className="p-5">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            {currentLesson.title}
                        </h1>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm mb-4">
                            <span className="flex items-center gap-1"><Clock className="size-4 text-purple-500" /> {currentLesson.duration}</span>
                            <Badge variant="info">{course.level}</Badge>
                            <Badge variant="primary">{course.category}</Badge>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">This is a placeholder for the lesson description. Here you would find detailed notes, key takeaways, and additional resources for the lesson "{currentLesson.title}".</p>
                    </div>
                </Card>

                {/* Notes Section */}
                <Card>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Your Notes</h2>
                    <textarea
                        className="w-full h-40 p-4 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        placeholder="Write your notes here..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Notes are saved automatically.</p>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    {prevLesson ? (
                        <Link to={`/dashboard/courses/${courseId}/lesson/${prevLesson.id}`}>
                            <Button variant="secondary">
                                <ChevronLeft className="size-5" />
                                Previous Lesson
                            </Button>
                        </Link>
                    ) : (
                        <Button variant="secondary" disabled className="opacity-50 cursor-not-allowed">
                            <ChevronLeft className="size-5" />
                            Previous Lesson
                        </Button>
                    )}

                    {nextLesson ? (
                        <Link to={`/dashboard/courses/${courseId}/lesson/${nextLesson.id}`}>
                            <Button>
                                Next Lesson
                                <ChevronRight className="size-5" />
                            </Button>
                        </Link>
                    ) : (
                        <Button disabled className="opacity-50 cursor-not-allowed">
                            Finish Course
                            <CheckCircle className="size-5" />
                        </Button>
                    )}
                </div>
            </div>

            {/* Sidebar: Lesson List */}
            <div className="lg:col-span-1">
                <Card className="p-0 overflow-hidden sticky top-24">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                        Course Lessons
                    </h2>
                    <ul className="divide-y divide-slate-200 dark:divide-slate-700 max-h-[calc(100vh-20rem)] overflow-y-auto">
                        {course.lessons.map((lesson, index) => (
                            <li key={lesson.id} className={`flex items-center gap-4 p-4 
                                ${currentLesson.id === lesson.id ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold' : 
                                lesson.status === 'locked' ? 'bg-slate-50 dark:bg-slate-800/50 opacity-80 text-slate-500 dark:text-slate-400 cursor-not-allowed' : 
                                'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                                <span className={`size-6 flex-shrink-0 rounded-full flex items-center justify-center 
                                    ${currentLesson.id === lesson.id ? 'bg-indigo-600 text-white' : 
                                    lesson.status === 'completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 
                                    lesson.status === 'locked' ? 'bg-slate-100 text-slate-400 dark:bg-slate-700/50 dark:text-slate-500' : 
                                    'bg-slate-100 text-indigo-600 dark:bg-slate-700/50 dark:text-indigo-400'}`}>
                                    {currentLesson.id === lesson.id ? <PlayCircle className="size-3.5" /> : 
                                     lesson.status === 'completed' ? <CheckCircle className="size-3.5" /> : 
                                     <BookOpen className="size-3.5" />}
                                </span>
                                <Link
                                    to={lesson.status === 'completed' || currentLesson.id === lesson.id ? `/dashboard/courses/${course.id}/lesson/${lesson.id}` : '#'}
                                    className={`flex-grow ${lesson.status === 'locked' ? 'pointer-events-none' : ''}`}
                                >
                                    <span className="text-base leading-tight">{lesson.title}</span>
                                    <p className="text-xs flex items-center gap-1 mt-0.5">
                                        <Clock className="size-3" /> {lesson.duration}
                                        {lesson.status === 'locked' && <Lock className="size-3 ml-1" />}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </motion.div>
    );
}
