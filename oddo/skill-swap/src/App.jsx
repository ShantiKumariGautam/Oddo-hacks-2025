import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import RequestUserProfile from './pages/RequestUserProfile';
import RequestPage from './pages/RequestPage';
import SwapRequest from './pages/swaprequest';
import LoginHome from './pages/loggedInHome';
const App = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/requestuserprofile" element={<RequestUserProfile />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/swaprequest" element={<SwapRequest />} />
        <Route path="/loginhome" element={<LoginHome />} />
      </Routes>
    </div>
  );
};

export default App;
