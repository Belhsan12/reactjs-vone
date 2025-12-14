import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Menu, Sun, Moon, LogOut } from 'lucide-react';
import Avatar from './Avatar';
import { useSidebar } from '../context/SidebarContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { userProfile } from '../data/mockData'; // Import userProfile for display

export default function DashboardNavbar() {
    const { toggleSidebar } = useSidebar();
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleLogout = () => {
        // UI-only: Simulate logout
        alert('Logged out!');
        window.dispatchEvent(new Event('logout')); // Dispatch custom logout event
        setIsDropdownOpen(false); // Close dropdown
    };

    return (
        <motion.nav
            className="sticky top-0 z-40 flex items-center justify-between p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors lg:hidden"
                    aria-label="Toggle sidebar"
                >
                    <Menu className="size-6" />
                </button>
                <Link to="/dashboard">
                    <img src='/assets/logo.svg' alt='E-Learning Platform Logo' className='h-7 w-auto' width={170} height={40} />
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search courses, instructors..."
                        className="w-64 pl-10 pr-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                </div>

                <button
                    className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Toggle dark mode"
                    onClick={toggleDarkMode}
                >
                    {isDarkMode ? <Sun className="size-6" /> : <Moon className="size-6" />}
                </button>

                <button
                    className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                    aria-label="Notifications"
                >
                    <Bell className="size-6" />
                    <span className="absolute top-1 right-1 size-2.5 bg-rose-500 rounded-full border border-white dark:border-slate-900" />
                </button>

                <div className="relative" ref={dropdownRef}>
                    <button
                        className="flex items-center gap-2"
                        onClick={() => setIsDropdownOpen(prev => !prev)}
                        aria-label="User menu"
                        aria-expanded={isDropdownOpen}
                    >
                        <Avatar src={userProfile.avatar} alt={userProfile.name} size="sm" />
                        <span className="hidden md:block font-medium text-slate-700 dark:text-slate-200">{userProfile.name}</span>
                    </button>

                    {isDropdownOpen && (
                        <motion.div
                            className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to="/dashboard/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-2 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <Avatar src={userProfile.avatar} alt={userProfile.name} size="sm" />
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                            >
                                <LogOut className="size-5" />
                                Logout
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
}
