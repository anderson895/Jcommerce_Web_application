// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';  // Add Navigate for redirection
import LoginForm from './components/LoginForm';  // Import LoginForm
import Dashboard from './components/Dashboard';  // Import Dashboard

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on page load
    const userIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (userIsAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Set authentication flag to true and store it in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Remove authentication flag from localStorage
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route for Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />  // Redirect to Dashboard if authenticated
            ) : (
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-2xl font-semibold">Login</h2>
                  </div>
                  <LoginForm handleLogin={handleLogin} /> {/* Pass LoginForm as the component */}
                  <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                  </div>
                </div>
              </div>
            )
          }
        />

        {/* Dashboard route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? (
            <Dashboard handleLogout={handleLogout} />  // Render Dashboard only if authenticated
          ) : (
            <Navigate to="/" />  // Redirect to login page if not authenticated
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
