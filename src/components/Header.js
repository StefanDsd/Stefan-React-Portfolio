

import { FaHamburger } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './styles/Header.css';
import React,{ useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [navActive, setNavActive] = useState(false);

    const openMenu = () => {
        setNavActive(!navActive);
    }

  return (
    <div className="header">
      <div className="logo">
        <span>Stf</span>
      </div>


      <nav>
        <ul className={navActive ?'list-items active' : 'list-items'}>
          <div className="close-icon">
            <AiOutlineClose className="close" onClick={openMenu}/>
          </div>
          <li>
            <Link to="/" >Home</Link>
            <Link to="/Testimonials">Projects</Link>
            <Link to="/Info">About</Link>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger-icon">
        <FaHamburger className="icon" onClick={openMenu} />
      </div>
    </div>
  );
};

export default Header;