import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { userProfile } from '../../data/mockData';
import { User, Lock, Bell, MoonStar, Save } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function SettingsPage() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [activeTab, setActiveTab] = useState('profile');

    // Dummy state for settings forms
    const [profileForm, setProfileForm] = useState({
        name: userProfile.name,
        email: userProfile.email,
        bio: userProfile.bio,
    });
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [notificationSettings, setNotificationSettings] = useState({
        emailNotifications: true,
        courseUpdates: true,
        promotionalEmails: false,
    });

    const handleProfileChange = (e) => {
        const { id, value } = e.target;
        setProfileForm(prev => ({ ...prev, [id]: value }));
    };

    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        setPasswordForm(prev => ({ ...prev, [id]: value }));
    };

    const handleNotificationChange = (e) => {
        const { id, checked } = e.target;
        setNotificationSettings(prev => ({ ...prev, [id]: checked }));
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated! (UI-only)');
        console.log('Profile saved:', profileForm);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
            alert('New passwords do not match!');
            return;
        }
        alert('Password changed! (UI-only)');
        console.log('Password changed:', passwordForm);
        setPasswordForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    };

    const handleNotificationSubmit = (e) => {
        e.preventDefault();
        alert('Notification settings updated! (UI-only)');
        console.log('Notification settings saved:', notificationSettings);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent" variants={itemVariants}>
                Settings
            </motion.h1>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                Adjust your preferences and manage your account.
            </motion.p>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar for tabs */}
                <motion.div className="w-full md:w-1/4 flex-shrink-0" variants={itemVariants}>
                    <Card className="p-4">
                        <nav className="space-y-2">
                            <a
                                href="#"
                                onClick={() => setActiveTab('profile')}
                                className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors 
                                    ${activeTab === 'profile' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                <User className="size-5" /> Profile
                            </a>
                            <a
                                href="#"
                                onClick={() => setActiveTab('password')}
                                className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors 
                                    ${activeTab === 'password' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                <Lock className="size-5" /> Password
                            </a>
                            <a
                                href="#"
                                onClick={() => setActiveTab('notifications')}
                                className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors 
                                    ${activeTab === 'notifications' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                <Bell className="size-5" /> Notifications
                            </a>
                            <a
                                href="#"
                                onClick={() => setActiveTab('appearance')}
                                className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors 
                                    ${activeTab === 'appearance' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                <MoonStar className="size-5" /> Appearance
                            </a>
                        </nav>
                    </Card>
                </motion.div>

                {/* Content area */}
                <motion.div className="flex-1" variants={itemVariants}>
                    {activeTab === 'profile' && (
                        <Card>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Public Profile</h2>
                            <form onSubmit={handleProfileSubmit} className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <Avatar src={userProfile.avatar} alt={userProfile.name} size="xl" />
                                    <div>
                                        <Button variant="secondary" size="sm">Change Avatar</Button>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Max file size: 5MB</p>
                                    </div>
                                </div>
                                <Input id="name" label="Full Name" value={profileForm.name} onChange={handleProfileChange} />
                                <Input id="email" label="Email Address" type="email" value={profileForm.email} onChange={handleProfileChange} />
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="bio" className='text-sm font-medium text-slate-700 dark:text-slate-300'>Bio</label>
                                    <textarea
                                        id="bio"
                                        value={profileForm.bio}
                                        onChange={handleProfileChange}
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-lg border bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200 border-slate-300 dark:border-slate-700"
                                    ></textarea>
                                </div>
                                <Button type="submit" className="mt-4">
                                    <Save className="size-5" /> Save Changes
                                </Button>
                            </form>
                        </Card>
                    )}

                    {activeTab === 'password' && (
                        <Card>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Change Password</h2>
                            <form onSubmit={handlePasswordSubmit} className="space-y-6">
                                <Input id="currentPassword" label="Current Password" type="password" placeholder="********" value={passwordForm.currentPassword} onChange={handlePasswordChange} />
                                <Input id="newPassword" label="New Password" type="password" placeholder="********" value={passwordForm.newPassword} onChange={handlePasswordChange} />
                                <Input
                                    id="confirmNewPassword"
                                    label="Confirm New Password"
                                    type="password"
                                    placeholder="********"
                                    value={passwordForm.confirmNewPassword}
                                    onChange={handlePasswordChange}
                                    error={passwordForm.newPassword !== passwordForm.confirmNewPassword && passwordForm.confirmNewPassword !== '' ? 'Passwords do not match' : ''}
                                />
                                <Button type="submit" className="mt-4">
                                    <Save className="size-5" /> Update Password
                                </Button>
                            </form>
                        </Card>
                    )}

                    {activeTab === 'notifications' && (
                        <Card>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Notification Settings</h2>
                            <form onSubmit={handleNotificationSubmit} className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="emailNotifications" className="text-slate-700 dark:text-slate-300 font-medium">Email Notifications</label>
                                    <input
                                        type="checkbox"
                                        id="emailNotifications"
                                        checked={notificationSettings.emailNotifications}
                                        onChange={handleNotificationChange}
                                        className="size-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-700"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="courseUpdates" className="text-slate-700 dark:text-slate-300 font-medium">Course Updates</label>
                                    <input
                                        type="checkbox"
                                        id="courseUpdates"
                                        checked={notificationSettings.courseUpdates}
                                        onChange={handleNotificationChange}
                                        className="size-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-700"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="promotionalEmails" className="text-slate-700 dark:text-slate-300 font-medium">Promotional Emails</label>
                                    <input
                                        type="checkbox"
                                        id="promotionalEmails"
                                        checked={notificationSettings.promotionalEmails}
                                        onChange={handleNotificationChange}
                                        className="size-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-700"
                                    />
                                </div>
                                <Button type="submit" className="mt-4">
                                    <Save className="size-5" /> Save Settings
                                </Button>
                            </form>
                        </Card>
                    )}

                    {activeTab === 'appearance' && (
                        <Card>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Appearance</h2>
                            <div className="flex items-center justify-between">
                                <label htmlFor="darkModeToggle" className="text-slate-700 dark:text-slate-300 font-medium">Dark Mode</label>
                                <button
                                    id="darkModeToggle"
                                    onClick={toggleDarkMode}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                                        ${isDarkMode ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                                    aria-label="Toggle dark mode"
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                                            ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}
                                    />
                                </button>
                            </div>
                        </Card>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}
