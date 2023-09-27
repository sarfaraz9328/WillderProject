import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <navbar>
        <div className="logo">
          <img src="./assets/images/Union.png" alt="logo" />
          LOGO
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Page1</li>
            <li>page2</li>
          </ul>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
