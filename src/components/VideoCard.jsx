import React from 'react';
import { Link } from 'react-router-dom';
import { formatViews, formatUploadDate } from '../utils/formatters';

const VideoCard = React.memo(({ video }) => {
  if (!video) return null; // Handle case where video prop might be undefined

  const {
    id,
    thumbnail,
    title,
    channelName,
    views,
    duration,
    uploadDate,
  } = video;

  return (
    <Link
      to={`/video/${id}`}
      className="relative block group rounded-xl overflow-hidden shadow-lg dark:shadow-slate-900/40 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-[0.98]" /* Enhanced hover scale and shadow */
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" /* Added ease-in-out */
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md font-medium"> {/* Slightly darker background */}
          {duration}
        </span>
      </div>
      <div className="p-4 flex flex-col space-y-2">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
          {channelName}
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
          <span>{formatViews(views)}</span>
          <span className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></span>
          <span>{formatUploadDate(uploadDate)}</span>
        </div>
      </div>
    </Link>
  );
});

export default VideoCard;
