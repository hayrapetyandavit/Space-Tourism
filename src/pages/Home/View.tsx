import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BOTTOM_ANIMATE } from "../../utils/constants/motion";

import classes from "./styles.module.scss";

interface IProps {
  handleButtonClick: () => void;
}

const View: FC<IProps> = ({ handleButtonClick }) => {
  return (
    <div className={classes.content}>
      <motion.div
        className={classes.textContent}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={BOTTOM_ANIMATE}
        transition={{ duration: 6 }}
      >
        <h2 className={classes.intro}>SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className={classes.title}>SPACE</h1>
        <p className={classes.text}>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </motion.div>
      <Link to="/destination">
        <button className={classes.exploreBtn} onClick={handleButtonClick}>
          EXPLORE
        </button>
      </Link>
    </div>
  );
};

export default View;
