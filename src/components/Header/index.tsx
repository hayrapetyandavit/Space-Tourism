import React, { useContext, useState } from "react";

import { LinkContext, LinkContextType } from "../../context/LinkContext";

import View from "./View";

const linkData = ["home", "destination", "crew", "technology"];

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const { activeLink, setActiveLink } = useContext(
    LinkContext
  ) as LinkContextType;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(e.currentTarget.innerText.slice(3).toLowerCase());
    setMenuOpen(false);
  };

  const handleBurgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLogoClick = () => {
    setActiveLink("home");
  };

  const viewProps = {
    linkData,
    isMenuOpen,
    activeLink,
    handleBurgerClick,
    handleLinkClick,
    handleLogoClick,
  };

  return <View {...viewProps} />;
};

export default Header;
