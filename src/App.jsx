// src/App.jsx
import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm'; // Import LoginForm
import Dashboard from './components/Dashboard'; // Import Dashboard

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
    <div>
      {isAuthenticated ? (
        <Dashboard handleLogout={handleLogout} />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
