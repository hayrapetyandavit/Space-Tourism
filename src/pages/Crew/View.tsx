import { FC } from "react";
import { motion } from "framer-motion";

import { genId } from "../../utils/genId";
import { dataType } from "../../types/dataType";
import { LEFT_ANIMATE, RIGHT_ANIMATE } from "../../utils/constants/motion";

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
        <motion.div
          className={classes.textContent}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={LEFT_ANIMATE}
          transition={{ duration: 1.1 }}
        >
          <h2 className={classes.subtitle}>{data.crew[activeIndex].role}</h2>
          <h1 className={classes.title}>{data.crew[activeIndex].name}</h1>
          <p className={classes.text}>{data.crew[activeIndex].bio}</p>
          <ul className={classes.linksList}>
            {data &&
              data.crew.map((_item, index) => (
                <li
                  key={genId()}
                  className={`${
                    activeIndex === index ? classes.activeLink : null
                  }`}
                  onClick={() => handleLinkClick(index)}
                ></li>
              ))}
          </ul>
        </motion.div>
        <motion.div
          className={classes.imageContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={RIGHT_ANIMATE}
          transition={{ duration: 1 }}
        >
          <img
            src={data.crew[activeIndex].images.png}
            alt={data.crew[activeIndex].name}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default View;
