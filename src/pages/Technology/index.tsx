import React, { useState } from "react";

import { useResize } from "../../hooks/useResize";
import { useKeyPress } from "../../hooks/useKeyPress";

import data from "../../../public/assets/data.json";

import View from "./View";

const Technology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTablet, setTablet] = useState<boolean>(false);

  useResize(1438.98, setTablet);

  if (isTablet) {
    useKeyPress(setActiveIndex, ["ArrowRight", "ArrowLeft"], 2);
  } else {
    useKeyPress(setActiveIndex, ["ArrowUp", "ArrowDown"], 2);
  }

  return (
    <View
      data={data}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );
};

export default Technology;
