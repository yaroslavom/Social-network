import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu_list">
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
