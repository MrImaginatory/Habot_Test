import React, { useState } from "react";
import navlogo from "../../assets/habot-logo.jpg";
import "../stylesheets/Header.css";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={navlogo} alt="Logo" />
      </div>
      <button className="hamburger" onClick={toggleNavbar}>
        ☰
      </button>
      <nav className={`navbar ${isNavbarVisible ? "visible" : ""}`}>
        <a href="#suppliers" className="nav-link">Find Suppliers</a>
        <div className="dropdown">
          <a
            href="#services"
            className="dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            Find Service Tags
          </a>
          <div className="dropdown-menu">
            <a href="#tag1">Tag 1</a>
            <a href="#tag2">Tag 2</a>
            <a href="#tag3">Tag 3</a>
          </div>
        </div>
        <button className="login-btn">Login / Signup</button>
      </nav>
    </header>
  );
};

export default Header;
