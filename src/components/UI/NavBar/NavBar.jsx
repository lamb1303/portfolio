import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
  const [nav, navSlide] = useState(false);
  const navLinks = document.querySelectorAll(".nav-links li");

  let slide = "";
  if (nav) {
    slide = "nav-active";
  }

  navLinks.forEach((link, id) => {
    if (!nav) {
      link.style = ``;
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${id / 7 + 0.6}s`;
    }
  });

  return (
    <nav>
      <div className="logo">
        <img src="logo.svg" alt="home" className="logo-animation"></img>
      </div>
      <div className="burger" onClick={() => navSlide(!nav)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${slide}`}>
        <li>
          <NavLink onClick={() => navSlide(!nav)} to={{ pathname: "/home" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => navSlide(!nav)} to={{ pathname: "/about" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => navSlide(!nav)} to={{ pathname: "/work" }}>
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
