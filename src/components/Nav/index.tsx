import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Button from "../Button/Button";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div>
      <nav className="">
        <ul className="nav">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
          
            
            <Link to="/" className="button button--primary button--content button--large btn">
            HOME PAGE
            </Link>

          
          
          <Link to="/user-list" className="button button--primary button--content button--large btn" >
            ALL EMPLOYEES
             </Link>
            
          
            
          <Link to="/add-new-worker" className="button button--primary button--content button--large btn">
            ADD NEW EMPLOYEE
             </Link>

          
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
