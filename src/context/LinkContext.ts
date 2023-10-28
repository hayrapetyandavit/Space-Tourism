import { createContext } from "react";

export type LinkContextType = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  
};

export const LinkContext = createContext<LinkContextType | null>(null);
