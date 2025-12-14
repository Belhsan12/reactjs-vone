import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useVideoData from '../hooks/useVideoData';
import { formatViews, formatUploadDate } from '../utils/formatters';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideosSidebar from '../components/RelatedVideosSidebar';
import Button from '../components/Button';
import { ThumbsUp, Share2, Save, MoreHorizontal } from 'lucide-react';
import { mockVideos } from '../data/mockData';

const VideoPlayerPage = () => {
  const { id } = useParams();
  const { data: video, loading, error } = useVideoData(id);
  const { data: relatedVideos, loading: relatedLoading, error: relatedError } = useVideoData();
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    // Scroll to top when video changes
    window.scrollTo(0, 0);
    setShowFullDescription(false); // Reset description state on new video
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 animate-pulse">
        <div className="flex-1">
          <div className="w-full aspect-video bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-xl mb-6"></div> {/* Gradient pulse */}
          <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-3/4 mb-4"></div> {/* Gradient pulse */}
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-1/2 mb-6"></div> {/* Gradient pulse */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-24 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full"></div> {/* Gradient pulse */}
            <div className="h-10 w-24 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full"></div> {/* Gradient pulse */}
            <div className="h-10 w-24 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full"></div> {/* Gradient pulse */}
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 mb-6 shadow-md dark:shadow-slate-900/20"> {/* Added shadow */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div> {/* Gradient pulse */}
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-40"></div>
                <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-32"></div>
              </div>
              <div className="h-10 w-24 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-xl"></div>
            </div>
            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-full mb-2"></div>
            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-5/6"></div>
          </div>
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-1/2 mb-6"></div> {/* Gradient pulse */}
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="relative flex-shrink-0 w-40 h-24 rounded-lg bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div> {/* Gradient pulse */}
                <div className="flex-1 flex flex-col justify-center space-y-2">
                  <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 md:p-8 lg:p-12 text-center text-red-500 dark:text-red-400 text-lg">
        Error: {error}
      </div>
    );
  }

  if (!video) {
    return (
      <div className="container mx-auto p-4 md:p-8 lg:p-12 text-center text-slate-600 dark:text-slate-400 text-lg">
        Video not found.
      </div>
    );
  }

  const displayedDescription = showFullDescription
    ? video.description
    : `${video.description.substring(0, 200)}...`;
  const needsShowMore = video.description.length > 200;

  const filteredRelatedVideos = relatedVideos
    ? relatedVideos.filter((v) => v.id !== video.id).slice(0, 6) // Exclude current video, show top 6
    : [];

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        {/* Video Player Placeholder */}
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden mb-6 shadow-xl dark:shadow-slate-900/50">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Details */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
          {video.title}
        </h1>
        <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6"> {/* Increased gap */}
          <div className="flex items-center gap-4">
            <span>{formatViews(video.views)}</span>
            <span className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></span>
            <span>{formatUploadDate(video.uploadDate)}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4"> {/* Responsive gap for action buttons */}
            <Button variant="icon" aria-label="Like video" className="hover:text-indigo-600 dark:hover:text-indigo-400"><ThumbsUp size={20} /></Button> {/* Increased icon size */}
            <Button variant="icon" aria-label="Share video" className="hover:text-emerald-600 dark:hover:text-emerald-400"><Share2 size={20} /></Button>
            <Button variant="icon" aria-label="Save video" className="hover:text-rose-600 dark:hover:text-rose-400"><Save size={20} /></Button>
            <Button variant="icon" aria-label="More options" className="hover:text-slate-600 dark:hover:text-slate-400"><MoreHorizontal size={20} /></Button>
          </div>
        </div>

        {/* Channel Info & Description */}
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 mb-6">
          <ChannelInfo
            channelName={video.channelName}
            channelIcon={video.channelIcon}
            subscribers={`${formatViews(video.views * 10).replace(' views', '')}`}
          />
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed group">
            {displayedDescription}
            {needsShowMore && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1 font-medium transition-colors duration-200 ease-in-out"
              >
                {showFullDescription ? 'Show less' : 'Show more'}
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <RelatedVideosSidebar videos={filteredRelatedVideos} loading={relatedLoading} error={relatedError} />
    </div>
  );
};

export default VideoPlayerPage;
