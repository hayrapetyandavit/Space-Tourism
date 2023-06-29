import React, { useEffect, useState } from "react";
import data from "../../../public/assets/data.json";

import classes from "./styles.module.scss";

const Crew: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === 3) prevIndex = -1;
        return ++prevIndex;
      });
    }, 4000);

    return () => {
      clearInterval(slider);
    };
  }, []);

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span>02</span> meet your crew
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.textContent}>
          <h2 className={classes.subtitle}>{data.crew[activeIndex].role}</h2>
          <h1 className={classes.title}>{data.crew[activeIndex].name}</h1>
          <p className={classes.text}>{data.crew[activeIndex].bio}</p>
          <ul className={classes.linksList}>
            {data &&
              data.crew.map((item, index) => (
                <li
                  key={Math.random()}
                  className={`${
                    activeIndex === index ? classes.activeLink : null
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></li>
              ))}
          </ul>
        </div>
        <div className={classes.imageContainer}>
          <img src={data.crew[activeIndex].images.png} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
