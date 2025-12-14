import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Optional: Add a Footer component here */}
    </div>
  );
};

export default Layout;
