import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LinkContext, LinkContextType } from "../../context/LinkContext";
import { genId } from "../../utils/genId";
import logo from "/assets/shared/logo.svg";
import menuOpen from "/assets/shared/icon-hamburger.svg";
import menuClose from "/assets/shared/icon-close.svg";

import classes from "./styles.module.scss";

const linkData = ["home", "destination", "crew", "technology"];

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const { activeLink, setActiveLink } = useContext(
    LinkContext
  ) as LinkContextType;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(e.currentTarget.innerText.slice(3).toLowerCase());
  };

  const handleBurgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logoLInk}>
        <img src={logo} alt="Logo" onClick={() => setActiveLink("home")} />
      </Link>
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
        className={`${classes.navigationMenu} ${!isMenuOpen ? classes.menuActive : null
          }`}
      >
        <hr className={classes.navHr} />
        <ul className={classes.linksList}>
          {linkData &&
            linkData.map((link, index) => (
              <li key={genId()}>
                <Link
                  className={classes.link}
                  to={link === "home" ? "/" : link}
                  onClick={handleLinkClick}
                >
                  <span className={classes.linkIndex}>0{index}</span> {link}
                  {activeLink === link ? (
                    <div className={classes.activeLink}></div>
                  ) : null}
                  <div className={classes.hovered}></div>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
