import React from 'react'
import './Register.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
    const handleClose = () => {
      navigate("/"); // Navigate to the homepage or any desired route
    };


  return (
    <div className='register-container'>
       <button className="close-button" onClick={handleClose}>
        &times;
      </button>
      <div className='Header'>
       <h2>Register</h2> 
        <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"            
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"            
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
           
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="btn-register">
          Register
        </button>
        
      </form>
      <p className="login-link">
        Have an account? <a href="/login">Login</a>
      </p>




      </div>  
    </div>
  )
}

export default Register