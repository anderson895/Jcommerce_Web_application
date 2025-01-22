// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router, Route, and Routes
import LoginForm from './components/LoginForm';  // Import LoginForm
import Dashboard from './components/Dashboard';  // Import Dashboard

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <Routes>  {/* Use Routes to handle different paths */}
        <Route 
          path="/" 
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex items-center justify-center mb-6">
                  <h2 className="text-2xl font-semibold">Login</h2>
                </div>
                <LoginForm /> {/* Pass LoginForm as the component */}
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                </div>
              </div>
            </div>
          } 
        /> {/* Default route for Login */}
        
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;  // Ensure you are exporting the component as default
