import React, { useState } from "react";
import data from "../../../public/assets/data.json";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useResize } from "../../hooks/useResize";
import { genId } from "../../utils/genId";

import classes from "./styles.module.scss";

const Technology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTablet, setTablet] = useState<boolean>(false);

  useResize(1438.98, setTablet);

  if (isTablet) {
    useKeyPress(setActiveIndex, ["ArrowRight", "ArrowLeft"], 2);
  } else {
    useKeyPress(setActiveIndex, ["ArrowUp", "ArrowDown"], 2);
  }
console.log(isTablet)

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
                  key={genId()}
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
