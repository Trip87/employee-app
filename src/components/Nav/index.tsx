import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Nav = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => false);


  return (
    <div>
      <nav className="nav">
        <ul>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/user-list">ALL EMPLOYEES</Link></li>
          <li><Link to="/add-new-worker">ADD NEW EMPLOYEE</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
