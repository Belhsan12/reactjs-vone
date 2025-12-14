import React from 'react';

const SkeletonVideoCard = () => {
  return (
    <div className="relative block rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 animate-pulse">
      <div className="w-full aspect-video bg-slate-300 dark:bg-slate-700"></div>
      <div className="p-4 flex flex-col space-y-3">
        <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/2"></div>
        <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default SkeletonVideoCard;
