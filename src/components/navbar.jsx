import React, { useState } from 'react';
import { Search, UserCircle, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search logic here, e.g., navigate to search results page
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-4 md:px-8 flex items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200">
          <Menu size={24} />
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <span className="bg-gradient-to-br from-indigo-600 to-purple-600 text-transparent bg-clip-text text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:from-indigo-700 group-hover:to-purple-700"> {/* Changed to br, added ease-in-out, and gradient hover effect */}
            StreamVista
          </span>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all duration-300 ease-in-out"> {/* Added focus-within:border-transparent and ease-in-out */}
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400"
        />
        <button type="submit" className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
          <Search size={20} />
        </button>
      </form>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="md:hidden">
          <button className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200">
            <Search size={24} />
          </button>
        </div>
        <ThemeToggle />
        <button className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200">
          <UserCircle size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
