import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';
import { SidebarProvider } from '../context/SidebarContext';
// ThemeProvider is now wrapping App in main.jsx, so no need to import/use here.

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <DashboardNavbar />
                    <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
