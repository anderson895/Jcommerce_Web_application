// src/components/LoginForm.jsx
import React, { useState } from 'react';

function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual login logic here, for example:
    if (username === 'admin' && password === 'password') {
      handleLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
