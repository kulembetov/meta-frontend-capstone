import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import {
  CONTACT_ADDRESS,
  CONTACT_NUMBER,
  CONTACT_EMAIL,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TWITTER_LINK,
} from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          <Link className="footer-item" to="/">
            Home
          </Link>
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/menu">
            Menu
          </Link>
          <Link className="footer-item" to="/reservations">
            Reservations
          </Link>
          <Link className="footer-item" to="/order-online">
            Order Online
          </Link>
          <Link className="footer-item" to="/login">
            Login
          </Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item">{CONTACT_ADDRESS}</p>
          <p className="footer-item">{CONTACT_NUMBER}</p>
          <p className="footer-item">{CONTACT_EMAIL}</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA LINKS</p>
          <a
            className="footer-item"
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="footer-item"
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-item"
            href={TWITTER_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
