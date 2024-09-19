// src/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Create a CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/donate">Donate Blood</Link>
          </li>
          <li>
            <Link to="/request">Request Blood</Link>
          </li>
          <li>
            <Link to="/donors">Donors List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
