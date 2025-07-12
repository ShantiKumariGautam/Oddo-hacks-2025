import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../api';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'learner',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = isLogin
        ? await loginUser({
            email: formData.email,
            password: formData.password,
          })
        : await registerUser({
            ...formData,
            skills: formData.skills.split(',').map((skill) => skill.trim()),
          });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/home'); // redirect after login
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="bg-[#1C2036] min-h-screen font-sans text-gray-200">
      <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-[#1C2036] border-b border-[#3A3F5C]">
        <div className="text-2xl font-bold text-gray-100 flex items-center gap-2">
          <span
            role="img"
            aria-label="skill-swap-icon"
          >
            🤝
          </span>
          SwapVerse
        </div>
        <button
          onClick={() => navigate('/')}
          className="text-sm bg-[#5F52FF] text-white px-5 py-2 rounded-full hover:bg-[#4E44D9] transition duration-200"
        >
          Home
        </button>
      </div>

      <div className="max-w-md mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-[#2C2F48] text-white"
              />
              <input
                type="text"
                name="skills"
                placeholder="Skills (comma-separated)"
                value={formData.skills}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-[#2C2F48] text-white"
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-[#2C2F48] text-white"
              >
                <option value="learner">Learner</option>
                <option value="mentor">Mentor</option>
              </select>
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#2C2F48] text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#2C2F48] text-white"
          />
          <button
            type="submit"
            className="w-full bg-[#5F52FF] py-2 rounded text-white hover:bg-[#4E44D9] transition"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-[#5F52FF] hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
