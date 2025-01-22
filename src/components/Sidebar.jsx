// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 space-y-6 p-5 fixed top-0 left-0 h-full transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <button onClick={toggleSidebar}>
            <FaTimes className="text-white" />
          </button>
        </div>
        <ul className="space-y-4 mt-6">
          <li>
            <a href="#" className="text-lg hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#" className="text-lg hover:text-blue-500">Profile</a>
          </li>
          <li>
            <a href="#" className="text-lg hover:text-blue-500">Settings</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-2xl text-gray-800 absolute top-4 left-4 z-50"
      >
        <FaBars />
      </button>
    </>
  );
}

export default Sidebar;
