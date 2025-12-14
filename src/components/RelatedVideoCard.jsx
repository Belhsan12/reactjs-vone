import React from 'react';
import { Link } from 'react-router-dom';
import { formatViews, formatUploadDate } from '../utils/formatters';

const RelatedVideoCard = React.memo(({ video }) => {
  if (!video) return null;

  const { id, thumbnail, title, channelName, views, duration, uploadDate } = video;

  return (
    <Link
      to={`/video/${id}`}
      className="flex gap-3 group transition-all duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg p-2 -m-2 hover:shadow-md dark:hover:shadow-slate-900/20" /* Increased duration, added ease-in-out, subtle shadow on hover */
    >
      <div className="relative flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" /* Increased duration, added ease-in-out */
          loading="lazy"
        />
        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded-md font-medium"> {/* Slightly darker background, adjusted padding */}
          {duration}
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2 leading-tight mb-0.5">
          {title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">
          {channelName}
        </p>
        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
          <span>{formatViews(views)}</span>
          <span className="w-0.5 h-0.5 bg-slate-400 dark:bg-slate-600 rounded-full"></span>
          <span>{formatUploadDate(uploadDate)}</span>
        </div>
      </div>
    </Link>
  );
});

export default RelatedVideoCard;
