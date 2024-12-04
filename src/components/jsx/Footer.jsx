import React from "react";
import "../stylesheets/Footer.css";
import logo from "../../assets/habot-logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src={logo}
            alt="Habot Logo"
            className="logo"
          />
          <p className="logo-text">© R Singhania</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Terms</h4>
            <ul>
              <li><a href="#">Data Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Related</h4>
            <ul>
              <li><a href="#">Find Buyer</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
