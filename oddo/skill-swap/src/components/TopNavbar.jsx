import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const TopNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#272B40] shadow-md">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src={logo}
          alt="Skill Swap Platform Logo"
          className="h-8 w-8 mr-2"
        />
        <div className="text-xl font-semibold text-gray-200">
          Skill Swap Platform
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => navigate('/auth')} // ✅ updated
          className="text-white bg-[#5F52FF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4E44D9] transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
