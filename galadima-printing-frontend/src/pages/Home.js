import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Galadima Printing Press</h1>
          <p className="hero-description">
            Your trusted partner for all your printing needs. High-quality prints, fast delivery, and great prices.
          </p>
          <a href="/products" className="cta-button">Explore Our Products</a>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="feature-item">
          <h2>High-Quality Printing</h2>
          <p>We use state-of-the-art equipment for top-notch prints.</p>
        </div>
        <div className="feature-item">
          <h2>Fast Delivery</h2>
          <p>Get your prints delivered on time, every time.</p>
        </div>
        <div className="feature-item">
          <h2>Affordable Prices</h2>
          <p>We offer competitive pricing without compromising on quality.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
