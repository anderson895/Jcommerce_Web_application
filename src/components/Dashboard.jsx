// src/components/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
