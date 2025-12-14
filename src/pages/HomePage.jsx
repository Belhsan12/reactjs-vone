import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import SkeletonVideoCard from '../components/SkeletonVideoCard';
import CategoryFilter from '../components/CategoryFilter';
import useVideoData from '../hooks/useVideoData';
import { mockCategories } from '../data/mockData';

const HomePage = () => {
  const { data: videos, loading, error } = useVideoData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    if (videos) {
      if (selectedCategory === 'All') {
        setFilteredVideos(videos);
      } else {
        setFilteredVideos(videos.filter(video => video.categories === selectedCategory));
      }
    }
  }, [videos, selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />

      <div className="container mx-auto p-4 md:p-8 lg:p-12 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 tracking-tight">
          Explore Videos
        </h1>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonVideoCard key={i} />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 dark:text-red-400 text-center text-lg">Error: {error}</p>
        ) : filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-slate-600 dark:text-slate-400 text-center text-lg">No videos found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
