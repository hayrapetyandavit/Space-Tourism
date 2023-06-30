import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";
import { LinkContext, LinkContextType } from "../../context/LinkContext";

const Home: React.FC = () => {
  const { activeLink, setActiveLink } = useContext(
    LinkContext
  ) as LinkContextType;

  const handleButtonClick = () => {
    setActiveLink("destination");
  };

  return (
    <div className={classes.content}>
      <div className={classes.textContent}>
        <h2 className={classes.intro}>SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className={classes.title}>SPACE</h1>
        <p className={classes.text}>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination">
        <button className={classes.exploreBtn} onClick={handleButtonClick}>
          EXPLORE
        </button>
      </Link>
    </div>
  );
};

export default Home;
