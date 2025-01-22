import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';  // No need to import BrowserRouter here
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (userIsAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex items-center justify-center mb-6">
                  <h2 className="text-2xl font-semibold">Login</h2>
                </div>
                <LoginForm handleLogin={handleLogin} />
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                </div>
              </div>
            </div>
          )
        }
      />
      <Route
        path="/dashboard"
        element={isAuthenticated ? (
          <Dashboard handleLogout={handleLogout} />
        ) : (
          <Navigate to="/" />
        )}
      />
    </Routes>
  );
}

export default App;
