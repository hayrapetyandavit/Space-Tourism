import React, { useState } from "react";
import data from "../../../public/assets/data.json";

import classes from "./styles.module.scss";

const Technology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev === 2 ? (prev = 0) : ++prev));
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev === 0 ? (prev = 2) : --prev));
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleKeyUp);
    };
  }, []);

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span>03</span> space lounch 101
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
