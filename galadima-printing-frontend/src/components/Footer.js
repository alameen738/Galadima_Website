import React from "react";
import "./Footer.css"; // Make sure this is the correct path to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo */}
        <div className="footer-logo">
          <h3>Galadima Printing Press</h3>
        </div>
        
        {/* Footer Links */}
        <div className="footer-links">
          <ul>
            <li>
              <a href="#contact" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="#privacy" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        
        {/* Footer Social Media */}
        <div className="footer-socials">
          <ul>
            <li>
              <a
                href="https://facebook.com"
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Galadima Printing Press. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;