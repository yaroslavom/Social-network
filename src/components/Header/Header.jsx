import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import peopleSearch24Filled from '@iconify-icons/fluent/people-search-24-filled';
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
      <header>
        <div className="header_logo">
          <img src="logo192.png" alt="logo"></img>
        </div>
        <NavLink className="peopleSearch" to="/search">
          <Icon icon={peopleSearch24Filled} color="#d6d6d6" width="35" height="35"/>
        </NavLink>
      </header>
    )
}

export default Header;