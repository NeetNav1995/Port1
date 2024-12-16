import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import portfolio from "../../assets/images/portfolio.svg";
import download from "../../assets/images/download.svg";
import { NAVIGATION_ITEMS } from "../../Helper/Constants";

export default function HeaderBase() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");

  const _handleNavigation = (item) => {
    setActiveLink(item[0]);
    navigate(item[1]);
  };
  return (
    <nav className="header navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Logo or Brand */}
        <a className="navbar-brand">
          <img src={portfolio} />
        </a>

        {/* Button to toggle the navbar on smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={download} />
        </button>

        {/* Navbar items (links) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Object.entries(NAVIGATION_ITEMS).map((item) => {
              return (
                <li key={item[0]} className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === item[0] ? "active" : ""
                    }`}
                    onClick={() => _handleNavigation(item)}
                  >
                    {item[0]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
