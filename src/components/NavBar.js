import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />

      <div className="nav-items">
        <Link className="navlist " to="/">
          Home
        </Link>
        <Link className="navlist" to="/about">
          About
        </Link>
        <Link className="navlist" to="/portfolio">
          Portfolio
        </Link>
      </div>
      <button className="nav-btn">
        {/* <img className="nav-btn-img" src={contactImg} alt="" /> */}
        Contact Me
      </button>
    </nav>
  );
};

export default NavBar;
