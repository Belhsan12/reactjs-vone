import React from 'react';

export default function Input({
    id,
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    error,
    ...props
}) {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label htmlFor={id} className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-2 rounded-lg border bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent 
                           transition-all duration-200 ${error ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'}`}
                {...props}
            />
            {error && <p className='text-xs text-rose-500'>{error}</p>}
        </div>
    );
}
