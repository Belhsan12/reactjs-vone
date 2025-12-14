import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Badge from './Badge';

export default function ExperienceCard({
    experience,
    delay = 0,
    ...props
}) {
    const getCategoryVariant = (category) => {
        switch (category) {
            case 'Work Experience':
                return 'primary';
            case 'Academic':
                return 'info';
            case 'Technology':
                return 'success';
            case 'AI/ML':
                return 'warning';
            case 'Mobile':
                return 'blue'; // Using 'blue' as a custom variant, assuming Badge can handle it or defaulting to info
            case 'Achievement':
                return 'rose'; // Using 'rose' as a custom variant
            default:
                return 'primary';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            {...props}
        >
            <Card className="flex flex-col h-full p-6 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                        {experience.title}
                    </h3>
                    <Badge variant={getCategoryVariant(experience.category)} className="text-xs px-2 py-1 rounded-md">
                        {experience.category}
                    </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">{experience.issuer}</span> - {experience.date}
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mt-2">
                    {experience.note}
                </p>
            </Card>
        </motion.div>
    );
}