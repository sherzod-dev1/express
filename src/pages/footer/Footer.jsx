import React from 'react';
import './foter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-column brand-info">
            <h2 className="footer-logo">EKSPRESS</h2>
            <p>
              At FastGo, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          <div className="footer-column">
            <h3>NAVIGATION</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>RECENT PROJECT</h3>
            <div className="recent-project-box"></div>
          </div>

          <div className="footer-column subscribe">
            <h3>SUBSCRIBE US</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter Your Email" />
              <button className="subscribe-btn">SUBSCRIBE NOW</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p>COPYRIGHT © 2023 EKSPRESS</p>
          <p>DESIGNED BY TOKOTEMA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
