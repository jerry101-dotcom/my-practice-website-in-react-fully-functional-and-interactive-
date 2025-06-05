import React from "react";
import brandLogo from "../assets/logo-light.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <header className="footer-head">
          <div className="header-wrapper footer-header-wrapper">
                <Link className="BrandName" to="/">
                  <img className="brand-logo" src={brandLogo} alt="Brand-Logo" />
                  {/* */}
                </Link>

                <nav className="footer-nav">
                  <Link to="/about">ABOUT US</Link>
                  <Link to="/location">LOCATION</Link>
                  <Link to="/contact">CONTACT</Link>
                </nav>
          </div>
        </header>

        <div className="contact-address">
            <div>
                <p>Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
            </div>

            <div>
                <p>Contact Us (Central Office)</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.com</p>
            </div>

            <div className="social-media">
                <FaFacebook className="social-media-icon" />
                <FaYoutube  className="social-media-icon"/>
                <FaTwitter  className="social-media-icon"/>
                <FaPinterest className="social-media-icon" />
                <FaInstagram className="social-media-icon"/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
