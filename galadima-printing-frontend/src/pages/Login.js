// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css';  // Ensure the CSS file is correctly linked

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for login submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Log in to access your account.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="login-footer">
          Don't have an account? <a href="/signup">Sign up here</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
