import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardOverviewPage from './pages/dashboard/DashboardOverviewPage';
import CoursesPage from './pages/dashboard/CoursesPage';
import CourseDetailsPage from './pages/dashboard/CourseDetailsPage';
import LearningPage from './pages/dashboard/LearningPage';
import MyLearningPage from './pages/dashboard/MyLearningPage';
import InstructorsPage from './pages/dashboard/InstructorsPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import ProgressPage from './pages/dashboard/ProgressPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import AboutPage from './pages/AboutPage'; // NEW
import ContactPage from './pages/ContactPage'; // NEW

export default function App() {
    // UI-only authentication state: true if 'isLoggedIn' is in localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const navigate = useNavigate();

    useEffect(() => {
        const handleLoginSuccess = () => {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
        };
        const handleLogout = () => {
            setIsLoggedIn(false);
            localStorage.removeItem('isLoggedIn');
            navigate('/'); // Redirect to landing page on logout
        };

        // Listen for custom events to simulate login/logout
        window.addEventListener('loginSuccess', handleLoginSuccess);
        window.addEventListener('logout', handleLogout);

        return () => {
            window.removeEventListener('loginSuccess', handleLoginSuccess);
            window.removeEventListener('logout', handleLogout);
        };
    }, [navigate]);

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/about" element={<AboutPage />} /> {/* NEW */}
            <Route path="/contact" element={<ContactPage />} /> {/* NEW */}

            {/* Protected Dashboard Routes */}
            {isLoggedIn ? (
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardOverviewPage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="courses/:courseId" element={<CourseDetailsPage />} />
                    <Route path="courses/:courseId/lesson/:lessonId" element={<LearningPage />} />
                    <Route path="my-learning" element={<MyLearningPage />} />
                    <Route path="instructors" element={<InstructorsPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="progress" element={<ProgressPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            ) : (
                // Redirect unauthenticated users trying to access dashboard routes to login
                <Route path="/dashboard/*" element={<LoginPage />} />
            )}

            {/* Fallback route for unknown paths */}
            <Route path="*" element={<LandingPage />} />
        </Routes>
    );
}
