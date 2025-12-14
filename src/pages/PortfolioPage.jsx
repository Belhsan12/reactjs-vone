import React from 'react';
import { motion } from 'framer-motion';
import { experiences, contactDetails } from '../data/mockData';
import ExperienceCard from '../components/ExperienceCard';
import ContactInfoCard from '../components/ContactInfoCard';
import SectionTitle from '../components/section-title'; // Reusing existing section title component

export default function PortfolioPage() {
    return (
        <div className="min-h-screen py-16 md:py-24 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-950 dark:to-indigo-900/10 text-slate-900 dark:text-slate-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <SectionTitle 
                    title="My Portfolio & Achievements"
                    description="A curated collection of my professional and academic journey, showcasing key projects, certifications, and accomplishments."
                    className="mb-16"
                />

                {/* Experiences Section */}
                <section className="mb-24">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Professional & Academic Journey
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} delay={index * 0.1} />
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section>
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <div className="flex justify-center">
                        <ContactInfoCard contact={contactDetails} delay={0.3} className="max-w-2xl" />
                    </div>
                </section>
            </motion.div>
        </div>
    );
}