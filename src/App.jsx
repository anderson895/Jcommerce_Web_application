// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'; // Import LoginForm
import Dashboard from './components/Dashboard'; // Import Dashboard

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login form */}
        <Route path="/" element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-2xl font-semibold">Login</h2>
              </div>
              <LoginForm />
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
              </div>
            </div>
          </div>
        } />

        {/* Route for the dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
