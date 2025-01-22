// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing modules
import LoginForm from './components/LoginForm'; // Import LoginForm
import Dashboard from './components/Dashboard'; // Import Dashboard component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          {/* Login route */}
          <Route
            path="/"
            element={
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex items-center justify-center mb-6">
                  <h2 className="text-2xl font-semibold">Login</h2>
                </div>
                <LoginForm /> {/* Render LoginForm */}
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
            }
          />

          {/* Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <Dashboard /> {/* Render Dashboard */}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export the component as default
