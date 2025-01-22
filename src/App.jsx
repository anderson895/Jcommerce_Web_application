import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated when the app is loaded or reloaded
  useEffect(() => {
    const userIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (userIsAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true'); // Save the authentication state
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove the authentication state
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      {/* Both "/" and "/dashboard" routes redirect to LoginForm.jsx */}
      <Route
        path="/"
        element={<LoginForm handleLogin={handleLogin} />}
      />
      
      <Route
        path="/dashboard"
        element={<LoginForm handleLogin={handleLogin} />}
      />
    </Routes>
  );
}

export default App;
