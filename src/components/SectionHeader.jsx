import React from 'react';

function SectionHeader({ title, subtitle }) {
    return (
        <div className="text-center mb-12">
            {subtitle && (
                <p className="text-sm font-semibold text-indigo-400 dark:text-indigo-300 mb-2 tracking-wide uppercase opacity-90">
                    {subtitle}
                </p>
            )}
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight leading-tight">
                {title}
            </h2>
        </div>
    );
}

export default React.memo(SectionHeader);
