import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        },
    },
};

function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <SectionHeader subtitle="My Creations" title="Featured Projects" />

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard item={project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default React.memo(ProjectsSection);
