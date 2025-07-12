import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path is correct: src/assets/logo.png

const TopNavbar = () => {
    const navigate = useNavigate();

    return (
        // Changed background to dark theme color
        <div className="flex justify-between items-center px-6 py-4 bg-[#272B40] shadow-md">
            {/* Logo and Platform Name on the left */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Skill Swap Platform Logo" className="h-8 w-8 mr-2" />
                <div className="text-xl font-semibold text-gray-200">Skill Swap Platform</div> {/* Changed text color for dark theme */}
            </div>
            
            {/* Login button on the right */}
            <div className="flex items-center">
                <button
                    onClick={() => navigate('/login')} // Assuming '/login' is your login route
                    className="text-white bg-[#5F52FF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4E44D9] transition duration-200"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default TopNavbar;