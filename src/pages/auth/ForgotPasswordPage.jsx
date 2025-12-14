import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // UI-only: Simulate password reset request
        console.log('Password reset request for:', email);
        alert('If an account with that email exists, a reset link has been sent.');
        setEmail('');
    };

    return (
        <AuthLayout>
            <motion.h2 
                className="text-3xl font-bold text-center mb-6 text-slate-100 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                Forgot Your Password?
            </motion.h2>
            <motion.p 
                className="text-center text-slate-300 dark:text-slate-400 mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Enter your email address and we'll send you a link to reset your password.
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
                <Button type="submit" className="w-full" size="lg" variant="secondary">
                    Reset Password
                </Button>
            </form>
            <motion.p 
                className="text-center mt-8 text-slate-300 dark:text-slate-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Remember your password?{' '}
                <Link to="/login" className="text-amber-300 hover:text-amber-200 font-medium transition-colors duration-200">
                    Back to Login
                </Link>
            </motion.p>
        </AuthLayout>
    );
}
