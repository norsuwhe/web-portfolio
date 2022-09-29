import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavBarLinkItems } from "./NavBarLinkItems";
import bars from "../../assets/svg/bars-solid.svg";
import xmark from "../../assets/svg/xmark-solid.svg";
import "./NavBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenChange = () => setIsOpen(() => !isOpen);

  const openButton = (
    <button className="navigation__menu-button" onClick={isOpenChange}>
      <img src={bars} alt="open mobile menu" />
    </button>
  );

  const closeButton = (
    <button className="navigation__menu-button" onClick={isOpenChange}>
      <img src={xmark} alt="close mobile menu" />
    </button>
  );

  return (
    <nav className="navigation">
      {isOpen ? closeButton : openButton}
      <ul
        className={`navigation__links ${
          isOpen ? "navigation__links_active" : ""
        }`}
      >
        {NavBarLinkItems.map((navlink, index) => {
          return (
            <li key={index} onClick={isOpenChange}>
              <NavLink className="navigation__link" to={navlink.url}>
                {navlink.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
