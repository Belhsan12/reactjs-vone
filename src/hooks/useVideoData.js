import { useState, useEffect } from 'react';
import { mockVideos } from '../data/mockData';

const useVideoData = (videoId = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        if (videoId) {
          const video = mockVideos.find((v) => v.id === videoId);
          if (video) {
            setData(video);
          } else {
            setError('Video not found');
            setData(null);
          }
        } else {
          setData(mockVideos);
        }
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching mock video data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [videoId]);

  return { data, loading, error };
};

export default useVideoData;
