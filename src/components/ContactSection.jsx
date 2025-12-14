import React from 'react';
import SectionHeader from './SectionHeader';
import { contactDetails } from '../data/portfolioData';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function ContactSection() {
    const { headline, prompt, location, email, phone, website } = contactDetails;

    return (
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-12 max-w-6xl mx-auto">
            <SectionHeader subtitle="Get in Touch" title="Let's Connect" />

            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    {headline}
                </h3>
                <p className="text-lg text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
                    {prompt}
                </p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
            >
                <ContactInfoCard icon={<MapPin size={24} />} label="Location" value={location} variants={contactItemVariants} />
                <ContactInfoCard icon={<Mail size={24} />} label="Email" value={email} link={`mailto:${email}`} variants={contactItemVariants} />
                <ContactInfoCard icon={<Phone size={24} />} label="Phone" value={phone} link={`tel:${phone}`} variants={contactItemVariants} />
                {website && (
                    <ContactInfoCard icon={<Globe size={24} />} label="Website" value={website.replace('https://', '')} link={website} variants={contactItemVariants} />
                )}
            </motion.div>
        </section>
    );
}

const ContactInfoCard = motion(function ContactInfoCard({ icon, label, value, link }) {
    return (
        <div className="bg-white/5 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out flex items-center space-x-4">
            <div className="p-3 rounded-full bg-indigo-600/20 text-indigo-400 dark:bg-indigo-700/30 dark:text-indigo-300">
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
        </div>
    );
});

export default React.memo(ContactSection);
