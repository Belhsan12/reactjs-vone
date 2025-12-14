import React from 'react';
import { personalInfo, coreTechnologies } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

function HeroSection() {
    const { name, image, headline, subheadline, summary, location, phone, email, website, callToAction, heroBadges } = personalInfo;

    return (
        <section id="hero" className="relative py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-center overflow-hidden">
            {/* Decorative background blur/gradient element */}
            <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <motion.div
                className="flex flex-col items-center justify-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.img
                    src={image}
                    alt={name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-600 shadow-2xl shadow-indigo-500/30 mb-6"
                    variants={itemVariants}
                />
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight mb-4 tracking-tight"
                    variants={itemVariants}
                >
                    {name}
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl font-semibold text-slate-200 dark:text-slate-300 mb-4"
                    variants={itemVariants}
                >
                    {headline}
                </motion.p>
                <motion.p
                    className="text-lg text-slate-300 dark:text-slate-400 max-w-3xl mx-auto mb-8"
                    variants={itemVariants}
                >
                    {subheadline}
                </motion.p>
                <motion.p
                    className="text-md text-slate-400 dark:text-slate-500 max-w-3xl mx-auto mb-10"
                    variants={itemVariants}
                >
                    {summary}
                </motion.p>

                <motion.div className="flex flex-wrap justify-center gap-3 mb-10" variants={containerVariants}>
                    {heroBadges.map((badge, index) => (
                        <motion.span
                            key={index}
                            className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 shadow-md shadow-indigo-500/10"
                            variants={itemVariants}
                        >
                            {badge}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-12" variants={containerVariants}>
                    <motion.a
                        href={callToAction.primaryLink}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                        download
                        variants={itemVariants}
                    >
                        {callToAction.primaryLabel}
                    </motion.a>
                    <motion.a
                        href={callToAction.secondaryLink}
                        className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                        variants={itemVariants}
                    >
                        {callToAction.secondaryLabel}
                    </motion.a>
                </motion.div>

                <motion.div className="flex flex-wrap justify-center gap-6 text-slate-300 dark:text-slate-400 text-sm" variants={containerVariants}>
                    <motion.div className="flex items-center gap-2" variants={itemVariants}>
                        <MapPin size={18} className="text-indigo-400" /> {location}
                    </motion.div>
                    <motion.div className="flex items-center gap-2" variants={itemVariants}>
                        <Phone size={18} className="text-indigo-400" /> {phone}
                    </motion.div>
                    <motion.a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors" variants={itemVariants}>
                        <Mail size={18} className="text-indigo-400" /> {email}
                    </motion.a>
                    <motion.a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors" variants={itemVariants}>
                        <Globe size={18} className="text-indigo-400" /> {website.replace('https://', '')}
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default React.memo(HeroSection);
