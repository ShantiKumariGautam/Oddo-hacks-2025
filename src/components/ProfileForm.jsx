import React, { useState, useEffect } from 'react';
import { FaTimesCircle } from 'react-icons/fa'; // For the 'x' button on tags

const dummyProfileData = {
  name: "John Doe",
  location: "New York, USA",
  skillsOffered: ["Graphic Design", "Video Editing", "Photoshop"],
  skillsWanted: ["Python", "JavaScript", "Manager"],
  availability: "Weekends",
  profileVisibility: "Public",
  profilePhoto: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=ProfileUser" // Dummy avatar
};

const ProfileForm = () => {
  const [profile, setProfile] = useState(dummyProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [originalProfile, setOriginalProfile] = useState(dummyProfileData); // To revert on discard

  // State for new skill input
  const [newOfferedSkill, setNewOfferedSkill] = useState('');
  const [newWantedSkill, setNewWantedSkill] = useState('');

  // A helper function for deep comparison of two objects
  const areObjectsEqual = (obj1, obj2) => {
    // Check if objects are strictly equal (same reference)
    if (obj1 === obj2) return true;

    // Check if they are non-null objects
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
      if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  };

  // Determine if there are changes by comparing 'profile' with 'originalProfile'
  // This useEffect ensures 'hasChanges' is re-calculated whenever 'profile' or 'originalProfile' changes
  const hasChanges = !areObjectsEqual(profile, originalProfile);


  // Function to toggle edit mode
  const handleEditToggle = () => {
    if (isEditing) {
      // If currently editing, and user clicks "Cancel"
      setProfile(originalProfile); // Revert to original data
      // No need to setOriginalProfile here, it's already the "saved" state
    } else {
      // If not editing, and user clicks "Edit Profile"
      setOriginalProfile(profile); // Save current state as original before editing
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Function to add a new offered skill
  const handleAddOfferedSkill = (e) => {
    if (e.key === 'Enter' && newOfferedSkill.trim() !== '') {
      e.preventDefault(); // Prevent form submission
      setProfile(prevProfile => ({
        ...prevProfile,
        skillsOffered: [...prevProfile.skillsOffered, newOfferedSkill.trim()]
      }));
      setNewOfferedSkill('');
    }
  };

  // Function to remove an offered skill
  const handleRemoveOfferedSkill = (skillToRemove) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      skillsOffered: prevProfile.skillsOffered.filter(skill => skill !== skillToRemove)
    }));
  };

  // Function to add a new wanted skill
  const handleAddWantedSkill = (e) => {
    if (e.key === 'Enter' && newWantedSkill.trim() !== '') {
      e.preventDefault(); // Prevent form submission
      setProfile(prevProfile => ({
        ...prevProfile,
        skillsWanted: [...prevProfile.skillsWanted, newWantedSkill.trim()]
      }));
      setNewWantedSkill('');
    }
  };

  // Function to remove a wanted skill
  const handleRemoveWantedSkill = (skillToRemove) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      skillsWanted: prevProfile.skillsWanted.filter(skill => skill !== skillToRemove)
    }));
  };

  // Function to save changes
  const handleSaveChanges = () => {
    console.log("Saving changes:", profile);
    // Here you would typically send 'profile' data to your backend API
    setIsEditing(false); // Exit edit mode after saving
    setOriginalProfile(profile); // Update original profile to current saved state
    alert("Profile saved successfully!"); // For demonstration
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#272B40] p-8 mt-10 rounded-xl shadow-lg border border-[#3A3F5C] font-sans text-gray-200">
      {/* Profile Header & Photo */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-100">My Profile</h2>
        <div className="relative w-32 h-32 rounded-full border-2 border-[#5F52FF] flex items-center justify-center overflow-hidden flex-shrink-0 mt-4 md:mt-0">
          <img
            src={profile.profilePhoto}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
          {isEditing && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="text-blue-300 hover:underline">Add/Edit</button>
              <button className="text-red-300 hover:underline mt-1">Remove</button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Form Fields */}
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full px-4 py-2 border rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]
                        ${isEditing ? 'border-[#3A3F5C]' : 'border-transparent cursor-not-allowed'}`}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full px-4 py-2 border rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]
                        ${isEditing ? 'border-[#3A3F5C]' : 'border-transparent cursor-not-allowed'}`}
          />
        </div>

        {/* Skills Offered */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">Skills Offered</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {profile.skillsOffered.map((skill, index) => (
              <span
                key={index}
                className="bg-[#5F52FF] text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1"
              >
                {skill}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => handleRemoveOfferedSkill(skill)}
                    className="ml-1 text-white hover:text-gray-200"
                  >
                    <FaTimesCircle className="w-3 h-3" />
                  </button>
                )}
              </span>
            ))}
          </div>
          {isEditing && (
            <input
              type="text"
              placeholder="Add new skill (press Enter)"
              value={newOfferedSkill}
              onChange={(e) => setNewOfferedSkill(e.target.value)}
              onKeyDown={handleAddOfferedSkill}
              className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
            />
          )}
        </div>

        {/* Skills Wanted */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">Skills Wanted</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {profile.skillsWanted.map((skill, index) => (
              <span
                key={index}
                className="bg-[#7B42F6] text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1"
              >
                {skill}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => handleRemoveWantedSkill(skill)}
                    className="ml-1 text-white hover:text-gray-200"
                  >
                    <FaTimesCircle className="w-3 h-3" />
                  </button>
                )}
              </span>
            ))}
          </div>
          {isEditing && (
            <input
              type="text"
              placeholder="Add new skill (press Enter)"
              value={newWantedSkill}
              onChange={(e) => setNewWantedSkill(e.target.value)}
              onKeyDown={handleAddWantedSkill}
              className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
            />
          )}
        </div>

        {/* Availability */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">Availability</label>
          {isEditing ? (
            <select
              name="availability"
              value={profile.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
            >
              <option value="Anytime">Anytime</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Evenings">Evenings</option>
            </select>
          ) : (
            <input
              type="text"
              name="availability"
              value={profile.availability}
              readOnly
              className="w-full px-4 py-2 border border-transparent rounded-md text-sm bg-[#1C2036] text-gray-200 cursor-not-allowed"
            />
          )}
        </div>

        {/* Profile Visibility */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">Profile Visibility</label>
          {isEditing ? (
            <select
              name="profileVisibility"
              value={profile.profileVisibility}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          ) : (
            <input
              type="text"
              name="profileVisibility"
              value={profile.profileVisibility}
              readOnly
              className="w-full px-4 py-2 border border-transparent rounded-md text-sm bg-[#1C2036] text-gray-200 cursor-not-allowed"
            />
          )}
        </div>
      </div>

      {/* Edit/Save Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button
          onClick={handleEditToggle}
          // The "Edit" button changes text to "Cancel" when editing
          className="bg-[#5F52FF] hover:bg-[#4E44D9] text-white px-6 py-2 rounded-full text-md font-medium transition duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#5F52FF] focus:ring-opacity-75"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>

        <button
          onClick={handleSaveChanges}
          disabled={!isEditing || !hasChanges} // Disable if not editing OR no changes
          // Save Changes button style, disabled state adapted for dark theme
          className={`px-6 py-2 rounded-full text-md font-medium transition duration-200 ease-in-out
                     ${isEditing && hasChanges
                       ? 'bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75'
                       : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                     }`}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;