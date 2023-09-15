import { useEffect } from "react";

export const useResize = (
  size: number,
  setFunc: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleResize = () => {
      setFunc(window.innerWidth < size);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
