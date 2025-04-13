import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">AADYA FILMS</Link>
            <p>Capturing memories that last a lifetime</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navigation</h3>
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/client-albums">Client Albums</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-links-column">
              <h3>Services</h3>
              <Link to="/services">Drone Rentals & Agriculture Drones</Link>
              <Link to="/services">Portraits</Link>
              <Link to="/services">Commercials</Link>
              <Link to="/services">Camera Rentals</Link>
              <Link to="/services">Podcasts</Link>
            </div>

            {/* <div className="footer-links-column">
              <h3>Connect</h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
              <Link to="/contact">Email Us</Link>
            </div> */}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aadya Films | SAI RAM VASA</p>

          {/* <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
