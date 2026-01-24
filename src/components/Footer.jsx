import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h4>Foodie</h4>
          <p>© {new Date().getFullYear()} Foodie Limited</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Offers</a>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Customer Support</a>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Address: Saharanpur, Uttar Pradesh</p>
            <p>
              Email: <a href="#">foodie.digvijay@food.org</a>
            </p>
            <p>
              Phone: <a href="#">6397XXXXXX</a>
            </p>
          </div>

          <div className="footer-column">
            <h4>Life at Foodie</h4>
            <a href="#">Explore with Foodie</a>
            <a href="#">Foodie News</a>
          </div>

          <div className="footer-column">
            <h4>Available in:</h4>
            <a href="#">Saharanpur</a>
            <a href="#">Noida</a>
            <a href="#">Chandigarh</a>
            <a href="#">Bangalore</a>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <p>Stay connected for offers and updates</p>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaSnapchatGhost />
              </a>
              <a href="#">
                <ImYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <h4>For a better experience, download the Foodie app now</h4>
        <div className="store-buttons">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="Google Play"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="App Store"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
