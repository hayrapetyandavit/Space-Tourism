import React, { FC } from "react";
import { Link } from "react-router-dom";

import { genId } from "../../utils/genId";

import menuClose from "/assets/shared/icon-close.svg";
import menuOpen from "/assets/shared/icon-hamburger.svg";

import classes from "./styles.module.scss";

interface IProps {
  logoSrc: string;
  links: string[];
  isMenuOpen: boolean;
  activeLink: string;
  handleBurgerClick: () => void;
  handleLogoClick: () => void;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const View: FC<IProps> = (props) => {
  const {
    logoSrc,
    links,
    isMenuOpen,
    activeLink,
    handleBurgerClick,
    handleLinkClick,
    handleLogoClick,
  } = props;

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logoLInk}>
        <img src={logoSrc} alt="Logo" onClick={handleLogoClick} />
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
        className={`${classes.navigationMenu} ${
          !isMenuOpen ? classes.menuActive : null
        }`}
      >
        <hr className={classes.navHr} />
        <ul className={classes.linksList}>
          {links &&
            links.map((link, index) => (
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

export default View;
