import React from 'react';
import Button from './Button';

const ChannelInfo = ({ channelName, channelIcon, subscribers }) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-6 shadow-md dark:shadow-slate-900/20"> {/* Added subtle shadow */}
      <div className="flex items-center gap-4">
        <img
          src={channelIcon}
          alt={channelName}
          className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 dark:border-purple-500 shadow-lg shadow-indigo-500/30" /* Deeper shadow */
        />
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {channelName}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {subscribers} subscribers
          </p>
        </div>
      </div>
      <Button variant="primary" className="px-4 py-2 text-sm">Subscribe</Button>
    </div>
  );
};

export default ChannelInfo;
