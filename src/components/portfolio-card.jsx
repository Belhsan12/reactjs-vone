import { motion } from 'framer-motion';

export default function PortfolioCard({ item, index }) {
  const categoryColors = {
    'Academic': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    'Technology': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    'AI/ML': 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    'Mobile': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    'Achievement': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    'default': 'bg-slate-100 dark:bg-slate-700/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
  };

  const getCategoryClass = (category) => {
    return categoryColors[category] || categoryColors['default'];
  };

  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      className="group w-full glass p-6 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryClass(item.category)}`}>
          {item.category}
        </span>
        <p className="text-sm text-gray-300">{item.date}</p>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-sm text-gray-200 mb-3 line-clamp-2">
        {item.issuer}
      </p>
      <p className="text-sm text-gray-400 leading-relaxed">
        {item.note}
      </p>
    </motion.div>
  );
}
