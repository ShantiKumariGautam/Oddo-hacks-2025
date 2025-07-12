import React from 'react';

const UserCardHomepage = ({ user, onRequest }) => {
  return (
    // Card background, border, and shadow adapted for dark theme
    <div className="bg-[#272B40] rounded-xl border border-[#3A3F5C] shadow-sm p-6 flex flex-col md:flex-row items-center gap-5 hover:shadow-md transition-shadow duration-200 ease-in-out font-sans text-gray-200">
      {/* Profile Photo Placeholder - adjusted for dark theme */}
      <div className="w-20 h-20 rounded-full bg-[#3A3F5C] flex items-center justify-center text-sm text-gray-400 flex-shrink-0 overflow-hidden">
        Profile Photo
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-100 mb-1">{user.name}</h2> {/* Text color for name */}

        <div className="mt-3">
          <p className="text-sm text-gray-300 mb-1">Skill Offered:</p> {/* Label text color */}
          <div className="flex flex-wrap gap-2">
            {user.skillsOffered.map((skill, i) => (
              <span
                key={i}
                // Skill tag colors adapted for dark theme (blue from the image)
                className="bg-[#5F52FF] text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="text-sm text-gray-300 mb-1">Skill Wanted:</p> {/* Label text color */}
          <div className="flex flex-wrap gap-2">
            {user.skillsWanted.map((skill, i) => (
              <span
                key={i}
                // Skill tag colors adapted for dark theme (purple from the image)
                className="bg-[#7B42F6] text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:justify-between h-full pt-4 md:pt-0">
        <button
          onClick={onRequest}
          // Request button style from the search button (blue)
          className="bg-[#5F52FF] hover:bg-[#4E44D9] text-white px-5 py-2 rounded-full text-sm font-medium transition duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#5F52FF] focus:ring-opacity-75 whitespace-nowrap"
        >
          Request
        </button>
        {/* Rating text color adapted for dark theme, made more visible */}
        <p className="text-sm text-[#FFD700] mt-3 md:mt-2 font-semibold">
          Rating: {user.rating}/5
        </p>
      </div>
    </div>
  );
};

export default UserCardHomepage;