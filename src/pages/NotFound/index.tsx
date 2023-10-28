import { FC } from "react";
import { useNavigate } from "react-router-dom";

import View from "./View";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return <View handleButtonClick={handleButtonClick} />;
};

export default NotFound;
