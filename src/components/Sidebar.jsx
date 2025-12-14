import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarLinks } from '../data/mockData';
import * as LucideIcons from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { motion } from 'framer-motion';

const Icon = ({ name, className }) => {
    const LucideIcon = LucideIcons[name];
    return LucideIcon ? <LucideIcon className={className} /> : null;
};

export default function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const location = useLocation();

    return (
        <motion.aside 
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-800 p-4 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 h-screen overflow-y-auto shadow-lg dark:shadow-slate-900/40
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            initial={{ x: '-100%' }}
            animate={{ x: isSidebarOpen ? '0%' : '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <div className="flex items-center justify-between mb-8 lg:hidden">
                <Link to="/dashboard">
                    <img src='/assets/logo.svg' alt='logo' className='h-8 w-auto' width={170} height={40} />
                </Link>
                <button 
                    onClick={toggleSidebar} 
                    className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Close sidebar"
                >
                    <LucideIcons.X className="size-6" />
                </button>
            </div>

            <nav className="space-y-2">
                {sidebarLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={toggleSidebar} // Close sidebar on mobile after clicking a link
                            className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-all duration-200
                                ${isActive
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}
                            `}
                        >
                            <Icon name={link.icon} className={`size-5 ${isActive ? 'text-white' : 'text-indigo-500 dark:text-indigo-400'}`} />
                            <span>{link.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </motion.aside>
    );
}
