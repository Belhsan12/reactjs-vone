import React from 'react';
import { motion } from 'framer-motion';

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-800 to-purple-900 text-slate-100 dark:from-slate-900 dark:to-slate-950">
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute rounded-full top-1/4 left-1/4 -translate-x-1/2 size-96 bg-indigo-500 blur-[120px] opacity-30" />
                <div className="absolute rounded-full bottom-1/4 right-1/4 -translate-x-1/2 size-96 bg-purple-500 blur-[120px] opacity-30" />
            </div>
            <motion.div
                className="w-full max-w-md bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-indigo-500/20 dark:shadow-slate-900/40"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    );
}
