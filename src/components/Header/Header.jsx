import React from 'react';
import { Icon} from '@iconify/react';
import peopleSearch24Filled from '@iconify-icons/fluent/people-search-24-filled';
import reactIcon from '@iconify-icons/logos/react';
import { NavLink } from "react-router-dom";
import LoginImg from "../../assets/image/login.svg"

const Header = () => {
    return (
      <header>
        <NavLink className="header_logo" to="/">
          <Icon icon={reactIcon} width="50px" height="50px" />
        </NavLink>
        <NavLink className="peopleSearch" to="/search">
          <Icon icon={peopleSearch24Filled} color="#d6d6d6" width="35" height="35"/>
        </NavLink>
        <NavLink to="/login">
          <img src={LoginImg} alt="login"/>
        </NavLink>
      </header>
    )
}

export default Header;