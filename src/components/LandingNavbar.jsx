import { MenuIcon, XIcon, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDarkMode, toggleDarkMode } = useTheme();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '#featured-courses' },
        { name: 'About', href: '/about' }, // UPDATED
        { name: 'Contact', href: '/contact' } // UPDATED
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-indigo-500/10 dark:shadow-slate-900/20' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to='/'>
                    <img src='/assets/logo.svg' alt='E-Learning Platform Logo' className='h-8.5 w-auto' width={205} height={48} />
                </Link>

                <div className='hidden items-center space-x-6 md:flex text-slate-700 dark:text-slate-200'>
                    {links.map((link) => (
                        link.href.startsWith('/') ? (
                            <Link key={link.name} to={link.href} className='font-medium transition hover:text-indigo-600 dark:hover:text-indigo-400'>
                                {link.name}
                            </Link>
                        ) : (
                            <a key={link.name} href={link.href} className='font-medium transition hover:text-indigo-600 dark:hover:text-indigo-400'>
                                {link.name}
                            </a>
                        )
                    ))}
                    <button
                        className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle dark mode"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? <Sun className="size-6" /> : <Moon className="size-6" />}
                    </button>
                    <Link to='/login' className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 active:scale-95'>
                        Login
                    </Link>
                    <Link to='/register' className='bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-900'>
                        Register
                    </Link>
                </div>

                <div className='flex items-center md:hidden gap-2'>
                    <button
                        className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle dark mode"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? <Sun className="size-6" /> : <Moon className="size-6" />}
                    </button>
                    <button onClick={() => setIsOpen(true)} className='transition active:scale-90 p-2 rounded-lg bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm'>
                        <MenuIcon className='size-6.5 text-slate-700 dark:text-slate-200' />
                    </button>
                </div>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/95 dark:bg-slate-950/95 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    link.href.startsWith('/') ? (
                        <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className='text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-xl transition-colors'>
                            {link.name}
                        </Link>
                    ) : (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className='text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-xl transition-colors'>
                            {link.name}
                        </a>
                    )
                ))}

                <Link to='/login' className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95' onClick={() => setIsOpen(false)}>
                    Login
                </Link>
                <Link to='/register' className='bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 active:scale-95 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-900' onClick={() => setIsOpen(false)}>
                    Register
                </Link>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 bg-white/20 dark:bg-slate-800/30 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 hover:bg-white/30 dark:hover:bg-slate-700/40 transition-colors'>
                    <XIcon className='text-slate-800 dark:text-slate-100 size-7' />
                </button>
            </div >
        </>
    );
}
