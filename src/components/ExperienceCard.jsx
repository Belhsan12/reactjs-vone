import React from 'react';

/**
 * @param {object} props
 * @param {import('../data/portfolioData').ExperienceItem} props.item
 */
function ExperienceCard({ item }) {
    return (
        <div className="bg-white/5 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 leading-tight mb-2">
                {item.title}
            </h3>
            <p className="text-indigo-300 text-md font-medium mb-1">{item.company} &bull; {item.type}</p>
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-3">{item.period} &bull; {item.location}</p>
            <ul className="text-slate-300 dark:text-slate-400 text-sm space-y-2 flex-grow">
                {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-2 h-2 mt-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>
                        <span className="flex-1">{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(ExperienceCard);
