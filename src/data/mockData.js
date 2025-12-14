const generateRandomId = () => Math.random().toString(36).substring(2, 10);
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const mockVideos = Array.from({ length: 20 }).map((_, i) => ({
  id: generateRandomId(),
  thumbnail: `https://picsum.photos/seed/${i + 1}/640/360`,
  title: `Captivating Video Title ${i + 1} for Streaming Platform`,
  channelName: `ChannelX Official ${i % 3}`,
  views: getRandomInt(10000, 5000000),
  duration: `${getRandomInt(1, 59)}:${String(getRandomInt(0, 59)).padStart(2, '0')}`,
  uploadDate: `${getRandomInt(1, 4)} ${getRandomInt(0, 1) === 0 ? 'days' : 'weeks'} ago`,
  description: `This is a fascinating description for video ${i + 1}, exploring various aspects of modern technology and entertainment. It dives deep into the intricate details of cutting-edge innovations and their impact on society. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  channelIcon: `https://i.pravatar.cc/150?img=${i + 1}`,
  categories: [
    'Tech',
    'Entertainment',
    'Education',
    'Gaming',
    'Lifestyle',
    'Music',
    'News',
    'Sports',
  ][getRandomInt(0, 7)],
}));

const mockCategories = [
  'All',
  'Tech',
  'Entertainment',
  'Education',
  'Gaming',
  'Lifestyle',
  'Music',
  'News',
  'Sports',
  'Comedy',
  'Travel',
  'Documentary',
  'Food',
];

export { mockVideos, mockCategories };
