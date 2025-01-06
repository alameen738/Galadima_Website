import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccessMessage(""); // Clear any success messages

    // Simulate an API call with setTimeout
    setTimeout(() => {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      // You can mock saving the form data (e.g., logging it)
      console.log("Form submitted:", formData);
      setSuccessMessage("Account created successfully!");

      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1000); // Simulate a 1 second delay for the API response
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Join Galadima Printing</h2>
        <p className="signup-subtitle">Sign up to access premium printing services!</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="signup-footer">
          Already have an account? <a href="/login">Log in here</a>.
        </div>
      </div>
    </div>
  );
};

export default SignUp;