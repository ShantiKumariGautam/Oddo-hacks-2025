// pages/request.js
import React, { useState } from 'react';
import LoginNavbar from '../components/LoginNavbar'; // Import the LoginNavbar component

const RequestPage = () => {
  const [offeredSkill, setOfferedSkill] = useState('');
  const [wantedSkill, setWantedSkill] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ offeredSkill, wantedSkill, message });
    alert('Request submitted! Check console for details.');
    // You'd typically send this data to an API
  };

  return (
    // Main container with existing dark background
    <div className="min-h-screen bg-gray-900 font-sans"> {/* Added font-sans for consistency */}
      {/* Add the LoginNavbar component at the top */}
      <LoginNavbar />

      {/* The rest of the content, centered vertically and horizontally */}
      <div className="flex items-center justify-center p-4"> {/* This div was wrapping the entire content */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
          {/* Removed the empty line here */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="offeredSkill" className="block text-gray-300 text-sm font-medium mb-2">
                Choose one of your offered skills
              </label>
              <div className="relative">
                <select
                  id="offeredSkill"
                  name="offeredSkill"
                  value={offeredSkill}
                  onChange={(e) => setOfferedSkill(e.target.value)}
                  className="block w-full bg-gray-700 border border-gray-600 text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="" disabled>Select a skill</option>
                  {/* Replace with actual skills from your data */}
                  <option value="react">React Development</option>
                  <option value="nodejs">Node.js Backend</option>
                  <option value="figma">Figma Design</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="wantedSkill" className="block text-gray-300 text-sm font-medium mb-2">
                Choose one of their wanted skills
              </label>
              <div className="relative">
                <select
                  id="wantedSkill"
                  name="wantedSkill"
                  value={wantedSkill}
                  onChange={(e) => setWantedSkill(e.target.value)}
                  className="block w-full bg-gray-700 border border-gray-600 text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="" disabled>Select a skill</option>
                  {/* Replace with actual skills from your data */}
                  <option value="python">Python Programming</option>
                  <option value="data_science">Data Science</option>
                  <option value="ux_research">UX Research</option>
                  <option value="content_writing">Content Writing</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full bg-gray-700 border border-gray-600 text-white py-2 px-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;