import React, { FC } from "react";

import { genId } from "../../utils/genId";
import { dataType } from "../../types/dataType";

import classes from "./styles.module.scss";

interface IProps {
  data: dataType;
  activeIndex: number;
  handleLinkClick: (index: number) => void;
}

const View: FC<IProps> = ({ data, activeIndex, handleLinkClick }) => {
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
          <img src={data.crew[activeIndex].images.png} alt="Staff image" />
        </div>
      </div>
    </div>
  );
};

export default View;
