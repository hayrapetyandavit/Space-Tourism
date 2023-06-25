import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/logo.svg";

import classes from "./styles.module.scss";

const Header: React.FC = () => {
  const [isLinkActive, setIsLinkActive] = useState<Boolean>(false);

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <hr className={classes.headerHr} />
      <nav className={classes.navigationMenu}>
        <hr className={classes.navHr} />
        <ul className={classes.linksList}>
          <li>
            <Link className={classes.link} to="/">
              <span className={classes.linkIndex}>00</span> home
              <div className={classes.activeLink}></div>
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/destination">
              <span className={classes.linkIndex}>01</span> destination
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/crew">
              <span className={classes.linkIndex}>02</span> crew
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/technology">
              <span className={classes.linkIndex}>03</span> technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
