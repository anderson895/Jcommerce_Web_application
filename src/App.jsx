// src/App.jsx
import React from 'react';
import LoginForm from './components/LoginForm'; // Import LoginForm
import Dashboard from './components/Dashboard'; // Import Dashboard


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-2xl font-semibold">Login</h2>
        </div>
        <LoginForm /> {/* No need to pass onSubmit anymore */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App; // Ensure you are exporting the component as default
