import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/user-list">ALL EMPLOYEES</Link></li>
          <li><Link to="/add-new-worker">ADD NEW EMPLOYEE</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
