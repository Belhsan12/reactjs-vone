import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Card from './Card';
import Button from './Button';

export default function ContactInfoCard({
    contact,
    delay = 0,
    className = '',
    ...props
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            className={`w-full ${className}`}
            {...props}
        >
            <Card className="flex flex-col items-center text-center p-8 space-y-6 bg-gradient-to-br from-white/90 to-indigo-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-md border border-indigo-100 dark:border-slate-700 shadow-xl shadow-indigo-500/10 dark:shadow-slate-900/20">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    {contact.headline}
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 max-w-md">
                    {contact.prompt}
                </p>

                <div className="space-y-3 mt-4 text-slate-700 dark:text-slate-300">
                    {contact.location && (
                        <p className="flex items-center gap-3 text-base">
                            <MapPin className="size-5 text-indigo-500 dark:text-indigo-400" />
                            {contact.location}
                        </p>
                    )}
                    {contact.email && (
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <Mail className="size-5 text-purple-500 dark:text-purple-400" />
                            {contact.email}
                        </a>
                    )}
                    {contact.phone && (
                        <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <Phone className="size-5 text-emerald-500 dark:text-emerald-400" />
                            {contact.phone}
                        </a>
                    )}
                    {contact.website && (
                        <a href={contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <Globe className="size-5 text-rose-500 dark:text-rose-400" />
                            {contact.website.replace('https://', '')}
                        </a>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    {contact.email && (
                        <Button as="a" href={`mailto:${contact.email}`} variant="primary" size="md">
                            <Mail className="size-5" /> Send Email
                        </Button>
                    )}
                    {contact.website && (
                        <Button as="a" href={contact.website} target="_blank" rel="noopener noreferrer" variant="secondary" size="md">
                            <Globe className="size-5" /> Visit Website
                        </Button>
                    )}
                </div>
            </Card>
        </motion.div>
    );
}