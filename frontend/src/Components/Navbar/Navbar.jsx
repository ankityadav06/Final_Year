import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoLight from '../../assets/logo-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  

  return (
    <div>
      <nav className="navbar">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <img src={logoLight} alt="Logo" className="logo" />
        </Link>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/course">Courses</Link></li>
          <li><Link to="/top-courses">Top Courses</Link></li>
          <li><Link to="/recommendation">Recommendation</Link></li>
        </ul>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Register Button */}
          <button className="register-btn" ><a href='/sign' >Register</a></button>

          {/* Login Button */}
          <button className="register-btn"><a href='/Login' >Login</a></button>

          {/* Icons */}
          <div className="navbar-icons">
            <Link to="/cart" className="icon-link">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </Link>
            <Link to="/profile" className="icon-link">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </Link>
          </div>
        </div>
      </nav>

     

     
    </div>
  );
};

export default Navbar;
