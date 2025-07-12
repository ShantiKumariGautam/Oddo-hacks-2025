import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from '../components/LoginNavbar'; // Importing the LoginNavbar

const RequestUserProfile = () => {
  const navigate = useNavigate();

  const dummyUser = {
    name: 'Marc Demo',
    skillsOffered: ['UX', 'Game Script', 'Photoshop'],
    skillsWanted: ['React', 'Graphic Designer'],
    rating: 3.9,
    profilePhoto: 'https://api.dicebear.com/7.x/adventurer/svg?seed=marc',
  };

  return (
    // Main container background and default text color for dark theme
    <div className="min-h-screen bg-[#1C2036] font-sans text-gray-200">
      {/* Replacing the old Top Navbar with LoginNavbar */}
      <LoginNavbar />

      {/* Main Content Area - adapted to dark theme */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-[#272B40] shadow-lg rounded-xl flex flex-col md:flex-row justify-between items-center md:items-start border border-[#3A3F5C]">
        {/* Left Section - Profile Details */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          {/* Request Button - adapted to dark theme primary accent */}
          <button className="bg-[#5F52FF] text-white px-5 py-2 rounded-full mb-6 hover:bg-[#4E44D9] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5F52FF] focus:ring-opacity-75">
            Send Request
          </button>

          <h2 className="text-3xl font-semibold text-gray-100">{dummyUser.name}</h2>

          <div className="mt-5">
            <p className="font-medium text-gray-300 mb-2">Skills Offered:</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {dummyUser.skillsOffered.map((skill, i) => (
                <span
                  key={i}
                  // Skill tag styling for dark theme, matching UserCardHomepage
                  className="bg-[#5F52FF] text-white px-3 py-1 text-sm rounded-full whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="font-medium text-gray-300 mb-2">Skills Wanted:</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {dummyUser.skillsWanted.map((skill, i) => (
                <span
                  key={i}
                  // Skill tag styling for dark theme, matching UserCardHomepage
                  className="bg-[#7B42F6] text-white px-3 py-1 text-sm rounded-full whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="font-medium text-gray-300">Rating and Feedback:</p>
            {/* Rating text color adapted for dark theme */}
            <p className="text-[#FFD700] text-xl font-bold mt-1">⭐ {dummyUser.rating}/5</p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#3A3F5C] flex items-center justify-center overflow-hidden shadow-md border-2 border-[#5F52FF] flex-shrink-0">
          <img
            src={dummyUser.profilePhoto}
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestUserProfile;