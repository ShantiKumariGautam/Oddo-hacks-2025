import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  // You would typically handle form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login form submitted!' : 'Register form submitted!');
    // Add your authentication logic here (e.g., API calls)
  };

  return (
    // Form container adapted for dark theme
    <div className="max-w-md mx-auto bg-[#272B40] p-8 mt-10 rounded-xl shadow-lg border border-[#3A3F5C] font-sans">
      <h2 className="text-2xl font-bold text-center text-gray-100 mb-6"> {/* Text color updated */}
        {isLogin ? 'Login to Skill Swap' : 'Register on Skill Swap'}
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}> {/* Added onSubmit handler */}
        {!isLogin && (
          <>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                // Input styling adapted for dark theme
                className="w-1/2 px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
              />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-[#3A3F5C] rounded-md text-sm bg-[#1C2036] text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]"
          />
        )}

        {isLogin && (
          <div className="text-right text-sm">
            <a href="#" className="text-[#5F52FF] hover:underline transition duration-200 ease-in-out"> {/* Link color updated */}
              Forgot username/password?
            </a>
          </div>
        )}

        <button
          type="submit"
          // Submit button style updated to match the dark theme's primary accent
          className="w-full bg-[#5F52FF] hover:bg-[#4E44D9] text-white py-2 rounded-md font-semibold text-sm transition duration-200 ease-in-out"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-4"> {/* Text color updated */}
        {isLogin ? "Haven't registered yet?" : 'Already have an account?'}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          // Button link color updated (comment moved here)
          className="text-[#5F52FF] font-medium hover:underline transition duration-200 ease-in-out"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;