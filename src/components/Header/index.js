
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../Header/index.modules.css";
import React, { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const openMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="header">
      <div className="logo">
        <span>Stf</span>
      </div>

      <nav>
        <ul className={navActive ? "list-items active" : "list-items"}>
          <div className="close-icon">
            <AiOutlineClose className="close" onClick={openMenu} />
          </div>
          <a href="#section">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
      <div className="hamburger-icon">
        <FaHamburger className="icon" onClick={openMenu} />
      </div>
    </div>
  );
};

export default Header;