import React, { useContext } from "react";

import { LinkContext, LinkContextType } from "../../context/LinkContext";

import View from "./View";

const Home: React.FC = () => {
  const { setActiveLink } = useContext(
    LinkContext
  ) as LinkContextType;

  const handleButtonClick = () => {
    setActiveLink("destination");
  };

  return <View handleButtonClick={handleButtonClick} />;
};

export default Home;
