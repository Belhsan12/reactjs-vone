import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LenisScroll from './components/lenis-scroll';
import LandingNavbar from './components/LandingNavbar';
import Footer from './components/footer';
import DashboardNavbar from './components/DashboardNavbar';
import Sidebar from './components/Sidebar';
import { SidebarProvider } from './context/SidebarContext';
import { PortfolioPage } from './pages'; // Import PortfolioPage

// Placeholder components for other routes
const HomePage = () => (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl font-bold">
        <LandingNavbar />
        <h1 className="z-10">Welcome to the Home Page!</h1>
        <Footer />
    </div>
);
const AboutPage = () => (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-blue-600 text-white text-3xl font-bold">
        <LandingNavbar />
        <h1 className="z-10">About Us</h1>
        <Footer />
    </div>
);
const ContactPage = () => (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 to-amber-600 text-white text-3xl font-bold">
        <LandingNavbar />
        <h1 className="z-10">Contact Us</h1>
        <Footer />
    </div>
);
const LoginPage = () => <div className="h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-3xl font-bold">Login Page</div>;
const RegisterPage = () => <div className="h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-3xl font-bold">Register Page</div>;
const DashboardPage = () => (
    <SidebarProvider>
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNavbar />
                <main className="flex-1 p-6 overflow-y-auto">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Dashboard</h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">Welcome to your personalized dashboard!</p>
                    {/* Add more dashboard content here */}
                </main>
            </div>
        </div>
    </SidebarProvider>
);

export default function App() {
    return (
        <div className="App">
            <LenisScroll />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} /> {/* New Portfolio Route */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard/*" element={<DashboardPage />} />
            </Routes>
        </div>
    );
}