import React, { useEffect, useRef, useState } from "react";

import { useKeyPress } from "../../hooks/useKeyPress";

import data from "../../assets/data.json";

import View from "./View";

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

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    clearTimeout(timeoutRef.current);
    startTimeout();
  };

  return (
    <View
      data={data}
      activeIndex={activeIndex}
      handleLinkClick={handleLinkClick}
    />
  );
};

export default Crew;
