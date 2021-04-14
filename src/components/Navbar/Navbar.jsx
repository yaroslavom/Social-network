import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu_list">
        <li>
          <NavLink className="hover_effect" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="hover_effect" to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className="hover_effect">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="hover_effect">
            Settings
          </NavLink>
        </li>
      </ul>
      <ul className="menu_friends">
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRJKEb3xKDCPYnEAJW99iOsOBEqp1JTQS1A&usqp=CAU" />
            <br />
            <span className="hover_effect">Oleg</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU" />
            <br />
            <span className="hover_effect">Nikita</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnG0huY6whcqQtmgJDP7XgSb8VCpmLUnKXw&usqp=CAU" />
            <br />
            <span className="hover_effect">Andrey</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
