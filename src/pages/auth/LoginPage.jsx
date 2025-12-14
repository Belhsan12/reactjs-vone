import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const [email, setEmail] = useState('admin@gmail.com'); // Default email
    const [password, setPassword] = useState('28600816'); // Default password
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // UI-only: Simulate login success
        console.log('Login attempt with:', { email, password });
        // In a real app, this would validate credentials and set actual auth state
        if (email === 'admin@gmail.com' && password === '28600816') {
            alert('Login successful! Redirecting to dashboard...');
            // Dispatch a custom event to simulate login success for App.jsx's useEffect
            window.dispatchEvent(new Event('loginSuccess'));
            navigate('/dashboard');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <AuthLayout>
            <motion.h2 
                className="text-3xl font-bold text-center mb-6 text-slate-100 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                Welcome Back!
            </motion.h2>
            <motion.p 
                className="text-center text-slate-300 dark:text-slate-400 mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Sign in to continue your learning journey.
            </motion.p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="your@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="flex justify-end">
                    <Link to="/forgot-password" className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors duration-200">
                        Forgot Password?
                    </Link>
                </div>
                <Button type="submit" className="w-full" size="lg">
                    Login
                </Button>
            </form>
            <motion.p 
                className="text-center mt-8 text-slate-300 dark:text-slate-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Don't have an account?{' '}
                <Link to="/register" className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors duration-200">
                    Register
                </Link>
            </motion.p>
        </AuthLayout>
    );
}
