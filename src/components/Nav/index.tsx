import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { t } = useTranslation();

  return (
    <div>
      <nav className="nav">
        <ul>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
          <li>
            <Link to="/">{t("app.nav.home")}</Link>
          </li>
          <li>
            <Link to="/user-list">{t("app.nav.employee-list")}</Link>
          </li>
          <li>
            <Link to="/add-new-worker">{t("app.nav.new-employee")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
