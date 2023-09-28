import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";
import { links } from "../../utils/data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-logo">
              <img src="/assets/images/Union.png" className="logo" alt="logo" />
              <h3>LOGO</h3>
            </div>
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars className="menu-icon" />
            </button>
          </div>
          <div className={`links-container ${showLinks && "show-height"}`}>
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} id={url}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
