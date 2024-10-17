import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

import logo from "../assets/logo.webp";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="acts as home button" className="acting" />
        </Link>
      </div>
      <nav ref={navRef}>
        <div className="navlin">
          <ul>
            <li>
              <Link to="/crochet">Crochet</Link>
            </li>
            <li>
              <Link to="/knits">Knits</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </nav>
      <button onClick={showNavbar} className="navbut">
        {isNavOpen ? <IoCloseCircle /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
