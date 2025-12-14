import React from 'react';

/**
 * @param {object} props
 * @param {import('../data/portfolioData').EducationItem} props.item
 */
function EducationCard({ item }) {
    const statusColors = {
        Completed: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
        'In Progress': 'bg-blue-500/10 text-blue-300 border-blue-400/30',
        Planned: 'bg-amber-500/10 text-amber-300 border-amber-400/30',
    };

    const colorClass = statusColors[item.status] || 'bg-gray-500/10 text-gray-300 border-gray-400/30';

    return (
        <div className="bg-white/5 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between">
            <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                    {item.status}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-100 dark:text-slate-100 leading-tight">
                    {item.title}
                </h3>
                <p className="text-indigo-300 text-base font-medium mb-3">{item.school}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 dark:border-slate-700/30 flex items-center justify-between">
                <p className="text-slate-400 dark:text-slate-500 text-sm italic">{item.period}</p>
                {/* Optional: Add a subtle icon or indicator for the period if desired */}
                {/* <CalendarDays size={14} className="text-slate-500" /> */} 
            </div>
        </div>
    );
}

export default React.memo(EducationCard);
