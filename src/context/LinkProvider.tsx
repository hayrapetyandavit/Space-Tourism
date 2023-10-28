import { useState } from "react";
import { LinkContext } from "./LinkContext";

const LinkProvider: React.FC<any> = ({ children }) => {
  let initialLink = "home";

  const url = new URL(window.location.href);
  const path = url.pathname;

  path.length > 1 ? (initialLink = path.slice(1)) : "home";

  const [activeLink, setActiveLink] = useState<string>(initialLink);


  return (
    <LinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
