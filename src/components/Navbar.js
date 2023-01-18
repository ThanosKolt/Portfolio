import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <h3 className="nav-logo">Thanos Koltsidas</h3>
      <div className={`nav-links ${isNavOpen ? `nav-show` : null}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="bars" onClick={() => setIsNavOpen(!isNavOpen)}>
        <FaBars></FaBars>
      </button>
    </nav>
  );
}

export default Navbar;
