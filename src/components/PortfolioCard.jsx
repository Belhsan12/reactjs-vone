import React from 'react';

function PortfolioCard({ item }) {
    const categoryColors = {
        Academic: 'bg-blue-500/10 text-blue-300 border-blue-400/30',
        Technology: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
        'AI/ML': 'bg-rose-500/10 text-rose-300 border-rose-400/30',
        Mobile: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
        Achievement: 'bg-amber-500/10 text-amber-300 border-amber-400/30',
    };

    const colorClass = categoryColors[item.category] || 'bg-gray-500/10 text-gray-300 border-gray-400/30';

    return (
        <div className="relative bg-white/5 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between">
            <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                    {item.category}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-100 dark:text-slate-100 leading-tight">
                    {item.title}
                </h3>
                <p className="text-indigo-300 text-sm font-medium mb-3">{item.issuer}</p>
                <p className="text-slate-300 dark:text-slate-400 text-sm mb-4">{item.note}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 dark:border-slate-700/30">
                <p className="text-slate-400 dark:text-slate-500 text-xs italic">Issued: {item.date}</p>
            </div>
        </div>
    );
}

export default React.memo(PortfolioCard);
