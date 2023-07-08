import React, { useState } from "react";
import data from "../../../public/assets/data.json";

import classes from "./styles.module.scss";
import { useKeyPress } from "../../hooks/useKeyPress";

const Technology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useKeyPress(setActiveIndex, ["ArrowUp", "ArrowDown"], 2);

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span className={classes.introIndex}>03</span> space lounch 101
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.textContent}>
          <ul className={classes.linksList}>
            {data &&
              data.technology.map((item, index) => (
                <li
                  key={Math.random()}
                  className={`${activeIndex === index ? classes.activeLink : null
                    }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{index + 1}</span>
                </li>
              ))}
          </ul>
          <div>
            <h2 className={classes.subtitle}>the technology...</h2>
            <h1 className={classes.title}>
              {data.technology[activeIndex].name}
            </h1>
            <p className={classes.text}>
              {data.technology[activeIndex].description}
            </p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={data.technology[activeIndex].images.portrait} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
