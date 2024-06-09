import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { t } = useTranslation();

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

            <Link
              to="/"
              className="button button--primary button--content button--large btn"
            >
              {t("app.nav.home")}
            </Link>

            <Link
              to="/user-list"
              className="button button--primary button--content button--large btn"
            >
              {t("app.nav.employee-list")}
            </Link>

            <Link
              to="/add-new-worker"
              className="button button--primary button--content button--large btn"
            >
              {t("app.nav.new-employee")}
            </Link>
          </ul>
        </nav>
      </div>
    );
  };
};
export default Nav;
