import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            alt="logo"
            src="https://assets.website-files.com/606764a311491eafe0e305af/617c73c34a99e146abbec270_8%20logo%20Black%20social%20media%20.png"
          ></img>
        </Link>
        <ul className="nav-links">
          <li className="nav-item-home">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item-add">
            <Link to="/add">Add User</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
