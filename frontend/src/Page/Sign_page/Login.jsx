import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/"); // Navigate to the homepage or any desired route
  };

  return (
    <div className="login-container">
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
      <p className="login-link">
       Don`t have an account? <a href="/sign">Register</a>
      </p>
    </div>
  );
};

export default Login;
