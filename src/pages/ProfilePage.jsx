import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from '../components/LoginNavbar';
import ProfileForm from '../components/ProfileForm'; // This is the component we'll update next

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1C2036] min-h-screen font-sans text-gray-200">
      {/* Using the LoginNavbar component here */}
      <LoginNavbar />

      {/* The previous save/discard/home/swaprequest buttons here are now removed as per new request */}
      {/* Profile Form will contain its own Edit/Save Changes logic */}
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;