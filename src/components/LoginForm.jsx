import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import the icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    try {
      const response = await fetch('https://j-commerce-fast-api.vercel.app/logins/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.message === "Login successful") {
        navigate('/dashboard');
      } else {
        setError(data.detail || 'Login failed');
      }
    } catch (err) {
      setError('Error during login');
    } finally {
      setLoading(false); // Set loading to false once request is completed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-2 relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            id="email"
            className="pl-10 p-2 w-full border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <div className="mt-2 relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            id="password"
            className="pl-10 p-2 w-full border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      {/* Show loading spinner if loading is true */}
      {loading ? (
        <div className="flex justify-center items-center mb-4">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-6 h-6"></div>
        </div>
      ) : (
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Login
        </button>
      )}
    </form>
  );
}

export default LoginForm;
