import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Page/Home/Home';
import Recommendation from './Page/Recommendation/Recommendation';
import Register from './Page/Sign_page/Register';
import Login from './Page/Sign_page/Login';
import Profile from './Page/Profile/Profile';
function App() {
  const location = useLocation();

  // Define routes where the Navbar should be hidden
  const hideNavbarRoutes = ['/sign', '/login','/profile'];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app">
      {/* Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/sign" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

// Wrap `App` in a `BrowserRouter`
export default function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
