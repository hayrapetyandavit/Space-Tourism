import React, { useContext, useState, useEffect } from "react";

import { useResize } from "../../hooks/useResize";
import { links } from "../../utils/constants/links";
import { LinkContext, LinkContextType } from "../../context/LinkContext";

import View from "./View";

import mobileLogo from "/assets/logo/logo-34x34.png";
import defaultLogo from "/assets/logo/logo-48x48.png";

const Header: React.FC = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>(defaultLogo);

  const { activeLink, setActiveLink } = useContext(
    LinkContext
  ) as LinkContextType;

  useResize(767.98, setMobile);

  useEffect(() => {
    if (isMobile) {
      setLogoSrc(mobileLogo);
    } else {
      setLogoSrc(defaultLogo);
    }
  }, [isMobile]);

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
    logoSrc,
    links,
    isMenuOpen,
    activeLink,
    handleBurgerClick,
    handleLinkClick,
    handleLogoClick,
  };

  return <View {...viewProps} />;
};

export default Header;
