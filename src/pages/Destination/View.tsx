import React, { FC } from "react";
import { motion } from "framer-motion";

import { genId } from "../../utils/genId";
import { dataType } from "../../types/dataType";
import { RIGHT_ANIMATE } from "../../utils/constants/motion";

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
        <motion.div
          className={classes.textContent}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={RIGHT_ANIMATE}
          transition={{ duration: 1.1 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default View;
