import React, { FC } from "react";

import { genId } from "../../utils/genId";
import { dataType } from "../../types/dataType";

import classes from "./styles.module.scss";

interface IProps {
  data: dataType;
  activeIndex: number;
  containerRef: React.RefObject<HTMLDivElement>;
  handleLinkClick: (index: number) => void;
}

const View: FC<IProps> = (props) => {
  const { data, activeIndex, containerRef, handleLinkClick } = props;

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span className={classes.introIndex}>01</span> pick your destination
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.imageContainer} ref={containerRef}></div>
        <div className={classes.textContent}>
          <nav className={classes.navbarDestination}>
            <ul className={classes.linksList}>
              {data &&
                data.destinations.map((item, index) => (
                  <li
                    id={`${index}`}
                    key={genId()}
                    onClick={() => handleLinkClick(index)}
                  >
                    <span>{item.name}</span>
                    {activeIndex === index ? (
                      <div className={classes.activeLink}></div>
                    ) : null}
                    <div className={classes.hovered}></div>
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

export default View;
