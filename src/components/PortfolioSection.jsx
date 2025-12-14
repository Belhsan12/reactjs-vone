import React from 'react';
import SectionHeader from './SectionHeader';
import PortfolioCard from './PortfolioCard';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
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

function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <SectionHeader subtitle="My Journey" title="Achievements & Certifications" />

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {portfolioData.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <PortfolioCard item={item} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default React.memo(PortfolioSection);
