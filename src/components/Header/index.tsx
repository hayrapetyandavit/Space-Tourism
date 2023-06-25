import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import menuOpen from "/assets/shared/icon-hamburger.svg";
import menuClose from "/assets/shared/icon-close.svg";

import classes from "./styles.module.scss";

const linkData = ["home", "destination", "crew", "technology"];

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = (e: any) => {
    setActiveLink(e.target.innerText.slice(3).toLowerCase());
  };

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div
        className={classes.burgerMenu}
        id={classes.hi}
        onClick={handleBurgerClick}
      >
        {isMenuOpen ? (
          <img src={menuClose} alt="Close icon" />
        ) : (
          <img src={menuOpen} alt="Burger icon" />
        )}
      </div>
      <hr className={classes.headerHr} />
      <nav
        className={`${classes.navigationMenu} ${
          !isMenuOpen ? classes.menuActive : null
        }`}
      >
        <hr className={classes.navHr} />
        <ul className={classes.linksList}>
          {linkData &&
            linkData.map((link, index) => (
              <li key={Math.random()}>
                <Link
                  className={classes.link}
                  to={link === "home" ? "/" : link}
                  onClick={handleLinkClick}
                >
                  <span className={classes.linkIndex}>0{index}</span> {link}
                  {activeLink === link ? (
                    <div className={classes.activeLink}></div>
                  ) : null}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
