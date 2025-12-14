import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
    children,
    className = '',
    hoverEffect = true,
    ...props
}) {
    const baseStyles = 'bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6';
    const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';

    return (
        <motion.div
            className={`${baseStyles} ${hoverStyles} ${className}`}
            whileHover={hoverEffect ? { scale: 1.01, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } : {}}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
