import React from 'react';

const SkeletonVideoCard = () => {
  return (
    <div className="relative block rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 animate-pulse">
      <div className="w-full aspect-video bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div> {/* Changed to gradient for more modern pulse */}
      <div className="p-4 flex flex-col space-y-3">
        <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-3/4"></div> {/* Changed to gradient */}
        <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-1/2"></div> {/* Changed to gradient */}
        <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-1/4"></div> {/* Changed to gradient */}
      </div>
    </div>
  );
};

export default SkeletonVideoCard;
