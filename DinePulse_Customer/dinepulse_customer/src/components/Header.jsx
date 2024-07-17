import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import restaurantLogo from "../assets/restaurant_logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div
        className={`overlay ${isMobileMenuOpen ? "overlay-show" : ""}`}
        onClick={toggleMobileMenu}
      ></div>
      <div className="logo">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <img src={restaurantLogo} alt="Dine Pulse" />
          <span>DINE PULSE</span>
        </Link>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FaBars />
      </div>
      <div
        className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav-open" : ""}`}
      >
        <div className="mobile-nav-header">
          <Link to="/" onClick={toggleMobileMenu}>
            <img src={restaurantLogo} alt="Dine Pulse" />
            <span>DINE PULSE</span>
          </Link>
          <FaTimes onClick={toggleMobileMenu} />
        </div>
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMobileMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
