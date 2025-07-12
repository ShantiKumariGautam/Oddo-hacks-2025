import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import the logo

const LoginNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#272B40] text-gray-200 p-4 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Platform Name */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Swapverse Logo" className="h-8 w-8 mr-2" /> {/* Added logo */}
          <div className="text-2xl font-bold text-[#5F52FF]">
            Swapverse
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigate('/swap-request')}
            className="text-white bg-[#5F52FF] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#4E44D9] transition duration-200"
          >
            Swap Request
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-gray-300 hover:text-white transition duration-200 text-sm font-medium"
          >
            Home
          </button>
          {/* User Profile Icon */}
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#5F52FF] flex items-center justify-center cursor-pointer bg-gray-600 hover:border-gray-300 transition duration-200"
            title="My Profile"
          >
            <FaUserCircle className="w-7 h-7 text-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;