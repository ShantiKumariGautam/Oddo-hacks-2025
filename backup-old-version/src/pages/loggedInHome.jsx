import React, { useState } from 'react';
import LoginNavbar from '../components/LoginNavbar'; // Adjust the path as per your file structure if LoginNavbar is not in '../components'
import UserCard from '../components/UserCard'; // Adjust the path as per your file structure

import { FiSearch } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const dummyUsers = [
  {
    id: 'user1',
    name: "Marc Demo",
    skillsOffered: ["UX", "Game Script", "Photoshop"],
    skillsWanted: ["React", "Graphic Designer"],
    rating: 3.9
  },
  {
    id: 'user2',
    name: "Michell",
    skillsOffered: ["Node.js", "Data Entry"],
    skillsWanted: ["UI Design", "Figma"],
    rating: 2.5
  },
  {
    id: 'user3',
    name: "Joe Wills",
    skillsOffered: ["React", "Firebase"],
    skillsWanted: ["UX", "Story Writing"],
    rating: 4.0
  }
];

const CombinedHomePageWithLoginNavbar = () => { // Changed component name
  const [page, setPage] = useState(1);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState("Availability");

  const handleSelect = (option) => {
    setSelectedAvailability(option);
    setAvailabilityOpen(false);
  };

  const handleRequest = (userId) => {
    console.log(`Request initiated for user ID: ${userId}`);
    alert(`Initiating request for ${userId}`);
  };

  return (
    // Main container for the entire page
    <div className="bg-[#1C2036] min-h-screen font-sans text-gray-200">
      {/* LoginNavbar placed directly at the top */}
      <LoginNavbar />

      {/* Main content of the homepage */}
      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col gap-8">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by name or skill..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#272B40] text-sm shadow-inner outline-none text-gray-200 placeholder:text-gray-400 border border-[#3A3F5C] focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          <button className="bg-[#5F52FF] hover:bg-[#4E44D9] text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5F52FF] focus:ring-opacity-50">
            Search
          </button>

          <div className="relative">
            <button
              onClick={() => setAvailabilityOpen(!availabilityOpen)}
              className="flex items-center gap-2 bg-[#272B40] border border-[#3A3F5C] px-4 py-2 rounded-lg shadow-inner text-sm text-gray-200 hover:bg-[#3A3F5C] focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF] transition duration-150 ease-in-out"
            >
              {selectedAvailability}
              <FaChevronDown className="text-gray-400 text-xs" />
            </button>

            {availabilityOpen && (
              <div className="absolute right-0 mt-2 bg-[#272B40] border border-[#3A3F5C] rounded-lg shadow-lg z-10 w-48 overflow-hidden">
                {["Anytime", "Weekdays", "Weekends", "Evenings"].map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm text-gray-200 hover:bg-[#3A3F5C] hover:text-[#5F52FF] cursor-pointer transition duration-150 ease-in-out"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cards - Now showing one card per row */}
        <div className="grid grid-cols-1 gap-6">
          {dummyUsers.map((user) => (
            <UserCard key={user.id} user={user} onRequest={() => handleRequest(user.id)} />
          ))}
        </div>

        {/* Pagination - adapted for dark theme */}
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 text-sm rounded-full font-medium transition duration-200 ease-in-out
                ${
                  page === i + 1
                    ? 'bg-[#5F52FF] text-white shadow-md'
                    : 'bg-[#272B40] text-gray-300 border border-[#3A3F5C] hover:bg-[#3A3F5C] hover:text-[#5F52FF]'
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombinedHomePageWithLoginNavbar; // Exporting the new component name