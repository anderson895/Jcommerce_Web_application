// src/App.jsx
import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const handleSubmit = (email, password) => {
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <LoginForm onSubmit={handleSubmit} />
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
