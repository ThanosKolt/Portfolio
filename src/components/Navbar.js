import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const barsBtn = useRef();
  const toggleNav = (type) => {
    if (type === "btn") {
      setIsNavOpen(!isNavOpen);
      barsBtn.current.classList.toggle("bars-open");
    }
    if (type === "link") {
      setIsNavOpen(false);
      barsBtn.current.classList.remove("bars-open");
    }
  };
  return (
    <nav>
      <h3 className="nav-logo">Thanos Koltsidas</h3>
      <div className={`nav-links ${isNavOpen ? `nav-show` : null}`}>
        <Link to="/" onClick={() => toggleNav("link")}>
          Home
        </Link>
        <Link to="/about" onClick={() => toggleNav("link")}>
          About
        </Link>
        <Link to="/projects" onClick={() => toggleNav("link")}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => toggleNav("link")}>
          Contact
        </Link>
      </div>
      <button className="bars" onClick={() => toggleNav("btn")} ref={barsBtn}>
        <FaBars></FaBars>
      </button>
    </nav>
  );
}

export default Navbar;
