import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>Galadima Printing Press</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to Galadima Printing Press</h2>
          <p>Your trusted partner for premium printing services and products.</p>
          <Link to="/signup" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>A4 Paper</h3>
            <p>High-quality paper for all your printing needs.</p>
            <span className="price">₦60</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <h3>A3 Paper</h3>
            <p>Perfect for posters and large prints.</p>
            <span className="price">₦120</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <h3>A4 Art Card</h3>
            <p>Professional-quality art card for creative designs.</p>
            <span className="price">₦150</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Binding</h3>
            <p>Professional binding for all document types.</p>
          </div>
          <div className="service-card">
            <h3>Business Card Printing</h3>
            <p>Custom business card designs that stand out.</p>
          </div>
          <div className="service-card">
            <h3>Banner Printing</h3>
            <p>Eye-catching banners for promotions and events.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p>Have questions or need assistance? Contact us today!</p>
        <div className="contact-info">
          <p>Email: <a href="mailto:alameen738@gmail.com">alameen738@gmail.com</a></p>
          <p>Phone: <a href="tel:+2348068989600">+2348068989600</a></p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Galadima Printing Press. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;