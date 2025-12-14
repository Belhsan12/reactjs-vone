import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { motion } from 'framer-motion';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // UI-only: Simulate registration success
        console.log('Register attempt with:', { name, email, password });
        alert('Registration successful! Please log in.');
        navigate('/login');
    };

    return (
        <AuthLayout>
            <motion.h2 
                className="text-3xl font-bold text-center mb-6 text-slate-100 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                Join Our Community
            </motion.h2>
            <motion.p 
                className="text-center text-slate-300 dark:text-slate-400 mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Create your account to start learning today.
            </motion.p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    id="name"
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <Input
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    error={password !== confirmPassword && confirmPassword !== '' ? 'Passwords do not match' : ''}
                />
                <Button type="submit" className="w-full" size="lg" variant="primary">
                    Register
                </Button>
            </form>
            <motion.p 
                className="text-center mt-8 text-slate-300 dark:text-slate-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Already have an account?{' '}
                <Link to="/login" className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors duration-200">
                    Login
                </Link>
            </motion.p>
        </AuthLayout>
    );
}
