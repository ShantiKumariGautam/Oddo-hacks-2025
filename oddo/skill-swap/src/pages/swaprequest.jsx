// pages/swaprequest.js
import React, { useState } from 'react';
import LoginNavbar from '../components/LoginNavbar'; // Import the LoginNavbar component

// Dummy data for demonstration purposes
const initialRequests = [
  {
    id: 'req1',
    profilePhoto: 'https://api.dicebear.com/7.x/adventurer/svg?seed=marc',
    name: 'Marc Demo',
    skillsOffered: ['JavaScript', 'React'],
    skillsWanted: ['Marketing'],
    rating: 3.9,
    status: 'Pending',
  },
  {
    id: 'req2',
    profilePhoto: 'https://api.dicebear.com/7.x/adventurer/svg?seed=jane',
    name: 'Jane Doe',
    skillsOffered: ['Python'],
    skillsWanted: ['Data Science'],
    rating: 4.2,
    status: 'Rejected',
  },
  {
    id: 'req3',
    profilePhoto: 'https://api.dicebear.com/7.x/adventurer/svg?seed=john',
    name: 'John Smith',
    skillsOffered: ['UX Design'],
    skillsWanted: ['Figma'],
    rating: 4.5,
    status: 'Accepted',
  },
  {
    id: 'req4',
    profilePhoto: 'https://api.dicebear.com/7.x/adventurer/svg?seed=alice',
    name: 'Alice Brown',
    skillsOffered: ['Content Writing'],
    skillsWanted: ['SEO'],
    rating: 3.7,
    status: 'Pending',
  },
];

const SwapRequestPage = () => {
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState(initialRequests);

  const filteredRequests = requests.filter((request) => {
    const matchesStatus = filterStatus ? request.status === filterStatus : true;
    const matchesSearch = searchTerm
      ? request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.skillsOffered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        request.skillsWanted.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id, newStatus) => {
    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'text-yellow-400';
      case 'Accepted':
        return 'text-green-500';
      case 'Rejected':
        return 'text-red-500';
      default:
        return 'text-gray-300';
    }
  };

  return (
    // This is the outermost container, it should be full screen width
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* LoginNavbar: Placed DIRECTLY here. It will handle its own internal max-width and centering. */}
      <LoginNavbar />

      {/* Main Content Wrapper: This div will contain ALL other page content below the navbar. */}
      {/* It will apply max-width and horizontal auto-margins to center the content. */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"> {/* Added padding here for overall content */}

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between my-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto">
            <select
              className="block w-full bg-gray-700 border border-gray-600 text-white py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>

          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by name or skill..."
              className="flex-grow bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              onClick={() => console.log('Search clicked')}
            >
              Search
            </button>
          </div>
        </div>

        {/* Request List */}
        <div className="space-y-6">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div key={request.id} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0">
                    <img
                      src={request.profilePhoto}
                      alt="Profile Photo"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-300">{request.name}</h2>
                    <p className="text-gray-400 text-sm mt-1">
                      Rating: <span className="font-medium text-yellow-300">{request.rating}/5</span>
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Skill Offered:{' '}
                      {request.skillsOffered.map((skill, index) => (
                        <span key={index} className="inline-block bg-blue-700 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      Skill Wanted:{' '}
                      {request.skillsWanted.map((skill, index) => (
                        <span key={index} className="inline-block bg-purple-700 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end w-full md:w-auto space-y-2 md:space-y-0">
                  <p className="text-lg font-medium">
                    Status: <span className={getStatusColor(request.status)}>{request.status}</span>
                  </p>
                  {request.status === 'Pending' && (
                    <div className="flex space-x-3 mt-2 md:mt-0">
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => handleStatusChange(request.id, 'Accepted')}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={() => handleStatusChange(request.id, 'Rejected')}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg mt-10">No skill swap requests found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-4 text-gray-400">
          <button className="hover:text-blue-400 transition duration-200 text-3xl">&lt;</button>
          <span className="flex space-x-2">
            <a href="#" className="text-lg text-blue-400 font-bold">1</a>
            <a href="#" className="text-lg hover:text-blue-400 transition duration-200">2</a>
            <a href="#" className="text-lg hover:text-blue-400 transition duration-200">3</a>
          </span>
          <button className="hover:text-blue-400 transition duration-200 text-3xl">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default SwapRequestPage;