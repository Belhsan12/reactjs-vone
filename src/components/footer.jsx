import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Footer() {
    const links = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
    ];
    return (
        <motion.footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <Link to='/'>
                <img src='/assets/logo.svg' alt='E-Learning Platform Logo' className='h-8.5 w-auto' width={205} height={48} />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                {links.map((link) => (
                    <Link key={link.name} to={link.href} className='font-medium transition hover:text-indigo-600 dark:hover:text-indigo-400'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-6 pb-6 text-slate-500 dark:text-slate-400">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all duration-300" aria-label="Twitter">
                    <TwitterIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all duration-300" aria-label="LinkedIn">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all duration-300" aria-label="GitHub">
                    <GithubIcon />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all duration-300" aria-label="Dribbble">
                    <DribbbleIcon />
                </a>
            </div>
            <hr className="w-full border-slate-300 dark:border-slate-700 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4 text-slate-600 dark:text-slate-400">
                <p>Empowering learners worldwide.</p>
                <p>Copyright © {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};
