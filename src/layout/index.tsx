import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import classes from "./stylies.module.scss";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
