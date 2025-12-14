import React from 'react';

export default function ProgressBar({
    progress = 0,
    className = '',
    trackColor = 'bg-slate-200 dark:bg-slate-700',
    fillColor = 'bg-gradient-to-r from-indigo-500 to-purple-600',
    height = 'h-2',
    rounded = 'rounded-full',
    ...props
}) {
    const clampedProgress = Math.max(0, Math.min(100, progress));

    return (
        <div className={`w-full ${height} ${rounded} ${trackColor} ${className}`} {...props}>
            <div
                className={`${height} ${rounded} ${fillColor} transition-all duration-500 ease-out`}
                style={{ width: `${clampedProgress}%` }}
            />
        </div>
    );
}
