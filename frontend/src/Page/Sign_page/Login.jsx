import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", formData);
      setMessage(response.data.message);
      if (response.data.success) {
        navigate("/dashboard"); // Redirect to a dashboard or homepage on successful login
      }
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate to the homepage or any desired route
  };

  return (
    <div className="login-container">
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
      <h2>Login</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
      <p className="login-link">
        Don't have an account? <a href="/sign">Register</a>
      </p>
    </div>
  );
};

export default Login;
