import React, { useEffect, useState } from "react";
import data from "../../../public/assets/data.json";

import classes from "./styles.module.scss";

const Destination: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredLink, setHoveredLink] = useState<null | number>(null);

  useEffect(() => {
      // localStorage.removeItem("path")
      // console.log("dest unmount")
  }, [])

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span>01</span> pick your destination
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.imageContainer}>
          <img src={data.destinations[activeIndex].images.png} alt="" />
        </div>
        <div className={classes.textContent}>
          <nav className={classes.navbarDestination}>
            <ul className={classes.linksList}>
              {data &&
                data.destinations.map((item, index) => (
                  <li
                    key={Math.random()}
                    onClick={() => setActiveIndex(index)}
                    onMouseOver={() => setHoveredLink(index)}
                    onMouseOut={() => setHoveredLink(null)}
                  >
                    <span>{item.name}</span>
                    {activeIndex === index ? (
                      <div className={classes.activeLink}></div>
                    ) : null}
                    {hoveredLink === index ? (
                      <div className={classes.hoveredLink}></div>
                    ) : null}
                  </li>
                ))}
            </ul>
          </nav>
          <h1 className={classes.title}>
            {data.destinations[activeIndex].name}
          </h1>
          <p className={classes.text}>
            {data.destinations[activeIndex].description}
          </p>
          <hr />
          <div className={classes.details}>
            <div className={classes.distance}>
              <span>AVG. DISTANCE</span>
              {data.destinations[activeIndex].distance}
            </div>
            <div className={classes.time}>
              <span>Est. travel time</span>
              {data.destinations[activeIndex].travel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
