import React from 'react';
import SectionHeader from './SectionHeader';
import { stats } from '../data/portfolioData';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

function StatsSection() {
    return (
        <section id="stats" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <SectionHeader subtitle="My Impact" title="Numbers That Speak" />

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/5 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                        variants={itemVariants}
                    >
                        <p className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 leading-none">
                            {stat.value}
                        </p>
                        <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-200 mb-1">
                            {stat.label}
                        </h3>
                        <p className="text-sm text-slate-400 dark:text-slate-500">
                            {stat.caption}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default React.memo(StatsSection);
