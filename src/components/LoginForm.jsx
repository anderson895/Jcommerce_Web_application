import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
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
        // Check for a specific status code (401)
        console.log(response.status)
        if (response.status === 401) {
          setError('Invalid password');
        } else if(response.status === 404){
          setError('User not found or inactive admin account');
        }else{
          setError(data.detail || 'Login failed');
        }
      }
    } catch (err) {
      setError('Error during login');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      {/* Loading Screen */}
      {loading && (
       <div id="loadingScreen" className="fixed inset-0 bg-white flex justify-center items-center z-50 opacity-100 transition-opacity duration-1000">
       <div className="absolute inset-0 bg-white opacity-75"></div> {/* White background for the entire card */}
       <svg className="h-20 w-20 stroke-gray-500 animate-spin" viewBox="0 0 256 256">
         <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
         <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
       </svg>
       <span className="text-4xl font-medium text-gray-500">Loading...</span>
     </div>
     
      
      )}

      {/* Email and Password fields */}
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

      {!loading && (
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Login
        </button>
      )}
    </form>
  );
}

export default LoginForm;
