import React, { FC } from "react";

import { genId } from "../../utils/genId";
import { dataType } from "../../types/dataType";

import classes from "./styles.module.scss";

interface IProps {
  data: dataType;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const View: FC<IProps> = ({ data, activeIndex, setActiveIndex }) => {
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
                  className={`${
                    activeIndex === index ? classes.activeLink : null
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
          <img src={data.technology[activeIndex].images.portrait} alt="Technology" />
        </div>
      </div>
    </div>
  );
};
export default View;
