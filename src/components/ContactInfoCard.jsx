import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

/**
 * @param {object} props
 * @param {React.ReactNode} props.icon
 * @param {string} props.label
 * @param {string} props.value
 * @param {string} [props.link]
 * @param {object} [props.variants]
 */
const ContactInfoCard = motion(function ContactInfoCard({ icon, label, value, link, variants }) {
    const IconComponent = icon.type; // Extract icon component type for dynamic sizing/styling if needed

    return (
        <motion.div
            className="bg-white/5 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out flex items-center space-x-4"
            variants={variants}
        >
            <div className="p-3 rounded-full bg-indigo-600/20 text-indigo-400 dark:bg-indigo-700/30 dark:text-indigo-300 flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold text-slate-300 dark:text-slate-400">{label}</p>
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-lg font-bold text-slate-100 dark:text-slate-200">{value}</p>
                )}
            </div>
        </motion.div>
    );
});

export default React.memo(ContactInfoCard);
