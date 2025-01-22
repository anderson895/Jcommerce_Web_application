import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing
import App from './App.jsx';  // Import the App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
