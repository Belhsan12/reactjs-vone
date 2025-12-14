import React from 'react';
import { mockCategories } from '../data/mockData';

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide py-2 px-4 md:px-8 lg:px-12 space-x-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[64px] md:top-[72px] lg:top-[80px] z-40 shadow-sm">
      {mockCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
            ${selectedCategory === category
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
