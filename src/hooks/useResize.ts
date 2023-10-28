import { useEffect } from "react";

export const useResize = (
  size: number,
  setFunc: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleResize = () => {
      setFunc(window.innerWidth < size);
    };
    handleResize();

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
