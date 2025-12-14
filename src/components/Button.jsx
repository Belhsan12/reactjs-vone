import { motion } from "framer-motion";

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    ...props
}) {
    const baseStyles = 'cursor-pointer font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2';

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
    };

    const variantStyles = {
        primary:
            'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:shadow-indigo-500/30',
        secondary:
            'bg-white/10 text-slate-200 border border-white/20 hover:bg-white/20 dark:bg-slate-800/30 dark:text-slate-100 dark:border-slate-700/50 dark:hover:bg-slate-700/40',
        outline:
            'bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-900',
        ghost:
            'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
        danger:
            'bg-rose-600 text-white shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-500/30',
    };

    return (
        <motion.button
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
