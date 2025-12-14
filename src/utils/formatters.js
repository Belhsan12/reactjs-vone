export const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M views';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(0) + 'K views';
  } else {
    return views + ' views';
  }
};

export const formatDuration = (duration) => {
  // Assumes duration is already in 'MM:SS' format from mock data
  return duration;
};

export const formatUploadDate = (dateString) => {
  // Assumes dateString is like 'X days ago' or 'X weeks ago' from mock data
  return dateString;
};
