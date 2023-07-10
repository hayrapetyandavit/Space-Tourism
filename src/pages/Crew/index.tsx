import React, { useEffect, useRef, useState } from "react";
import data from "../../../public/assets/data.json";
import { useKeyPress } from "../../hooks/useKeyPress";
import { genId } from "../../utils/genId";
import classes from "./styles.module.scss";

const Crew: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timer | number>();

  useKeyPress(setActiveIndex, ["ArrowRight", "ArrowLeft"], 3);

  const startTimeout = () => {
    timeoutRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === 3) prevIndex = -1;
        return ++prevIndex;
      });
    }, 4000);
  };

  useEffect(() => {
    startTimeout();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleLinkClick = (index: any) => {
    setActiveIndex(index);
    clearTimeout(timeoutRef.current);
    startTimeout();
  };

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span className={classes.introIndex}>02</span> meet your crew
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
                  key={genId()}
                  className={`${
                    activeIndex === index ? classes.activeLink : null
                  }`}
                  onClick={() => handleLinkClick(index)}
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
