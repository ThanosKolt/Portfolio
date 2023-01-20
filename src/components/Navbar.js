import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <h3 className="nav-logo">Thanos Koltsidas</h3>
      <div className={`nav-links ${isNavOpen ? `nav-show` : null}`}>
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsNavOpen(false)}>
          About
        </Link>
        <Link to="/projects" onClick={() => setIsNavOpen(false)}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setIsNavOpen(false)}>
          Contact
        </Link>
      </div>
      <button className="bars" onClick={() => setIsNavOpen(!isNavOpen)}>
        <FaBars></FaBars>
      </button>
    </nav>
  );
}

export default Navbar;
