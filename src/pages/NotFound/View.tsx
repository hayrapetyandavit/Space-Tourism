import { FC } from "react";

import logo from "../../../public/assets/logo/logo-48x48.png";

import classes from "./style.module.scss";

interface IProps {
  handleButtonClick: () => void;
}

const View: FC<IProps> = ({ handleButtonClick }) => {
  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span className={classes.introIndex}>
          WARNING!!!
        </span>{" "}
        You Fall Out Of Orbit
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.textContent}>
          <h3 className={classes.subtitle}>
            We advise you to return and travel with us.
          </h3>
          <button className={classes.homeButton} onClick={handleButtonClick}>
            Go To The Earth <img src={logo} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
