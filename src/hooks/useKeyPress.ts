import React from "react";

export const useKeyPress = (
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  const handleKeyEvent = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "ArrowDown") {
      setState((prev) => (prev === 2 ? (prev = 0) : ++prev));
    }
    if (e.key === "ArrowUp") {
      setState((prev) => (prev === 0 ? (prev = 2) : --prev));
    }
    if (e.key === "ArrowRight") {
      setState((prev) => (prev === 3 ? (prev = 0) : ++prev));
    }
    if (e.key === "ArrowLeft") {
      setState((prev) => (prev === 0 ? (prev = 3) : --prev));
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);
};
