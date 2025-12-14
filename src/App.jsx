import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/video/:id" element={<VideoPlayerPage />} />
                {/* Add a 404 Not Found page here if desired */}
            </Route>
        </Routes>
    );
}
