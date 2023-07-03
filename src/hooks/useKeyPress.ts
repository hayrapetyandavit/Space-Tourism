import React from "react";

interface IProps {
  setState: () => {};
}

export const useKeyPress = (type: any, fn: any) => {
  React.useEffect(() => {
    document.addEventListener("keydown", fn);
    document.addEventListener("keydown", fn);

    return () => {
      document.removeEventListener("keydown", fn);
      document.removeEventListener("keydown", fn);
    };
  }, []);
};
