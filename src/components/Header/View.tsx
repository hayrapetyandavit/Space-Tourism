import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { genId } from "../../utils/genId";
import { useResize } from "../../hooks/useResize";

import mobileLogo from "../../assets/logo/logo-34x34.png";
import defaultLogo from "../../assets/logo/logo-48x48.png";
import menuClose from "../../assets/shared/icon-close.svg";
import menuOpen from "../../assets/shared/icon-hamburger.svg";

import classes from "./styles.module.scss";

interface IProps {
  linkData: string[];
  isMenuOpen: boolean;
  activeLink: string;
  handleBurgerClick: () => void;
  handleLogoClick: () => void;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const View: FC<IProps> = (props) => {
  const {
    linkData,
    isMenuOpen,
    activeLink,
    handleBurgerClick,
    handleLinkClick,
    handleLogoClick,
  } = props;

  const [isMobile, setMobile] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>(defaultLogo);

  useResize(767.98, setMobile);

  useEffect(() => {
    if (isMobile) {
      setLogoSrc(mobileLogo);
    } else {
      setLogoSrc(defaultLogo);
    }
  }, [isMobile]);

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

export default View;
