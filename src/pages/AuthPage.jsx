import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    // Main background updated to match the dark theme
    <div className="bg-[#1C2036] min-h-screen font-sans text-gray-200">
      {/* Top bar - adapted to dark theme */}
      <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-[#1C2036] border-b border-[#3A3F5C]">
        <div className="text-2xl font-bold text-gray-100 flex items-center gap-2"> {/* Text color updated */}
          {/* Using the consistent emoji and text from TopNavbar */}
          <span role="img" aria-label="skill-swap-icon">🤝</span>
          SwapVerse
        </div>
        <button
          onClick={() => navigate('/')}
          // Button style updated to match the dark theme's primary accent
          className="text-sm bg-[#5F52FF] text-white px-5 py-2 rounded-full hover:bg-[#4E44D9] transition duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#5F52FF] focus:ring-opacity-75"
        >
          Home
        </button>
      </div>

      {/* Auth Form will now be styled by its own component's theme */}
      <AuthForm />
    </div>
  );
};

export default AuthPage;