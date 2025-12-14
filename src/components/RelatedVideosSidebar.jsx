import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';
import SkeletonVideoCard from './SkeletonVideoCard';

const RelatedVideosSidebar = ({ videos, loading, error }) => {
  return (
    <div className="w-full lg:w-80 flex-shrink-0 lg:ml-8 mt-8 lg:mt-0 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-900/40 border border-slate-200 dark:border-slate-700"> {/* Increased shadow depth */}
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Related Videos
      </h2>
      <div className="space-y-4 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
        {loading ? (
          // Show 4 skeleton cards while loading
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-3 bg-white dark:bg-slate-800 p-2 rounded-lg">
              <div className="relative flex-shrink-0 w-40 h-24 rounded-lg bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 animate-pulse"></div> {/* Gradient pulse */}
              <div className="flex-1 flex flex-col justify-center space-y-2">
                <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-full animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))
        ) : error ? (
          <p className="text-red-500 dark:text-red-400">Error: {error}</p>
        ) : videos && videos.length > 0 ? (
          videos.map((video) => <RelatedVideoCard key={video.id} video={video} />)
        ) : (
          <p className="text-slate-600 dark:text-slate-400">No related videos found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedVideosSidebar;
