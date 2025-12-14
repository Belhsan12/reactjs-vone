import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LandingNavbar from '../components/LandingNavbar';
import Footer from '../components/footer';
import LenisScroll from '../components/lenis-scroll';
import Input from '../components/Input';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // UI-only: Simulate form submission
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <LenisScroll />
            <LandingNavbar />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-1/4 left-1/4 -translate-x-1/2 size-[520px] bg-emerald-500/30 dark:bg-emerald-700/20 blur-[100px]" />
                <div className="absolute rounded-full bottom-1/4 right-1/4 -translate-x-1/2 size-[520px] bg-blue-500/30 dark:bg-blue-700/20 blur-[100px]" />
            </div>
            <main className='px-4 relative z-10 min-h-screen pt-24 md:pt-32 pb-16'>
                <div className="container mx-auto max-w-7xl space-y-16">
                    <motion.section
                        className="text-center py-16 md:py-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                            Have questions, feedback, or need support? We're here to help! Reach out to us through the form below or using our contact details.
                        </p>
                    </motion.section>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 p-8 md:p-12 border border-slate-200 dark:border-slate-700"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    id="name"
                                    label="Your Name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    id="email"
                                    label="Your Email"
                                    type="email"
                                    placeholder="your@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    id="subject"
                                    label="Subject"
                                    placeholder="Inquiry about courses..."
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="message" className='text-sm font-medium text-slate-700 dark:text-slate-300'>Your Message</label>
                                    <textarea
                                        id="message"
                                        rows="6"
                                        placeholder="Type your message here..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200 border-slate-300 dark:border-slate-700"
                                        required
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full">
                                    <Send className="size-5" /> Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8 p-6 lg:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-inner shadow-slate-200/20 dark:shadow-slate-900/20">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 bg-gradient-to-r from-purple-500 to-rose-600 bg-clip-text text-transparent">
                                Our Details
                            </h2>
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <Mail className="size-6 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-slate-100">Email Support</p>
                                        <a href="mailto:support@elearning.com" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">support@elearning.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="size-6 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-slate-100">Phone Number</p>
                                        <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">+1 (234) 567-890</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="size-6 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-slate-100">Our Office</p>
                                        <p className="text-slate-600 dark:text-slate-400">123 Learning Lane, Suite 400<br />Educity, LR 54321, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
