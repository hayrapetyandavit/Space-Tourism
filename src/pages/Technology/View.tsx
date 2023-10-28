import { FC } from "react";
import { motion } from "framer-motion";

import { genId } from "../../utils/genId";
import { dataType } from "../../types/dataType";
import { LEFT_ANIMATE } from "../../utils/constants/motion";

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
        <motion.div
          className={classes.textContent}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={LEFT_ANIMATE}
          transition={{ duration: 1.1 }}
        >
          <ul className={classes.linksList}>
            {data &&
              data.technology.map((_item, index) => (
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
        </motion.div>
        <div className={classes.imageContainer}>
          <img
            src={data.technology[activeIndex].images.portrait}
            alt={data.technology[activeIndex].name}
          />
        </div>
      </div>
    </div>
  );
};
export default View;
