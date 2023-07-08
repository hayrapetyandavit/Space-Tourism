import React from "react";

export const useKeyPress = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  events: Array<string>,
  points: number
) => {
  const handleKeyEvent = (e: KeyboardEvent) => {
    e.stopPropagation();
    switch (e.key && events.find((ev) => ev === e.key)) {
      case "ArrowUp":
        setState((prev) => (prev === 0 ? (prev = points) : --prev));
        break;
      case "ArrowDown":
        setState((prev) => (prev === points ? (prev = 0) : ++prev));
        break;
      case "ArrowLeft":
        setState((prev) => (prev === 0 ? (prev = points) : --prev));
        break;
      case "ArrowRight":
        setState((prev) => (prev === points ? (prev = 0) : ++prev));
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);
};
