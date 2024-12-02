import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Galadima Printing</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button className="search-btn">Search</button>
      </div>
      <nav className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="user-cart">
        <Link to="/cart" className="cart-icon">
          <span role="img" aria-label="cart">
            🛒
          </span>
        </Link>
        <Link to="/account" className="user-icon">
          <span role="img" aria-label="user">
            👤
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;