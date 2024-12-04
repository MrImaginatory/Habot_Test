import React from "react";
import "../stylesheets/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Are You a Supplier?</h1>
        <p>Explore Matching Opportunities.</p>
        <div className="input-group">
          <div className="input-wrapper">
            <span className="icon"><i className="fa-solid fa-briefcase" style={{color: "#efa661"}}></i></span>
            <input type="text" placeholder="Search for suppliers" />
          </div>
          <div className="input-wrapper">
            <span className="icon"><i className="fa-solid fa-location-dot" style={{color: "#efa661"}}></i></span>
            <input type="text" placeholder="Enter your location" />
          </div>
          <button className="search-btn">Search</button>
        </div>
        <a href="#learn-more" className="additional-link">
        Are you a buyer? <span> Click here if you are looking to post a requirements</span> 
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
