import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-link">
            <ul>
              <li>Home</li>
              <li>Page 1</li>
              <li>Page 2</li>
            </ul>
            <div className="h-line"></div>
          </div>
          <div className="social-media-link">
            <img
              className="social-link"
              src="./assets/images/facebook.png"
              alt="facebook-logo"
            />
            <img
              className="social-link"
              src="./assets/images/twitter.png"
              alt="twiter-logo"
            />
            <img
              className="social-link"
              src="./assets/images/instagram.png"
              alt="instagram-logo"
            />
            <img
              className="social-link"
              src="./assets/images/tiktok.png"
              alt="tiktok-logo"
            />
          </div>

          <div className="copy-right">
            <p>© TAIKO JUKI, Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
