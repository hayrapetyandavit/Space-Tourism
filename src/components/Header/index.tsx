import React from "react";
import logo from "/assets/shared/logo.svg";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
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
              <span className={classes.linkIndex}>00</span> HOME
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/destination">
              <span className={classes.linkIndex}>01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/crew">
              <span className={classes.linkIndex}>02</span> CREW
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/technology">
              <span className={classes.linkIndex}>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
