import React from 'react';

/**
 * @param {object} props
 * @param {import('../data/portfolioData').ProjectItem} props.item
 */
function ProjectCard({ item }) {
    const statusColors = {
        Completed: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
        'In Progress': 'bg-blue-500/10 text-blue-300 border-blue-400/30',
        Planned: 'bg-amber-500/10 text-amber-300 border-amber-400/30',
        'Under Review': 'bg-purple-500/10 text-purple-300 border-purple-400/30',
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
                <p className="text-sm font-medium text-indigo-300 mb-2">{item.category}</p>
                <p className="text-slate-300 dark:text-slate-400 text-sm mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-400/30 hover:bg-indigo-500/20 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            {item.highlights && item.highlights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/5 dark:border-slate-700/30">
                    <p className="text-sm font-semibold text-slate-300 dark:text-slate-400 mb-2">Highlights:</p>
                    <ul className="text-slate-400 dark:text-slate-500 text-xs space-y-1">
                        {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                                <span className="inline-block w-1 h-1 mt-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>
                                <span className="flex-1">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default React.memo(ProjectCard);
